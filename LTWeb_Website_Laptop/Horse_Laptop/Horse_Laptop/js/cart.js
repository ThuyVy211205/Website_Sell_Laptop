// LocalStorage helpers
const CART_KEY = 'apple_store_cart';

function loadCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

let cart = loadCart();

// Tính tổng số lượng
function getCartCount() {
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}

// Tính tổng tiền
function getCartTotal() {
  return cart.reduce((sum, item) => {
    let product;
    
    // Ưu tiên lấy từ AppStore
    if (window.AppStore?.products) {
      product = window.AppStore.products.find((p) => p.id === item.productId);
    }
    
    // Nếu không có, lấy từ productDetails (sản phẩm chi tiết)
    if (!product && window.productDetails) {
      product = window.productDetails[item.productId];
    }
    
    return sum + (product ? (product.price || product.basePrice || 0) * item.quantity : 0);
  }, 0);
}

// Cập nhật badge
function updateCartBadge() {
  const count = getCartCount();
  
  // Update header badge (#cartBadge)
  const headerBadge = document.getElementById('cartBadge');
  if (headerBadge) {
    headerBadge.textContent = count;
    headerBadge.style.display = count > 0 ? 'inline-block' : 'none';
  }
  
  // Update nav badge (#cart-count)
  const navBadge = document.getElementById('cart-count');
  if (navBadge) {
    navBadge.textContent = count;
    navBadge.style.display = count > 0 ? 'inline-block' : 'none';
  }
}

// Render giỏ hàng
function renderCart() {
  const container = document.getElementById('cartItems');
  const emptyEl = document.getElementById('cartEmpty');
  if (!container || !emptyEl) return;

  if (!cart.length) {
    container.innerHTML = '';
    emptyEl.style.display = 'block';
  } else {
    emptyEl.style.display = 'none';
    container.innerHTML = cart
      .map((item) => {
        let product;
        
        // Ưu tiên lấy từ AppStore
        if (window.AppStore?.products) {
          product = window.AppStore.products.find((p) => p.id === item.productId);
        }
        
        // Nếu không có, lấy từ productDetails
        if (!product && window.productDetails) {
          product = window.productDetails[item.productId];
        }
        
        if (!product) return '';
        
        const price = product.price || product.basePrice || 0;
        const image = product.image || (product.images && product.images[0]) || 'https://via.placeholder.com/80';
        
        return `
          <div class="cart-item" data-product-id="${item.productId}">
            <img src="${image}" alt="${product.name}">
            <div>
              <div class="cart-item-title">${product.name}</div>
              <div class="cart-item-price">${window.AppStore?.formatPrice(price) || `${price.toLocaleString('vi-VN')}đ`}</div>
              <div class="cart-item-qty">
                <button data-action="decrease">-</button>
                <span>${item.quantity}</span>
                <button data-action="increase">+</button>
              </div>
              <button class="cart-item-remove" data-action="remove">Xóa</button>
            </div>
            <div>
              ${window.AppStore?.formatPrice(price * item.quantity) || `${(price * item.quantity).toLocaleString('vi-VN')}đ`}
            </div>
          </div>
        `;
      })
      .join('');
  }

  const totalEl = document.getElementById('cartTotal');
  if (totalEl) {
    totalEl.textContent = window.AppStore?.formatPrice(getCartTotal()) || `${getCartTotal().toLocaleString('vi-VN')}đ`;
  }
}

// Thêm vào giỏ
function addToCart(productId) {
  console.log('[addToCart] Called with productId:', productId, 'Stack:', new Error().stack);
  const existing = cart.find((item) => item.productId === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ productId, quantity: 1 });
  }
  saveCart(cart);
  updateCartBadge();
  renderCart();
  
  // Show toast notification
  try {
    if (window.AppStore?.showToast) {
      window.AppStore.showToast('Đã thêm vào giỏ hàng');
    } else if (window.showToast) {
      window.showToast('Đã thêm vào giỏ hàng');
    } else {
      console.log('Added to cart');
    }
  } catch (e) {
    console.log('Added to cart (no toast)');
  }
}

// Xóa khỏi giỏ
function removeFromCart(productId) {
  cart = cart.filter((item) => item.productId !== productId);
  saveCart(cart);
  updateCartBadge();
  renderCart();
}

// Cập nhật số lượng
function updateCartQuantity(productId, quantity) {
  const item = cart.find((i) => i.productId === productId);
  if (!item) return;
  item.quantity = Math.max(1, quantity);
  saveCart(cart);
  updateCartBadge();
  renderCart();
}

// Hiện / ẩn modal
function showCart() {
  const modal = document.getElementById('cartModal');
  if (!modal) return;
  modal.classList.remove('hidden');
}

function closeCart() {
  const modal = document.getElementById('cartModal');
  if (!modal) return;
  modal.classList.add('hidden');
}

// Thanh toán
function checkout() {
  if (!cart.length) {
    window.AppStore.showToast('Giỏ hàng đang trống');
    return;
  }
  closeCart();
  window.location.href = 'checkout.html';
}

// Gắn event listeners
document.addEventListener('DOMContentLoaded', () => {
  // Badge ban đầu
  updateCartBadge();
  renderCart();

  // Nút mở/đóng modal
  const cartBtn = document.getElementById('cartBtn');
  const cartCloseBtn = document.getElementById('cartCloseBtn');
  const cartBackdrop = document.getElementById('cartBackdrop');
  const checkoutBtn = document.getElementById('checkoutBtn');

  cartBtn?.addEventListener('click', showCart);
  cartCloseBtn?.addEventListener('click', closeCart);
  cartBackdrop?.addEventListener('click', closeCart);
  checkoutBtn?.addEventListener('click', checkout);

  // Click trên danh sách sản phẩm "Thêm vào giỏ"
  const productGrid = document.getElementById('productGrid');
  productGrid?.addEventListener('click', (e) => {
    const target = e.target;
    if (target.matches('.add-to-cart-btn')) {
      const id = Number(target.getAttribute('data-product-id'));
      if (id) {
        addToCart(id);
      }
    }
  });

  // Event trong cart modal (tăng/giảm/xóa)
  const cartItems = document.getElementById('cartItems');
  cartItems?.addEventListener('click', (e) => {
    const target = e.target;
    const itemEl = target.closest('.cart-item');
    if (!itemEl) return;
    const id = Number(itemEl.getAttribute('data-product-id'));
    if (!id) return;

    const action = target.getAttribute('data-action');
    if (action === 'increase') {
      const current = cart.find((i) => i.productId === id);
      updateCartQuantity(id, (current?.quantity || 1) + 1);
    } else if (action === 'decrease') {
      const current = cart.find((i) => i.productId === id);
      if (!current) return;
      if (current.quantity === 1) {
        removeFromCart(id);
      } else {
        updateCartQuantity(id, current.quantity - 1);
      }
    } else if (action === 'remove') {
      removeFromCart(id);
    }
  });
});

// Expose cho debug nếu cần
window.Cart = {
  addToCart,
  removeFromCart,
  updateCartQuantity,
  showCart,
  closeCart,
  checkout
};

// Expose để dễ gọi từ ngoài
window.addToCart = addToCart;

// Auto-update cart khi localStorage thay đổi (từ tab khác hoặc lần reload)
window.addEventListener('storage', (e) => {
  if (e.key === CART_KEY) {
    cart = loadCart();
    updateCartBadge();
    renderCart();
  }
});

// Auto-update khi tab được focus (sync cart)
window.addEventListener('focus', () => {
  const freshCart = loadCart();
  if (JSON.stringify(freshCart) !== JSON.stringify(cart)) {
    cart = freshCart;
    updateCartBadge();
    renderCart();
  }
});
