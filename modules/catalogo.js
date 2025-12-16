const products = [
  {
    id: 1,
    name: "Taladro Percutor Pro 20V",
    category: "Eléctricas",
    price: 150.0,
    image:
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=500&q=80",
    rating: 5,
  },
  {
    id: 2,
    name: "Sierra Circular 1400W",
    category: "Eléctricas",
    price: 210.0,
    image:
      "https://herramientaelectrica.mx/cdn/shop/files/Capturadepantalla2024-08-27135820.png?v=1724788886",
    rating: 4,
  },
  {
    id: 3,
    name: "Lijadora Orbital V3",
    category: "Eléctricas",
    price: 89.99,
    image:
      "https://hagalo.mx/45484-large_default/lijadora-orbital-black-and-decker2-con-sistema-aleatorio-2-amps.jpg",
    rating: 4,
  },
  {
    id: 4,
    name: "Esmeriladora Angular",
    category: "Eléctricas",
    price: 125.5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOfpTCMARcvzoyjb3Vz1xzoCBf_wYZPATk2A&s",
    rating: 5,
  },
  {
    id: 5,
    name: "Rotomartillo Industrial",
    category: "Eléctricas",
    price: 320.0,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROB6rLSO6cbiH_GAMzH6p4Av2DFyMc0sP7sA&s",
    rating: 5,
  },
  {
    id: 6,
    name: "Destornillador Inalámbrico",
    category: "Eléctricas",
    price: 65.0,
    image:
      "https://m.media-amazon.com/images/I/61qoLUXIm5L._AC_UF894,1000_QL80_.jpg",
    rating: 4,
  },
  {
    id: 7,
    name: "Set Llaves Combinadas",
    category: "Manuales",
    price: 45.0,
    image:
      "https://www.knova.com.mx/products/12424@3x.jpg",
    rating: 5,
  },
  {
    id: 8,
    name: "Martillo Carpintero",
    category: "Manuales",
    price: 22.5,
    image:
      "https://images.unsplash.com/photo-1586864387789-628af9feed72?w=500&q=80",
    rating: 4,
  },
  {
    id: 9,
    name: "Set Destornilladores",
    category: "Manuales",
    price: 35.0,
    image:
      "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=500&q=80",
    rating: 4,
  },
  {
    id: 10,
    name: "Alicates Universales",
    category: "Manuales",
    price: 18.0,
    image:
      "https://m.media-amazon.com/images/I/51JfuWLcD0L.jpg",
    rating: 3,
  },
  {
    id: 11,
    name: 'Llave Inglesa 10"',
    category: "Manuales",
    price: 28.0,
    image:
      "https://ail.com.mx/wp-content/uploads/2023/07/B65442-1.jpg",
    rating: 5,
  },
  {
    id: 12,
    name: "Sierra de Mano",
    category: "Manuales",
    price: 19.99,
    image:
      "https://m.media-amazon.com/images/I/51MSueHHHqL.jpg",
    rating: 4,
  },
  {
    id: 13,
    name: "Casco de Seguridad",
    category: "Seguridad",
    price: 15.0,
    image:
      "https://cdnx.jumpseller.com/finsa/image/17367531/resize/1037/1037?1676477233",
    rating: 5,
  },
  {
    id: 14,
    name: "Guantes Anti-corte",
    category: "Seguridad",
    price: 12.0,
    image:
      "https://cdn.homedepot.com.mx/productos/148581/148581-d.jpg",
    rating: 4,
  },
  {
    id: 15,
    name: "Gafas Protectoras",
    category: "Seguridad",
    price: 8.5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbkouITkIol3yd-kUy1SA8ffwUYXi6vLsIjg&s",
    rating: 4,
  },
  {
    id: 16,
    name: "Botas Punta Acero",
    category: "Seguridad",
    price: 85.0,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgUlPt96h7JxoooJ4N0CXoKD0HgEWnLnUt6w&s",
    rating: 5,
  },
  {
    id: 17,
    name: "Chaleco Reflectante",
    category: "Seguridad",
    price: 9.99,
    image:
      "https://i5.walmartimages.com/asr/f6a07b26-a482-4367-9c95-db350aed5019.805e03a41a5795570feebe924e437097.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    rating: 3,
  },
  {
    id: 18,
    name: "Cinta Métrica 8m",
    category: "Medición",
    price: 14.0,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Qy7HoYLrdmVdNIQ-WAjf_wpQKDIe60ajCg&s",
    rating: 5,
  },
  {
    id: 19,
    name: "Nivel Láser Cruz",
    category: "Medición",
    price: 145.0,
    image:
      "https://boschstore.com.mx/wp-content/uploads/2020/02/0601063S00.png",
    rating: 5,
  },
  {
    id: 20,
    name: "Calibre Digital",
    category: "Medición",
    price: 38.0,
    image:
      "https://img.uline.com/is/image/uline/H-7352?$Mobile_Zoom$",
    rating: 4,
  },
];

let cart = JSON.parse(localStorage.getItem("bmtools_cart")) || [];

function initThreeJS() {
  const container = document.getElementById("canvas-container");
  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x16376d, 0.002);

  const camera = new THREE.PerspectiveCamera(
    75,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  container.appendChild(renderer.domElement);


  const particlesGeometry = new THREE.BufferGeometry();
  const particlesCount = 300;
  const posArray = new Float32Array(particlesCount * 3);

  for (let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 60; // Spread
  }
  particlesGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(posArray, 3)
  );

  const material = new THREE.PointsMaterial({
    size: 0.15,
    color: 0xfbbf24,
    transparent: true,
    opacity: 0.8,
  });

  const particlesMesh = new THREE.Points(particlesGeometry, material);
  scene.add(particlesMesh);

  camera.position.z = 20;


  let mouseY = 0;
  let mouseX = 0;

  document.addEventListener("mousemove", (event) => {
    mouseY = event.clientY * 0.0005;
    mouseX = event.clientX * 0.0005;
  });

  function animate() {
    requestAnimationFrame(animate);
    particlesMesh.rotation.y += 0.001;
    particlesMesh.rotation.x = mouseY;
    particlesMesh.rotation.y += mouseX * 0.1;
    renderer.render(scene, camera);
  }
  animate();

  window.addEventListener("resize", () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  });
}

function renderProducts(items) {
  const grid = document.getElementById("products-grid");
  const emptyState = document.getElementById("empty-state");
  const countLabel = document.getElementById("showing-count");

  grid.innerHTML = "";
  countLabel.textContent = items.length;

  if (items.length === 0) {
    grid.classList.add("hidden");
    emptyState.classList.remove("hidden");
    return;
  } else {
    grid.classList.remove("hidden");
    emptyState.classList.add("hidden");
  }

  items.forEach((product, index) => {
    // Generar estrellas
    let stars = "";
    for (let i = 0; i < 5; i++) {
      stars += `<i data-lucide="star" class="w-3 h-3 ${
        i < product.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
      }"></i>`;
    }

    // Estructura de Tarjeta con IDs únicos para animación
    const cardHTML = `
                    <div class="product-card-container group h-full">
                        <div class="product-card bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden h-full flex flex-col relative" id="card-${
                          product.id
                        }">
                            
                            <!-- Botón Quick View (Hover Overlay) -->
                            <div class="absolute inset-0 bg-bm-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center backdrop-blur-[2px]">
                                <button onclick="openQuickView(${
                                  product.id
                                })" class="transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 px-6 py-2 bg-white text-bm-dark font-bold rounded-full shadow-xl hover:bg-bm-accent hover:text-bm-primary flex items-center gap-2">
                                    <i data-lucide="eye" class="w-4 h-4"></i> Vista Rápida
                                </button>
                            </div>

                            <div class="relative p-8 bg-gray-50 flex items-center justify-center h-64 overflow-hidden">
                                <span class="absolute top-4 left-4 z-10 bg-white/80 backdrop-blur text-bm-dark text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider border border-gray-100 shadow-sm">${
                                  product.category
                                }</span>
                                <img src="${product.image}" id="img-${
      product.id
    }" alt="${
      product.name
    }" class="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-110 relative z-0">
                            </div>
                            
                            <div class="p-6 flex-1 flex flex-col relative bg-white z-10">
                                <h3 class="font-display font-bold text-bm-dark text-lg leading-tight mb-2 group-hover:text-bm-primary transition-colors cursor-pointer" onclick="openQuickView(${
                                  product.id
                                })">${product.name}</h3>
                                <div class="flex items-center gap-1 mb-4">
                                    ${stars}
                                    <span class="text-xs text-gray-400 ml-1 font-medium">(${
                                      product.rating
                                    }.0)</span>
                                </div>
                                <div class="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
                                    <div class="flex flex-col">
                                        <span class="text-xs text-gray-400 font-medium">Precio</span>
                                        <span class="text-2xl font-bold text-bm-primary">$${product.price.toFixed(
                                          2
                                        )}</span>
                                    </div>
                                    <button onclick="addToCart(event, ${
                                      product.id
                                    })" class="relative p-3 bg-bm-primary text-white rounded-xl hover:bg-bm-accent hover:text-bm-primary transition-all active:scale-95 shadow-lg hover:shadow-bm-accent/40 group/btn overflow-hidden">
                                        <div class="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                                        <i data-lucide="shopping-cart" class="w-5 h-5 relative z-10"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
    grid.innerHTML += cardHTML;
  });

  // Animación de entrada Stagger con GSAP
  gsap.from(".product-card-container", {
    y: 50,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: "power2.out",
    clearProps: "all",
  });

  lucide.createIcons();
  initTiltEffect(); // Inicializar efecto 3D
}

function initTiltEffect() {
  const cards = document.querySelectorAll(".product-card");
  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Rotación sutil
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
    });
  });
}


function addToCart(event, productId) {
  if (event) event.stopPropagation();

  const product = products.find((p) => p.id === productId);
  const existingItem = cart.find((item) => item.id === productId);

  const btn = event.currentTarget;
  const cartIcon = document.getElementById("cart-btn-desktop"); 
  const productImg = document.getElementById(`img-${productId}`);

  if (productImg && cartIcon) {
    const flyImg = productImg.cloneNode();
    flyImg.classList.add("flying-img");

    const rectImg = productImg.getBoundingClientRect();
    flyImg.style.width = `${rectImg.width}px`;
    flyImg.style.height = `${rectImg.height}px`;
    flyImg.style.top = `${rectImg.top}px`;
    flyImg.style.left = `${rectImg.left}px`;

    document.body.appendChild(flyImg);

    const rectCart = cartIcon.getBoundingClientRect();

    gsap.to(flyImg, {
      top: rectCart.top + 10,
      left: rectCart.left + 10,
      width: 20,
      height: 20,
      opacity: 0,
      duration: 0.8,
      ease: "power3.inOut",
      onComplete: () => {
        flyImg.remove();
        cartIcon.classList.add("scale-125");
        setTimeout(() => cartIcon.classList.remove("scale-125"), 200);

        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          cart.push({ ...product, quantity: 1 });
        }
        updateCartUI();
        saveCart();
      },
    });
  } else {
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    updateCartUI();
    saveCart();
  }
}

function openQuickView(id) {
  const product = products.find((p) => p.id === id);
  if (!product) return;

  document.getElementById("modal-img").src = product.image;
  document.getElementById("modal-category").textContent = product.category;
  document.getElementById("modal-title").textContent = product.name;
  document.getElementById(
    "modal-price"
  ).textContent = `$${product.price.toFixed(2)}`;


  const starsContainer = document.getElementById("modal-stars");
  starsContainer.innerHTML = "";
  for (let i = 0; i < 5; i++) {
    starsContainer.innerHTML += `<i data-lucide="star" class="w-4 h-4 ${
      i < product.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
    }"></i>`;
  }
  lucide.createIcons();

  const btn = document.getElementById("modal-add-btn");
  btn.onclick = (e) => {
    addToCart(e, product.id);
    closeQuickView();
  };

 
  const modal = document.getElementById("quick-view-modal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");


  setTimeout(() => {
    document.getElementById("modal-bg").classList.remove("opacity-0");
    document
      .getElementById("modal-content")
      .classList.remove("opacity-0", "scale-95");
    document.getElementById("modal-content").classList.add("scale-100");
  }, 10);
}

function closeQuickView() {
  document.getElementById("modal-bg").classList.add("opacity-0");
  document.getElementById("modal-content").classList.remove("scale-100");
  document
    .getElementById("modal-content")
    .classList.add("opacity-0", "scale-95");

  setTimeout(() => {
    const modal = document.getElementById("quick-view-modal");
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }, 300);
}


function filterProducts() {
  const searchTerm = document
    .getElementById("search-input")
    .value.toLowerCase();
  const category = document.querySelector(
    'input[name="category"]:checked'
  ).value;

  const filtered = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm);
    const matchesCategory = category === "all" || product.category === category;
    return matchesSearch && matchesCategory;
  });

  const sortValue = document.querySelector("select").value;
  sortFilteredProducts(filtered, sortValue);
}

function sortFilteredProducts(items, order) {
  if (order === "low") items.sort((a, b) => a.price - b.price);
  else if (order === "high") items.sort((a, b) => b.price - a.price);
  renderProducts(items);
}

function sortProducts(order) {
  filterProducts();
}

function resetFilters() {
  document.getElementById("search-input").value = "";
  document.querySelector('input[name="category"][value="all"]').checked = true;
  filterProducts();
}

document
  .getElementById("search-input")
  .addEventListener("input", filterProducts);

function toggleCart() {
  const sidebar = document.getElementById("cart-sidebar");
  const overlay = document.getElementById("cart-overlay");
  if (sidebar.classList.contains("open")) {
    sidebar.classList.remove("open");
    overlay.classList.add("hidden");
    document.body.style.overflow = "auto";
  } else {
    sidebar.classList.add("open");
    overlay.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  updateCartUI();
  saveCart();
}

function changeQuantity(productId, change) {
  const item = cart.find((item) => item.id === productId);
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) removeFromCart(productId);
    else {
      updateCartUI();
      saveCart();
    }
  }
}

function updateCartUI() {
  const container = document.getElementById("cart-items-container");
  const badge = document.getElementById("cart-badge");
  const headerCount = document.getElementById("cart-items-count-header");

  container.innerHTML = "";
  let total = 0;
  let count = 0;

  if (cart.length === 0) {
    container.innerHTML = `
                    <div class="flex flex-col items-center justify-center h-full text-center text-gray-400">
                        <i data-lucide="shopping-bag" class="w-16 h-16 mb-4 opacity-20"></i>
                        <p class="font-medium">Tu pedido está vacío</p>
                        <button onclick="toggleCart()" class="text-bm-primary font-bold mt-4 hover:underline">Ir al catálogo</button>
                    </div>`;
  }

  cart.forEach((item) => {
    total += item.price * item.quantity;
    count += item.quantity;
    container.innerHTML += `
                    <div class="flex gap-4 bg-white p-3 rounded-xl border border-gray-100 shadow-sm transition-all hover:shadow-md">
                        <div class="w-20 h-20 bg-gray-50 rounded-lg flex items-center justify-center flex-shrink-0">
                            <img src="${
                              item.image
                            }" class="w-full h-full object-contain mix-blend-multiply p-1">
                        </div>
                        <div class="flex-1 flex flex-col justify-between">
                            <div>
                                <h4 class="font-bold text-sm text-bm-dark line-clamp-1">${
                                  item.name
                                }</h4>
                                <div class="flex justify-between items-center mt-1">
                                    <span class="text-xs text-gray-500 font-mono">$${item.price.toFixed(
                                      2
                                    )}</span>
                                    <span class="text-xs font-bold text-bm-primary">$${(
                                      item.price * item.quantity
                                    ).toFixed(2)}</span>
                                </div>
                            </div>
                            <div class="flex justify-between items-center mt-2">
                                <div class="flex items-center gap-2 bg-gray-100 rounded-lg px-2 py-1 h-8">
                                    <button onclick="changeQuantity(${
                                      item.id
                                    }, -1)" class="text-gray-500 hover:text-bm-primary"><i data-lucide="minus" class="w-3 h-3"></i></button>
                                    <span class="text-xs font-bold w-4 text-center">${
                                      item.quantity
                                    }</span>
                                    <button onclick="changeQuantity(${
                                      item.id
                                    }, 1)" class="text-gray-500 hover:text-bm-primary"><i data-lucide="plus" class="w-3 h-3"></i></button>
                                </div>
                                <button onclick="removeFromCart(${
                                  item.id
                                })" class="text-gray-300 hover:text-red-500 transition-colors"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
                            </div>
                        </div>
                    </div>`;
  });

  const tax = total * 0.16;
  const finalTotal = total + tax;

  document.getElementById("cart-subtotal").textContent = `$${total.toFixed(2)}`;
  document.getElementById("cart-tax").textContent = `$${tax.toFixed(2)}`;
  document.getElementById("cart-total").textContent = `$${finalTotal.toFixed(
    2
  )}`;

  if (count > 0) {
    badge.textContent = count;
    badge.classList.remove("opacity-0", "scale-0");
    headerCount.textContent = count;
    headerCount.classList.remove("scale-0");
  } else {
    badge.classList.add("opacity-0", "scale-0");
    headerCount.textContent = "0";
    headerCount.classList.add("scale-0");
  }

  lucide.createIcons();
}

function saveCart() {
  localStorage.setItem("bmtools_cart", JSON.stringify(cart));
}

window.addEventListener("load", () => {
  initThreeJS();
  filterProducts();
  updateCartUI();
});
