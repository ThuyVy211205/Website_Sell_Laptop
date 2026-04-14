const CART_KEY = 'apple_store_cart';
const ORDERS_KEY = 'apple_store_orders';

function safeParse(raw, fallback = []) {
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : fallback;
  } catch {
    return fallback;
  }
}

function loadCart() {
  return safeParse(localStorage.getItem(CART_KEY), []);
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function loadOrders() {
  return safeParse(localStorage.getItem(ORDERS_KEY), []);
}

function saveOrders(orders) {
  localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
}

function makeOrderId() {
  const now = Date.now().toString(36).toUpperCase();
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `ORD-${now}-${rand}`;
}

function normalizePhone(phone) {
  return phone.replace(/\s+/g, '');
}

function validateForm(data) {
  const errors = {};

  if (!data.fullName.trim()) {
    errors.fullName = 'Vui lòng nhập họ và tên.';
  }

  const normalizedPhone = normalizePhone(data.phone);
  if (!/^(03|05|07|08|09)\d{8}$/.test(normalizedPhone)) {
    errors.phone = 'Số điện thoại không hợp lệ.';
  }

  if (!data.address.trim()) {
    errors.address = 'Vui lòng nhập địa chỉ giao hàng.';
  }

  if (!data.city.trim()) {
    errors.city = 'Vui lòng nhập tỉnh / thành phố.';
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = 'Email không hợp lệ.';
  }

  return errors;
}

function showErrors(errors) {
  const fields = ['fullName', 'phone', 'email', 'address', 'city'];
  fields.forEach((field) => {
    const input = document.getElementById(field);
    const errorEl = document.getElementById(`${field}Error`);
    if (!input || !errorEl) return;

    if (errors[field]) {
      input.classList.add('invalid');
      errorEl.textContent = errors[field];
    } else {
      input.classList.remove('invalid');
      errorEl.textContent = '';
    }
  });
}

function getCartLineItems(cart) {
  return cart
    .map((item) => {
      const product = window.AppStore.products.find((p) => p.id === item.productId);
      if (!product) return null;

      const quantity = Math.max(1, Number(item.quantity) || 1);
      return {
        productId: item.productId,
        name: product.name,
        image: product.image,
        price: product.price,
        quantity,
        lineTotal: product.price * quantity
      };
    })
    .filter(Boolean);
}

function renderOrderSummary(lineItems) {
  const itemsEl = document.getElementById('orderItems');
  const totalEl = document.getElementById('orderTotal');
  const placeOrderBtn = document.getElementById('placeOrderBtn');

  if (!itemsEl || !totalEl || !placeOrderBtn) return;

  if (!lineItems.length) {
    itemsEl.innerHTML = `
      <div class="empty-cart">
        Giỏ hàng của bạn đang trống.<br>
        <a href="index.html">Quay lại mua sắm</a>
      </div>
    `;
    totalEl.textContent = window.AppStore.formatPrice(0);
    placeOrderBtn.disabled = true;
    return;
  }

  itemsEl.innerHTML = lineItems
    .map((item) => `
      <article class="order-item">
        <img src="${item.image}" alt="${item.name}">
        <div>
          <p class="order-item-name">${item.name}</p>
          <p class="order-item-meta">SL: ${item.quantity} x ${window.AppStore.formatPrice(item.price)}</p>
        </div>
        <p class="order-item-price">${window.AppStore.formatPrice(item.lineTotal)}</p>
      </article>
    `)
    .join('');

  const total = lineItems.reduce((sum, item) => sum + item.lineTotal, 0);
  totalEl.textContent = window.AppStore.formatPrice(total);
}

function collectFormData() {
  return {
    fullName: document.getElementById('fullName')?.value || '',
    phone: document.getElementById('phone')?.value || '',
    email: document.getElementById('email')?.value || '',
    address: document.getElementById('address')?.value || '',
    city: document.getElementById('city')?.value || '',
    note: document.getElementById('note')?.value || ''
  };
}

function createOrderPayload(customer, lineItems) {
  const total = lineItems.reduce((sum, item) => sum + item.lineTotal, 0);

  return {
    id: makeOrderId(),
    createdAt: new Date().toISOString(),
    customer: {
      fullName: customer.fullName.trim(),
      phone: normalizePhone(customer.phone),
      email: customer.email.trim(),
      address: customer.address.trim(),
      city: customer.city.trim(),
      note: customer.note.trim()
    },
    items: lineItems,
    total
  };
}

function handlePlaceOrder(e, lineItems) {
  e.preventDefault();

  const formData = collectFormData();
  const errors = validateForm(formData);
  showErrors(errors);

  if (Object.keys(errors).length) return;
  if (!lineItems.length) return;

  const order = createOrderPayload(formData, lineItems);
  const orders = loadOrders();
  orders.unshift(order);
  saveOrders(orders);

  localStorage.setItem('apple_store_last_order', JSON.stringify(order));

  saveCart([]);

  alert('Đặt hàng thành công');
  window.location.href = 'order-success.html';
}

document.addEventListener('DOMContentLoaded', () => {
  const cart = loadCart();
  const lineItems = getCartLineItems(cart);

  renderOrderSummary(lineItems);

  const form = document.getElementById('checkoutForm');
  form?.addEventListener('submit', (e) => handlePlaceOrder(e, lineItems));
});
