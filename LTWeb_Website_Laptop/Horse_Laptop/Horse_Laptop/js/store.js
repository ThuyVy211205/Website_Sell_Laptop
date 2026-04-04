// Dữ liệu sản phẩm + helpers dùng chung cho nhiều trang
const products = [
  {
    id: 1,
    name: 'HP 14',
    price: 16490000,
    category: 'hp',
    rating: 4.8,
    image: '../images/hp-14-1.webp',
    colors: [
      { key: 'purple', label: 'Purple', hex: '#8b5cf6', image: '../images/hp-14-1.webp' },
      { key: 'midnight', label: 'Midnight Blue', hex: '#0b1b4a' }
    ],
    defaultColorKey: 'purple',
    featured: false
  },
  {
    id: 2,
    name: 'HP 15',
    price: 24500000,
    category: 'hp',
    rating: 4.9,
    image: '../images/hp-15-1.webp',
    colors: [
      { key: 'titanium-orange', label: 'Titanium Orange', hex: '#f97316', image: '../images/hp-15-1.webp' },
      { key: 'midnight', label: 'Midnight Blue', hex: '#0b1b4a' }
    ],
    defaultColorKey: 'titanium-orange',
    featured: false
  },
  {
    id: 3,
    name: 'HP Pro Book',
    price: 18990000,
    category: 'hp',
    rating: 4.7,
    image: '../images/hp-probook-1.webp',
    colors: [
      { key: 'titanium-orange', label: 'Titanium Orange', hex: '#f97316', image: '../images/hp-probook-1.webp' },
      { key: 'midnight', label: 'Midnight Blue', hex: '#0b1b4a' }
    ],
    defaultColorKey: 'titanium-orange',
    featured: false
  },
  {
    id: 4,
    name: 'Dell Inspiron 15 5430',
    price: 17290000,
    category: 'dell',
    rating: 4.7,
    image: '../images/dell-15-1.webp',
    colors: [
      { key: 'pink', label: 'Pink', hex: '#fb7185', image: '../images/dell-15-1.webp' },
      { key: 'midnight', label: 'Midnight Blue', hex: '#0b1b4a' }
    ],
    defaultColorKey: 'pink',
    featured: true
  },
  {
    id: 5,
    name: 'Dell Inspiron 16 3520',
    price: 12490000,
    category: 'dell',
    rating: 4.5,
    image: '../images/dell-16-1.webp',
    colors: [
      { key: 'ultramarine', label: 'Xanh Lưu Ly', hex: '#1d4ed8', image: '../images/dell-16-1.webp' },

    ],
    defaultColorKey: 'ultramarine',
    featured: false
  },
  {
    id: 6,
    name: 'Dell 16 Plus 3250',
    price: 45990000,
    category: 'dell',
    rating: 5.0,
    image: '../images/dell-16-plus-1.webp',
    colors: [
      { key: 'silver', label: 'Bạc', hex: '#d4d4d8', image: '../images/dell-16-plus-1.webp' }
    ],
    defaultColorKey: 'silver',
    featured: false
  },
  {
    id: 7,
    name: 'Lenovo ThinkPad',
    price: 13990000,
    category: 'lenovo',
    rating: 4.6,
    image: '../images/lenovo-think-pad-1.webp',
    colors: [
      { key: 'silver', label: 'Bạc', hex: '#d4d4d8', image: '../images/lenovo-think-pad-1.webp' }
    ],
    defaultColorKey: 'silver',
    featured: true
  },
  {
    id: 8,
    name: 'Lenovo ThinkBook',
    price: 26490000,
    category: 'lenovo',
    rating: 4.9,
    image: '../images/lenovo-thinkbook-1.webp',
    colors: [
      { key: 'silver', label: 'Bạc', hex: '#d4d4d8', image: '../images/lenovo-thinkbook-1.webp' }
    ],
    defaultColorKey: 'silver',
    featured: false
  },
  {
    id: 9,
    name: 'Lenovo V14',
    price: 32990000,
    category: 'lenovo',
    rating: 4.8,
    image: '../images/lenovo-v14-1.webp',
    colors: [
      { key: 'silver', label: 'Bạc', hex: '#d4d4d8', image: '../images/lenovo-v14-1.webp' }
    ],
    defaultColorKey: 'silver',
    featured: true
  },
  {
    id: 10,
    name: 'MacBook Air M5 15 inch (2026)',
    price: 39990000,
    category: 'macbook',
    rating: 4.8,
    image: '../images/macbook_air_m5.webp',
    colors: [
      { key: 'silver', label: 'Bạc', hex: '#d4d4d8', image: '../images/macbook_air_m5.webp' },
      { key: 'midnight', label: 'Midnight', hex: '#0b1b4a', image: '../images/macbook_air_m5.webp' }
    ],
    defaultColorKey: 'silver',
    featured: true
  },
  {
    id: 11,
    name: 'MacBook Air M4 13 inch (2025)',
    price: 31990000,
    category: 'macbook',
    rating: 4.7,
    image: '../images/macbook_air_m4.webp',
    colors: [
      { key: 'silver', label: 'Bạc', hex: '#d4d4d8', image: '../images/macbook_air_m4.webp' },
      { key: 'space-gray', label: 'Space Gray', hex: '#3f3f46', image: '../images/macbook_air_m4.webp' }
    ],
    defaultColorKey: 'silver',
    featured: true
  },
  {
    id: 12,
    name: 'MacBook Air M2 13 inch (2024)',
    price: 27990000,
    category: 'macbook',
    rating: 4.6,
    image: '../images/macbook_air_m2.webp',
    colors: [
      { key: 'silver', label: 'Bạc', hex: '#d4d4d8', image: '../images/macbook_air_m2.webp' },
      { key: 'space-gray', label: 'Space Gray', hex: '#3f3f46', image: '../images/macbook_air_m2.webp' }
    ],
    defaultColorKey: 'silver',
    featured: false
  }
];

// Slide hero giới thiệu sản phẩm mới (Laptop)
const heroSlides = [
  {
    id: 'hp-14',
    title: 'HP 14 Series',
    subtitle: 'Laptop nhẹ và mạnh mẽ cho công việc hàng ngày',
    image: '../images/hp-14-1.webp'
  },
  {
    id: 'macbook-m5',
    title: 'MacBook Air M5',
    subtitle: 'Hiệu năng vượt trội với chip M5 mới nhất',
    image: 'img/macbook_air_m5.webp'
  },
  {
    id: 'dell-15',
    title: 'Dell Inspiron 15',
    subtitle: 'Thiết kế tinh tế, hiệu suất cao, giá hợp lý',
    image: '../images/dell-15-1.webp'
  },
  {
    id: 'hp-probook',
    title: 'HP ProBook',
    subtitle: 'Laptop chuyên nghiệp cho các chuyên gia',
    image: '../images/hp-probook-1.webp'
  }
];

// Định dạng giá VNĐ
function formatPrice(value) {
  return `${Number(value || 0).toLocaleString('vi-VN')}đ`;
}

let baseList = products.slice();

function setBaseList(list) {
  baseList = Array.isArray(list) ? list.slice() : products.slice();
}

function getBaseList() {
  return baseList.slice();
}

function getSpecChips(product) {
  const name = (product.name || '').toLowerCase();

  // Laptop specs
  if (product.category === 'hp') {
    if (name.includes('14')) return ['14"', 'Intel'];
    if (name.includes('15')) return ['15.6"', 'Intel'];
    if (name.includes('pro')) return ['14"', 'Intel Pro'];
    return ['14"'];
  }

  if (product.category === 'dell') {
    if (name.includes('16')) return ['16"', 'Intel'];
    if (name.includes('15')) return ['15"', 'Intel'];
    return ['15"'];
  }

  if (product.category === 'lenovo') {
    if (name.includes('thinkpad')) return ['14"', 'AMD Ryzen'];
    if (name.includes('thinkbook')) return ['14"', 'Intel Core'];
    if (name.includes('v14')) return ['14"', 'RTX 4060'];
    return ['14"'];
  }

  if (product.category === 'macbook') {
    if (name.includes('15')) return ['15.3"', 'Apple M'];
    if (name.includes('13')) return ['13.6"', 'Apple M'];
    return ['15.3"'];
  }

  return ['Chính hãng', 'Bảo hành'];
}

// Render sản phẩm vào #productGrid (nếu có)
function renderProducts(list = baseList) {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  const safeList = Array.isArray(list) ? list : [];

  if (!safeList.length) {
    grid.innerHTML = '<p>Không tìm thấy sản phẩm phù hợp.</p>';
    return;
  }

  grid.innerHTML = safeList
    .map((product) => {
      const chips = getSpecChips(product);
      const rating = product.rating || 0;

      const displayImage = product.image;

      return `
        <div class="product-card product-card--shop fade-in" data-product-id="${product.id}">
          <div class="product-image product-image--shop">
            <img src="${displayImage}" alt="${product.name}">
            ${product.isNew ? `<span class="corner-badge corner-badge--new">Mới</span>` : ''}
            <button class="product-fav" type="button" aria-label="Yêu thích">
              ♡
            </button>
          </div>

          <div class="product-info product-info--shop">
            <h3 class="product-name product-name--shop">${product.name}</h3>

            <div class="product-price product-price--shop">
              <span class="price-current price-current--shop">${formatPrice(product.price)}</span>
            </div>

            <div class="installment-label">Trả góp 0%</div>

            <div class="product-specs" aria-label="Thông số nhanh">
              ${chips.map((c) => `<span class="spec-pill">${c}</span>`).join('')}
            </div>

            <div class="product-actions">
              <div class="product-rating-inline" aria-label="Đánh giá">
                <span class="star">★</span>
                <span class="rating-value">${rating ? rating.toFixed(1) : '5.0'}</span>
              </div>

              <button class="add-to-cart-btn add-to-cart-btn--compact" data-product-id="${product.id}">
                Thêm vào giỏ
              </button>
            </div>
          </div>
        </div>
      `;
    })
    .join('');
}

function setupProductGridInteractions() {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  if (grid.dataset.swatchesBound === '1') return;
  grid.dataset.swatchesBound = '1';

  grid.addEventListener('click', (e) => {
    // Xử lý nút yêu thích
    if (e.target.closest('.product-fav')) {
      // TODO: Implement favorite logic
      return;
    }

    // Click card -> mở trang chi tiết (trừ click vào nút "Thêm vào giỏ")
    if (e.target.closest('.add-to-cart-btn')) {
      return; // Để cart.js xử lý
    }

    const card = e.target.closest('.product-card');
    if (card) {
      const id = Number(card.getAttribute('data-product-id'));
      if (id) {
        window.location.href = `product.html?id=${id}`;
        return;
      }
    }

  });
}

// Toast helper (dùng chung với cart)
function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast fade-in';
  toast.textContent = message;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(4px)';
  }, 2200);

  setTimeout(() => {
    toast.remove();
  }, 2600);
}
function getProducts() {
  return products;
}

window.Store = {
  getProducts
};

// Render sản phẩm nổi bật vào #productGrid (nếu có)
function renderFeaturedProducts(list = products) {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  const featuredProducts = list.filter(p => p.featured === true);
  
  if (!featuredProducts.length) {
    grid.innerHTML = '<p>Không có sản phẩm nổi bật.</p>';
    return;
  }

  grid.innerHTML = featuredProducts
    .map((product) => {
      const chips = getSpecChips(product);
      const rating = product.rating || 0;
      const displayImage = product.image;

      return `
        <div class="product-card product-card--shop fade-in" data-product-id="${product.id}">
          <div class="product-image product-image--shop">
            <img src="${displayImage}" alt="${product.name}">
            <button class="product-fav" type="button" aria-label="Yêu thích">
              ♡
            </button>
          </div>

          <div class="product-info product-info--shop">
            <h3 class="product-name product-name--shop">${product.name}</h3>

            <div class="product-price product-price--shop">
              <span class="price-current price-current--shop">${formatPrice(product.price)}</span>
            </div>

            <div class="installment-label">Trả góp 0%</div>

            <div class="product-specs" aria-label="Thông số nhanh">
              ${chips.map((c) => `<span class="spec-pill">${c}</span>`).join('')}
            </div>

            <div class="product-actions">
              <div class="product-rating-inline" aria-label="Đánh giá">
                <span class="star">★</span>
                <span class="rating-value">${rating ? rating.toFixed(1) : '5.0'}</span>
              </div>

              <button class="add-to-cart-btn add-to-cart-btn--compact" data-product-id="${product.id}">
                Thêm vào giỏ
              </button>
            </div>
          </div>
        </div>
      `;
    })
    .join('');
  
  setupProductGridInteractions();
}

// Expose dùng chung
window.AppStore = {
  products,
  formatPrice,
  renderProducts,
  renderFeaturedProducts,
  showToast,
  setBaseList,
  getBaseList,
  heroSlides,
  setupProductGridInteractions
};
