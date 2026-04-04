// Dán vào ĐẦU FILE admin.js
(function checkAdminAccess() {
    const raw = localStorage.getItem('ecom_current_user'); 
    const user = raw ? JSON.parse(raw) : null;

    // Nếu không có user HOẶC user không phải admin thì chặn lại
    if (!user || user.role !== 'admin') {
        alert("Cảnh báo: Bạn không có quyền truy cập vùng quản trị!");
        window.location.href = "index.html";
    }
})();
// Sau đó mới đến các code render bảng, thống kê...
let orders = JSON.parse(localStorage.getItem('apple_store_orders')) || [];

// Toggle sidebar trên mobile
function toggleAdminMenu() {
    const sidebar = document.querySelector('.admin-sidebar');
    const body = document.querySelector('.admin-body');
    if (sidebar && body) {
        sidebar.classList.toggle('open');
        body.classList.toggle('sidebar-open');
    }
}

// Đóng sidebar khi click vào menu item
document.addEventListener('click', (e) => {
    const sidebar = document.querySelector('.admin-sidebar');
    const body = document.querySelector('.admin-body');
    const toggleBtn = document.getElementById('adminToggleBtn');
    if (sidebar && toggleBtn && window.innerWidth <= 768) {
        if (!sidebar.contains(e.target) && !toggleBtn.contains(e.target)) {
            sidebar.classList.remove('open');
            body.classList.remove('sidebar-open');
        }
    }
});

function switchAdminTab(tabId, element) {
    document.querySelectorAll('.admin-section').forEach(sec => sec.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    document.querySelectorAll('.admin-menu li').forEach(li => li.classList.remove('active'));
    element.classList.add('active');
    
    const titles = {'dashboard-view': 'Bảng Điều Khiển', 'products-manage': 'Quản Lý Sản Phẩm', 'orders-manage': 'Quản Lý Đơn Hàng'};
    const titleEl = document.getElementById('current-tab-title');
    if (titleEl) {
        titleEl.innerText = titles[tabId];
    }
    
    // Đóng sidebar trên mobile sau khi click menu
    if (window.innerWidth <= 768) {
        const sidebar = document.querySelector('.admin-sidebar');
        const body = document.querySelector('.admin-body');
        if (sidebar && body) {
            sidebar.classList.remove('open');
            body.classList.remove('sidebar-open');
        }
    }
}

function renderDashboard() {
    document.getElementById('dash-revenue').textContent = orders.reduce((sum, ord) => sum + ord.total, 0).toLocaleString('vi-VN') + '₫';
    document.getElementById('dash-orders').textContent = orders.length;
    document.getElementById('dash-products').textContent = products.length;
}

function renderAdminProducts() {
    const tbody = document.getElementById('admin-product-list');
    tbody.innerHTML = products.map(p => {
        // Tự động gán class màu cho từng hãng
        let catClass = 'hp-badge';
        if(p.category === 'dell') catClass = 'dell-badge';
        if(p.category === 'macbook') catClass = 'apple-badge';
        if(p.category === 'lenovo') catClass = 'status-shipping'; // mầu xanh lá/vàng của bạn cũ

        return `
            <tr>
                <td><img src="${p.image}" class="table-img" onerror="this.src='https://via.placeholder.com/60x45'"></td>
                <td style="font-weight: 600; color: #181c32;">${p.name}</td>
                <td><span class="status-badge ${catClass}">${p.category.toUpperCase()}</span></td>
                <td style="color: #f1416c; font-weight: 600;">${p.price.toLocaleString('vi-VN')}₫</td>
                <td>
                    <button class="btn-edit" onclick="editProduct(${p.id})">Sửa</button>
                    <button class="btn-delete" onclick="deleteProduct(${p.id})">Xóa</button>
                </td>
            </tr>
        `;
    }).join('');
}

function renderAdminOrders() {
    const tbody = document.getElementById('admin-order-list');
    if (!tbody) return;
    
    if (!orders.length) {
        tbody.innerHTML = `
            <tr>
                <td colspan="5" style="text-align: center; padding: 20px; color: #999;">
                    Chưa có đơn hàng nào. Khách hàng vừa mới bắt đầu mua sắm.
                </td>
            </tr>
        `;
        return;
    }
    
    tbody.innerHTML = orders.map(order => {
        const createdAt = new Date(order.createdAt).toLocaleString('vi-VN');
        const statusBadge = order.status ? 
            `<span class="status-badge" style="background: #e4f5eb; color: #21a038;">${order.status}</span>` :
            `<span class="status-badge" style="background: #fef5e7; color: #f39c12;">Chờ xử lý</span>`;
        
        return `
            <tr>
                <td style="font-weight: 600; color: #181c32;">${order.id}</td>
                <td>${createdAt}</td>
                <td style="color: #f1416c; font-weight: 600;">${order.total.toLocaleString('vi-VN')}₫</td>
                <td>${statusBadge}</td>
                <td>
                    <button class="btn-edit" onclick="viewOrderDetail('${order.id}')">Xem</button>
                </td>
            </tr>
        `;
    }).join('');
}

function viewOrderDetail(orderId) {
    const order = orders.find(o => o.id === orderId);
    if (!order) {
        alert('Không tìm thấy đơn hàng');
        return;
    }
    
    const itemsHtml = order.items.map(item => `
        <div style="padding: 10px 0; border-bottom: 1px solid #eee;">
            <img src="${item.image}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 4px; margin-right: 10px; vertical-align: middle;">
            <strong>${item.name}</strong> x${item.quantity} = <strong>${item.lineTotal.toLocaleString('vi-VN')}₫</strong>
        </div>
    `).join('');
    
    const detailText = `
========== ĐƠN HÀNG CHI TIẾT ==========
Mã Đơn: ${order.id}
Thời Gian: ${new Date(order.createdAt).toLocaleString('vi-VN')}

========== THÔNG TIN KHÁCH HÀNG ==========
Họ và tên: ${order.customer.fullName}
Số điện thoại: ${order.customer.phone}
Email: ${order.customer.email}
Địa chỉ: ${order.customer.address}, ${order.customer.city}
Ghi chú: ${order.customer.note || '(không có)'}

========== SẢN PHẨM ==========
${order.items.map(item => `${item.name} (${item.quantity}) - ${item.lineTotal.toLocaleString('vi-VN')}₫`).join('\n')}

========== TỔNG CỘNG ==========
Tổng tiền: ${order.total.toLocaleString('vi-VN')}₫
    `;
    
    alert(detailText);
}

function saveProduct(e) {
    e.preventDefault();
    const id = document.getElementById('prod-id').value;
    const name = document.getElementById('prod-name').value;
    const price = parseInt(document.getElementById('prod-price').value);
    const category = document.getElementById('prod-cat').value;
    const image = document.getElementById('prod-image').value;

    if (id) {
        const index = products.findIndex(p => p.id == id);
        products[index] = { ...products[index], name, price, category, image };
        alert('Cập nhật cấu hình máy thành công!');
    } else {
        const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
        products.push({ id: newId, name, price, category, image });
        alert('Đã thêm máy mới vào kho!');
    }
    localStorage.setItem('products', JSON.stringify(products));
    renderAdminProducts(); renderDashboard(); resetForm();
}

function editProduct(id) {
    const p = products.find(p => p.id === id);
    document.getElementById('prod-id').value = p.id;
    document.getElementById('prod-name').value = p.name;
    document.getElementById('prod-price').value = p.price;
    document.getElementById('prod-cat').value = p.category; // hp, dell, lenovo, macbook
    document.getElementById('prod-image').value = p.image;
    document.getElementById('form-title').innerText = "Chỉnh sửa: " + p.name;
    document.getElementById('save-btn').innerText = "Cập Nhật Ngay";
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function deleteProduct(id) {
    if (!confirm('Bạn chắc chắn muốn xóa sản phẩm này?')) return;
    products = products.filter(p => p.id !== id);
    localStorage.setItem('products', JSON.stringify(products));
    renderAdminProducts();
    renderDashboard();
}

function resetForm() {
    document.getElementById('prod-id').value = '';
    document.getElementById('prod-name').value = '';
    document.getElementById('prod-price').value = '';
    document.getElementById('prod-cat').value = 'hp';
    document.getElementById('prod-image').value = '';
    document.getElementById('form-title').innerText = 'Thêm Sản Phẩm Laptop Mới';
    document.getElementById('save-btn').innerText = 'Lưu Vào Hệ Thống';
}

// Khởi chạy các hàm ban đầu
renderDashboard(); 
renderAdminProducts(); 
renderAdminOrders();

// Reload dữ liệu khi tab được focus (để sync với tab khác)
window.addEventListener('focus', () => {
    orders = JSON.parse(localStorage.getItem('apple_store_orders')) || [];
    renderDashboard();
    renderAdminProducts();
    renderAdminOrders();
});