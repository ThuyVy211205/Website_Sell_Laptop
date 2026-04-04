const ORDERS_KEY = 'apple_store_orders';

function safeParse(raw, fallback = []) {
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : fallback;
  } catch {
    return fallback;
  }
}

function loadOrders() {
  return safeParse(localStorage.getItem(ORDERS_KEY), []);
}

function formatDateTime(isoValue) {
  const d = new Date(isoValue);
  if (Number.isNaN(d.getTime())) return '--';
  return d.toLocaleString('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

function renderOrders() {
  const container = document.getElementById('ordersList');
  if (!container) return;

  const orders = loadOrders();
  if (!orders.length) {
    container.innerHTML = `
      <article class="order-empty">
        <h2>Bạn chưa có đơn hàng nào</h2>
        <p>Hãy chọn sản phẩm và đặt hàng để theo dõi lịch sử mua sắm của bạn.</p>
        <a href="index.html" class="btn btn-primary">Mua sắm ngay</a>
      </article>
    `;
    return;
  }

  container.innerHTML = orders
    .map((order) => `
      <article class="order-card">
        <div class="order-card-head">
          <div>
            <h2>Mã đơn: ${order.id || '--'}</h2>
            <p>Thời gian: ${formatDateTime(order.createdAt)}</p>
          </div>
          <div class="order-total">${window.AppStore.formatPrice(order.total || 0)}</div>
        </div>

        <div class="order-customer">
          <span>${order.customer?.fullName || '--'}</span>
          <span>${order.customer?.phone || '--'}</span>
          <span>${order.customer?.city || '--'}</span>
        </div>

        <div class="order-items">
          ${(order.items || [])
            .map((item) => `
              <div class="order-row">
                <img src="${item.image}" alt="${item.name}">
                <div class="order-row-content">
                  <h3>${item.name}</h3>
                  <p>SL: ${item.quantity} x ${window.AppStore.formatPrice(item.price)}</p>
                </div>
                <div class="order-row-total">${window.AppStore.formatPrice(item.lineTotal || 0)}</div>
              </div>
            `)
            .join('')}
        </div>
      </article>
    `)
    .join('');
}
document.addEventListener('DOMContentLoaded', renderOrders);
