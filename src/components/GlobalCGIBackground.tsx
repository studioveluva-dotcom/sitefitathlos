import { useEffect, useRef } from "react";
import * as THREE from "three";

export function GlobalCGIBackground() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.25 : 1.75);

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.06);

    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100);
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(dpr);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);
    Object.assign(renderer.domElement.style, {
      width: "100%", height: "100%", display: "block",
    });

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.2));
    const key = new THREE.PointLight(0xff2030, 8, 40);
    key.position.set(6, 4, 6);
    scene.add(key);
    const fill = new THREE.PointLight(0xffffff, 1.2, 40);
    fill.position.set(-6, -3, -2);
    scene.add(fill);

    // Floating glass shards
    const shardGroup = new THREE.Group();
    scene.add(shardGroup);

    const shardMat = new THREE.MeshPhysicalMaterial({
      color: 0x0a0a0a,
      metalness: 0.4,
      roughness: 0.15,
      transmission: 0.85,
      thickness: 1.5,
      ior: 1.5,
      clearcoat: 1,
      clearcoatRoughness: 0.05,
      transparent: true,
      opacity: 0.85,
      emissive: 0x220006,
      emissiveIntensity: 0.5,
    });
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xff2a3a, wireframe: true, transparent: true, opacity: 0.35,
    });

    const shapes: { mesh: THREE.Mesh; wire: THREE.Mesh; speed: THREE.Vector3; orbit: number; radius: number; phase: number; y: number }[] = [];
    const SHARD_COUNT = isMobile ? 5 : 9;
    const geometries = [
      new THREE.IcosahedronGeometry(0.7, 1),
      new THREE.OctahedronGeometry(0.8, 0),
      new THREE.TorusGeometry(0.65, 0.08, 8, 48),
      new THREE.TetrahedronGeometry(0.85, 0),
      new THREE.DodecahedronGeometry(0.7, 0),
    ];

    for (let i = 0; i < SHARD_COUNT; i++) {
      const geo = geometries[i % geometries.length];
      const mesh = new THREE.Mesh(geo, shardMat);
      const wire = new THREE.Mesh(geo, wireMat);
      wire.scale.setScalar(1.08);
      mesh.add(wire);
      shardGroup.add(mesh);
      shapes.push({
        mesh,
        wire,
        speed: new THREE.Vector3(
          (Math.random() - 0.5) * 0.6,
          (Math.random() - 0.5) * 0.5,
          (Math.random() - 0.5) * 0.4
        ),
        orbit: 0.15 + Math.random() * 0.25,
        radius: 2 + Math.random() * 4,
        phase: Math.random() * Math.PI * 2,
        y: (Math.random() - 0.5) * 4,
      });
    }

    // Particle field
    const PCOUNT = isMobile ? 400 : 1200;
    const positions = new Float32Array(PCOUNT * 3);
    for (let i = 0; i < PCOUNT; i++) {
      const r = 4 + Math.random() * 14;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0xffffff, size: 0.025, transparent: true, opacity: 0.55, sizeAttenuation: true,
    });
    const points = new THREE.Points(pGeo, pMat);
    scene.add(points);

    // Red dust particles
    const RCOUNT = isMobile ? 200 : 500;
    const rPos = new Float32Array(RCOUNT * 3);
    for (let i = 0; i < RCOUNT; i++) {
      rPos[i * 3] = (Math.random() - 0.5) * 22;
      rPos[i * 3 + 1] = (Math.random() - 0.5) * 18;
      rPos[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    const rGeo = new THREE.BufferGeometry();
    rGeo.setAttribute("position", new THREE.BufferAttribute(rPos, 3));
    const rMat = new THREE.PointsMaterial({
      color: 0xff3040, size: 0.06, transparent: true, opacity: 0.55, sizeAttenuation: true, blending: THREE.AdditiveBlending,
    });
    const dust = new THREE.Points(rGeo, rMat);
    scene.add(dust);

    // Scroll & pointer state
    let scrollY = window.scrollY;
    let pointer = { x: 0, y: 0, tx: 0, ty: 0 };
    function onScroll() { scrollY = window.scrollY; }
    function onPointer(e: PointerEvent) {
      pointer.tx = (e.clientX / window.innerWidth - 0.5) * 2;
      pointer.ty = (e.clientY / window.innerHeight - 0.5) * 2;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onPointer, { passive: true });

    function resize() {
      const w = mount!.clientWidth;
      const h = mount!.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }
    const ro = new ResizeObserver(resize);
    ro.observe(mount);
    resize();

    let raf = 0;
    let visible = true;
    const onVis = () => { visible = !document.hidden; };
    document.addEventListener("visibilitychange", onVis);

    const start = performance.now();
    function tick() {
      raf = requestAnimationFrame(tick);
      if (!visible) return;
      const t = (performance.now() - start) / 1000;
      pointer.x += (pointer.tx - pointer.x) * 0.04;
      pointer.y += (pointer.ty - pointer.y) * 0.04;

      // Camera drifts with scroll & pointer
      const scrollNorm = Math.min(scrollY / Math.max(document.body.scrollHeight - window.innerHeight, 1), 1);
      camera.position.x = pointer.x * 0.6;
      camera.position.y = -pointer.y * 0.4 + Math.sin(t * 0.2) * 0.3;
      camera.position.z = 8 - scrollNorm * 2.5;
      camera.lookAt(0, scrollNorm * -2, 0);

      shardGroup.rotation.y = t * 0.05 + scrollNorm * 1.5;
      shardGroup.rotation.x = scrollNorm * 0.6;

      for (let i = 0; i < shapes.length; i++) {
        const s = shapes[i];
        const angle = t * s.orbit + s.phase;
        s.mesh.position.set(
          Math.cos(angle) * s.radius,
          s.y + Math.sin(t * 0.5 + s.phase) * 0.6,
          Math.sin(angle) * s.radius
        );
        s.mesh.rotation.x += s.speed.x * 0.01;
        s.mesh.rotation.y += s.speed.y * 0.01;
        s.mesh.rotation.z += s.speed.z * 0.01;
      }

      points.rotation.y = t * 0.02;
      dust.rotation.y = -t * 0.015;
      dust.rotation.z = Math.sin(t * 0.1) * 0.1;

      renderer.render(scene, camera);
    }
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointer);
      document.removeEventListener("visibilitychange", onVis);
      ro.disconnect();
      geometries.forEach((g) => g.dispose());
      shardMat.dispose(); wireMat.dispose();
      pGeo.dispose(); pMat.dispose();
      rGeo.dispose(); rMat.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
