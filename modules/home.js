lucide.createIcons();


window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
      initHeroAnimations();
      initThreeJS();
    }, 500);
  }, 1000);
});


gsap.registerPlugin(ScrollTrigger);

function initHeroAnimations() {
  gsap.from(".gsap-fade-up", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
  });

  gsap.from(".hero-card", {
    scale: 0.8,
    opacity: 0,
    rotationY: 45,
    duration: 1.5,
    delay: 0.5,
    ease: "elastic.out(1, 0.75)",
  });
}

gsap.utils.toArray(".gsap-feature").forEach((feature, i) => {
  gsap.from(feature, {
    scrollTrigger: {
      trigger: feature,
      start: "top 85%",
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    delay: i * 0.2,
    ease: "power2.out",
  });
});


gsap.utils.toArray(".gsap-cat").forEach((cat, i) => {
  gsap.from(cat, {
    scrollTrigger: {
      trigger: cat,
      start: "top 85%",
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    delay: i * 0.1,
    ease: "power2.out",
  });
});


const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("bg-bm-dark/90", "backdrop-blur-md", "shadow-lg");
    navbar.classList.remove("bg-transparent", "py-4");
    navbar.classList.add("py-2");
  } else {
    navbar.classList.remove(
      "bg-bm-dark/90",
      "backdrop-blur-md",
      "shadow-lg",
      "py-2"
    );
    navbar.classList.add("bg-transparent", "py-4");
  }
});


const card = document.getElementById("tilt-card");
const container = card.parentElement;

container.addEventListener("mousemove", (e) => {
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = ((y - centerY) / centerY) * -10; 
  const rotateY = ((x - centerX) / centerX) * 10;

  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

container.addEventListener("mouseleave", () => {
  card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
});


function initThreeJS() {
  const container = document.getElementById("canvas-container");
  const scene = new THREE.Scene();

  scene.fog = new THREE.FogExp2(0x16376d, 0.0015);

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  container.appendChild(renderer.domElement);

  const group = new THREE.Group();
  scene.add(group);

  const geometry = new THREE.IcosahedronGeometry(10, 1); 
  const material = new THREE.MeshBasicMaterial({
    color: 0xfbbf24,
    wireframe: true,
    transparent: true,
    opacity: 0.15,
  });

  const solidMaterial = new THREE.MeshBasicMaterial({
    color: 0x255096,
    transparent: true,
    opacity: 0.05,
  });


  for (let i = 0; i < 15; i++) {
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = (Math.random() - 0.5) * 200;
    mesh.position.y = (Math.random() - 0.5) * 100;
    mesh.position.z = (Math.random() - 0.5) * 100 - 20;
    mesh.rotation.x = Math.random() * Math.PI;
    mesh.rotation.y = Math.random() * Math.PI;

    const scale = Math.random() + 0.5;
    mesh.scale.set(scale, scale, scale);

    group.add(mesh);


    const innerMesh = new THREE.Mesh(
      new THREE.IcosahedronGeometry(10, 0),
      solidMaterial
    );
    innerMesh.position.copy(mesh.position);
    innerMesh.scale.set(scale * 0.5, scale * 0.5, scale * 0.5);
    group.add(innerMesh);
  }

  camera.position.z = 50;

  let mouseX = 0;
  let mouseY = 0;

  document.addEventListener("mousemove", (event) => {
    mouseX = (event.clientX - window.innerWidth / 2) * 0.05;
    mouseY = (event.clientY - window.innerHeight / 2) * 0.05;
  });

  function animate() {
    requestAnimationFrame(animate);

    group.rotation.y += 0.001;
    group.rotation.x += 0.0005;

    camera.position.x += (mouseX - camera.position.x) * 0.05;
    camera.position.y += (-mouseY - camera.position.y) * 0.05;
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
  }

  animate();

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}
