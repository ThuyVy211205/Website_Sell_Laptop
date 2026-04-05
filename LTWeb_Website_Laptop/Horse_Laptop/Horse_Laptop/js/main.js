document.addEventListener('DOMContentLoaded', () => {
    // 1. DATA 12 SẢN PHẨM LAPTOP CHUẨN
    const defaultProducts = [
        { id: 1, name: 'HP 14', price: 16490000, category: 'hp', image: '../images/hp-14-1.webp' },
        { id: 2, name: 'HP 15', price: 24500000, category: 'hp', image: '../images/hp-15-1.webp' },
        { id: 3, name: 'HP Pro Book', price: 18990000, category: 'hp', image: '../images/hp-probook-1.webp' },
        { id: 4, name: 'Dell Inspiron 15 5430', price: 17290000, category: 'dell', image: '../images/dell-15-1.webp' },
        { id: 5, name: 'Dell Inspiron 16 3520', price: 12490000, category: 'dell', image: '../images/dell-16-1.webp' },
        { id: 6, name: 'Dell 16 Plus 3250', price: 45990000, category: 'dell', image: '../images/dell-16-plus-1.webp' },
        { id: 7, name: 'Lenovo ThinkPad', price: 13990000, category: 'lenovo', image: '../images/lenovo-think-pad-1.webp' },
        { id: 8, name: 'Lenovo ThinkBook', price: 26490000, category: 'lenovo', image: '../images/lenovo-thinkbook-1.webp' },
        { id: 9, name: 'Lenovo V14', price: 32990000, category: 'lenovo', image: '../images/lenovo-v14-1.webp' },
        { id: 10, name: 'MacBook Air M5 15 inch (2026)', price: 39990000, category: 'macbook', image: '../images/macbook_air_m5.webp' },
        { id: 11, name: 'MacBook Air M4 13 inch (2025)', price: 31990000, category: 'macbook', image: '../images/macbook_air_m4.webp' },
        { id: 12, name: 'MacBook Air M2 13 inch (2024)', price: 27990000, category: 'macbook', image: '../images/macbook_air_m2.webp' }
    ];
    
    // 2. LỆNH ÉP CẬP NHẬT DỮ LIỆU MỚI
    const checkOldData = localStorage.getItem('products');
if (checkOldData && !checkOldData.includes('HP Pavilion')) {
    localStorage.removeItem('products'); // chỉ xóa sản phẩm
}
    localStorage.setItem('products', JSON.stringify(defaultProducts));

    const products = defaultProducts; 
    let cart = JSON.parse(localStorage.getItem('apple_store_cart')) || [];

    // --- TOAST NOTIFICATION ---
    window.showToast = (message) => {
        let container = document.getElementById('toast-container');
        if(!container) return alert(message);
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `✅ <div><strong>Thành công</strong><br><span style="color:#666;">${message}</span></div>`;
        container.appendChild(toast);
        setTimeout(() => toast.remove(), 2500);
    };

    // --- SPA NAVIGATION ---
    const pageElements = { 
        home: document.getElementById('home'), 
        products: document.getElementById('products'), 
        favorites: document.getElementById('favorites'), 
        cart: document.getElementById('cart'), 
        account: document.getElementById('account'),
        orders: document.getElementById('orders')
    };

    function showPage(pageId) {
        if (pageId === 'orders') renderOrders();
        
        // Ẩn tất cả trang
        Object.values(pageElements).forEach(page => page && page.classList.remove('active'));
        
        // Hiện trang được chọn
        if(pageElements[pageId]) pageElements[pageId].classList.add('active');
        
        // Cập nhật nút điều hướng
        document.querySelectorAll('nav .nav-btn').forEach(btn => btn.classList.remove('active'));
        const activeBtn = document.querySelector(`nav .nav-btn[data-page="${pageId}"]`);
        if(activeBtn) activeBtn.classList.add('active');

        // Render nội dung tương ứng
        if (pageId === 'home' && window.AppStore && window.AppStore.renderFeaturedProducts) {
            window.AppStore.renderFeaturedProducts();
        }
        if (pageId === 'products') filterCategory('all');
        
        window.scrollTo(0, 0);
    }

    // --- TÌM KIẾM & LỌC ---
    let currentCategory = 'all';
    window.filterCategory = (cat) => {
        currentCategory = cat;
        executeSearch();
    };

    function executeSearch() {
        const keyword = document.getElementById('searchInput')?.value.toLowerCase() || '';
        const container = document.getElementById('all-products');
        let filtered = products;
        
        if (currentCategory !== 'all') filtered = filtered.filter(p => p.category === currentCategory);
        if (keyword.trim() !== '') filtered = filtered.filter(p => p.name.toLowerCase().includes(keyword));
        
        renderHTML(container, filtered);
    }

    function renderHTML(container, productsList) {
        if(!container) return;
        container.innerHTML = productsList.map(p => `
            <div class="product-card">
                <a href="product-detail.html?id=${p.id}">
                    <img src="${p.image}" alt="${p.name}" onerror="this.src='https://via.placeholder.com/200x200?text=Laptop'">
                    <h3>${p.name}</h3>
                    <div class="price-container">
                        <span class="sale-price">${p.price.toLocaleString('vi-VN')}₫</span>
                    </div>
                </a>
                <div class="product-actions">
                    <button class="buy-now-btn" onclick="window.buyNow(${p.id})">Mua ngay</button>
                    <button class="add-to-cart-btn" onclick="window.addToCart(${p.id})">Thêm vào giỏ</button>
                </div>
            </div>
        `).join('');
    }
        function isLoggedIn() {
    return !!localStorage.getItem('ecom_current_user');
    }
    // --- GIỎ HÀNG ---
    window.addToCart = (id) => {
        if (!isLoggedIn()) {
        showToast("⚠️ Vui lòng đăng nhập để thêm vào giỏ hàng!");
        setTimeout(() => {
            window.location.href = "login.html";
        }, 1000);
        return;
    }
        const product = products.find(p => p.id === id);
        if (!product) return;
        
        // Sử dụng cấu trúc { productId, quantity } để tương thích với cart.js
        const existing = cart.find(item => item.productId === id);
        if (existing) {
            existing.quantity++;
        } else {
            cart.push({ productId: id, quantity: 1 });
        }
        
        // Lưu vào cùng localStorage key với cart.js
        localStorage.setItem('apple_store_cart', JSON.stringify(cart));
        updateCartBadge(); 
        showToast(`Đã thêm ${product.name} vào giỏ`);
    };

    window.buyNow = (id) => { if (!isLoggedIn()) {
        showToast("⚠️ Vui lòng đăng nhập để thêm vào giỏ hàng!");
        setTimeout(() => {
            window.location.href = "login.html";
        }, 1000);
        return;
    }
};

    function updateCartBadge() {
        const cartBadge = document.getElementById('cart-count');
        // Reload cart từ localStorage để sync với cart.js
        cart = JSON.parse(localStorage.getItem('apple_store_cart')) || [];
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        if(cartBadge) { 
            cartBadge.textContent = totalItems; 
            cartBadge.style.display = totalItems > 0 ? 'inline-block' : 'none'; 
        }
    }

    // --- HEADER USER UI (LOGIN/LOGOUT/ADMIN) ---
 window.updateHeaderUI = function () { // 26/3
    const authArea = document.getElementById('auth-buttons');
    const currentUser = window.Auth?.getCurrentUser
    ? window.Auth.getCurrentUser()
    : JSON.parse(localStorage.getItem('ecom_current_user'));
    if (!authArea) return;

    if (currentUser) {
        authArea.innerHTML = `
        <div class="user-menu">
            <div class="avatar" id="avatarClick">
               ${(currentUser.fullName || currentUser.username || 'U')
                .trim()
                .charAt(0)
                .toUpperCase()}
            </div>

            <div class="user-dropdown" id="userDropdownContent">
                <p>Chào, <b>${currentUser.fullName}</b></p>
               ${currentUser.role === 'admin' ? `<a href="admin.html">Trang quản trị</a>` : ''}
                        <a href="#" id="logoutBtn">Đăng xuất</a>
            </div>
        </div>
        `;
        const avatar = document.getElementById('avatarClick');
        const dropdown = document.getElementById('userDropdownContent');
        const logoutBtn = document.getElementById('logoutBtn');
        const navOrders = document.getElementById('navToOrders');

        // Mở dropdown
        avatar.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.classList.toggle('active');
        });

        // Click ngoài đóng
        document.addEventListener('click', () => {
            dropdown.classList.remove('active');
        });

        // Đăng xuất
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('ecom_current_user');
            window.location.reload();
        });

        // Mở trang đơn hàng
        if (navOrders) {
    navOrders.addEventListener('click', (e) => {
        e.preventDefault();
        showPage('orders');
    });
}

    } else {
        authArea.innerHTML = `
            <a href="login.html" class="icon-btn user-btn">
                <svg width="24" height="24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="7" r="4"></circle>
                    <path d="M5.5 21a6.5 6.5 0 0 1 13 0"></path>
                </svg>
            </a>
        `;
    }
}

    function renderOrders() {
    const container = document.getElementById('orders-list');
    const orders = JSON.parse(localStorage.getItem('apple_store_orders')) || [];

    if (orders.length === 0) {
        container.innerHTML = '<p>Bạn chưa có đơn hàng nào.</p>';
        return;
    }

    container.innerHTML = orders.map(order => `
        <div class="order-item">
            <p>Mã đơn: ${order.id}</p>
            <p>Tổng tiền: ${order.total.toLocaleString()}₫</p>
        </div>
    `).join('');
}

    window.logoutUser = () => {
        localStorage.removeItem('ecom_current_user');
        window.location.reload();
    };

    // --- KHỞI TẠO ---
    document.querySelectorAll('.nav-btn[data-page]').forEach(btn => {
        btn.addEventListener('click', () => showPage(btn.dataset.page));
    });
    updateHeaderUI();
    updateCartBadge();
    showPage('home');  // Hiển thị trang home khi load
    
    if (window.Auth?.setupHeaderAuth) {
        Auth.setupHeaderAuth();
    }
});