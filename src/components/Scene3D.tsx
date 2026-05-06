import { useEffect, useRef } from "react";
import * as THREE from "three";

type Props = {
  variant?: "hero" | "ambient";
  className?: string;
};

export function Scene3D({ variant = "hero", className = "" }: Props) {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
    camera.position.set(0, 0, 6);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(dpr);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.display = "block";

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.25));
    const key = new THREE.PointLight(0xff2a3a, 6, 30);
    key.position.set(4, 3, 5);
    scene.add(key);
    const rim = new THREE.PointLight(0xffffff, 2, 30);
    rim.position.set(-5, -3, -3);
    scene.add(rim);

    // Group for orbiting objects
    const group = new THREE.Group();
    scene.add(group);

    // Central icosahedron — glass
    const coreGeo = new THREE.IcosahedronGeometry(1.4, 1);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0x111111,
      metalness: 0.3,
      roughness: 0.15,
      transmission: 0.85,
      thickness: 1.2,
      ior: 1.45,
      clearcoat: 1,
      clearcoatRoughness: 0.05,
      transparent: true,
      opacity: 0.9,
      emissive: 0x330008,
      emissiveIntensity: 0.4,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    group.add(core);

    // Wireframe shell
    const wireGeo = new THREE.IcosahedronGeometry(1.85, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xff2a3a,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const wire = new THREE.Mesh(wireGeo, wireMat);
    group.add(wire);

    // Outer torus
    const torusGeo = new THREE.TorusGeometry(2.6, 0.015, 8, 128);
    const torusMat = new THREE.MeshBasicMaterial({ color: 0xff3a48, transparent: true, opacity: 0.6 });
    const torus1 = new THREE.Mesh(torusGeo, torusMat);
    const torus2 = new THREE.Mesh(torusGeo, torusMat);
    torus2.rotation.x = Math.PI / 2;
    const torus3 = new THREE.Mesh(torusGeo, torusMat);
    torus3.rotation.y = Math.PI / 3;
    torus3.rotation.x = Math.PI / 4;
    scene.add(torus1, torus2, torus3);

    // Floating particles
    const PCOUNT = isMobile ? 250 : 600;
    const positions = new Float32Array(PCOUNT * 3);
    for (let i = 0; i < PCOUNT; i++) {
      const r = 3 + Math.random() * 6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.03,
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: true,
    });
    const points = new THREE.Points(pGeo, pMat);
    scene.add(points);

    // Pointer-driven parallax
    const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
    function onPointer(e: PointerEvent) {
      const r = mount!.getBoundingClientRect();
      pointer.tx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      pointer.ty = ((e.clientY - r.top) / r.height - 0.5) * 2;
    }
    window.addEventListener("pointermove", onPointer);

    // Resize
    function resize() {
      const w = mount!.clientWidth;
      const h = mount!.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      if (variant === "ambient") camera.position.z = isMobile ? 8 : 7;
      camera.updateProjectionMatrix();
    }
    const ro = new ResizeObserver(resize);
    ro.observe(mount);
    resize();

    let raf = 0;
    const start = performance.now();
    function tick() {
      const t = (performance.now() - start) / 1000;
      pointer.x += (pointer.tx - pointer.x) * 0.05;
      pointer.y += (pointer.ty - pointer.y) * 0.05;

      group.rotation.y = t * 0.25 + pointer.x * 0.4;
      group.rotation.x = Math.sin(t * 0.4) * 0.2 + pointer.y * 0.25;
      wire.rotation.y = -t * 0.4;
      wire.rotation.x = t * 0.2;

      torus1.rotation.z = t * 0.3;
      torus2.rotation.z = -t * 0.25;
      torus3.rotation.x = t * 0.2;

      points.rotation.y = t * 0.05;
      points.rotation.x = Math.sin(t * 0.1) * 0.1;

      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    }
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointer);
      ro.disconnect();
      renderer.dispose();
      coreGeo.dispose(); coreMat.dispose();
      wireGeo.dispose(); wireMat.dispose();
      torusGeo.dispose(); torusMat.dispose();
      pGeo.dispose(); pMat.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, [variant]);

  return <div ref={mountRef} className={`absolute inset-0 ${className}`} aria-hidden />;
}
