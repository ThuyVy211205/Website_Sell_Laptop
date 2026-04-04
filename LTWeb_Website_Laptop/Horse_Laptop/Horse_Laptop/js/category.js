
function getCategoryFromQuery() {
    const params = new URLSearchParams(window.location.search);
    return (params.get('cat') || '').toLowerCase().trim();
}

/**
 * Hiển thị tên danh mục thân thiện
 */
function categoryLabel(cat) {
    const map = {
        hp: 'Laptop HP',
        dell: 'Laptop Dell',
        lenovo: 'Laptop Lenovo',
        macbook: 'MacBook'
    };
    return map[cat] || 'Danh mục sản phẩm';
}

/**
 * Kiểm tra sản phẩm có đang giảm giá không
 */
function hasDiscount(p) {
    const price = p.price || p.basePrice || 0;
    return Boolean(p.oldPrice && p.oldPrice > price);
}

/**
 * Logic sắp xếp danh sách sản phẩm
 */
function sortList(list, sortKey) {
    const copy = list.slice();

    copy.sort((a, b) => {
        const priceA = a.price || a.basePrice || 0;
        const priceB = b.price || b.basePrice || 0;

        if (sortKey === 'price-asc') {
            return priceA - priceB;
        } else if (sortKey === 'price-desc') {
            return priceB - priceA;
        } else if (sortKey === 'promo') {
            const da = hasDiscount(a) ? 1 : 0;
            const db = hasDiscount(b) ? 1 : 0;
            if (db !== da) return db - da; 
            return (b.rating || 0) - (a.rating || 0); 
        } else {
            // popular (mặc định)
            return (b.rating || 0) - (a.rating || 0);
        }
    });

    return copy;
}

document.addEventListener('DOMContentLoaded', () => {
    const cat = getCategoryFromQuery();

    // 1. LẤY DỮ LIỆU: Ưu tiên productDetails (Laptop mới)
    let allRaw = [];
    if (typeof productDetails !== 'undefined') {
        allRaw = Object.values(productDetails);
    } else if (window.AppStore?.products) {
        allRaw = window.AppStore.products;
    } else {
        // Nếu không có cả 2, thử lấy từ localStorage (do main.js đã lưu vào)
        const stored = localStorage.getItem('products');
        allRaw = stored ? JSON.parse(stored) : [];
    }

    // 2. CHUẨN HÓA: Đảm bảo có thuộc tính .price
    allRaw.forEach(p => {
        if (!p.price) p.price = p.basePrice || 0;
    });

    // 3. LỌC: Theo danh mục laptop
    const filtered = cat ? allRaw.filter((p) => p.category === cat) : allRaw.slice();

    // 4. ĐỒNG BỘ VỚI HỆ THỐNG SEARCH (Nếu có)
    if (window.AppStore?.setBaseList) {
        window.AppStore.setBaseList(filtered);
    }

    // 5. HIỂN THỊ BAN ĐẦU
    const sortedData = sortList(filtered, 'popular');
    if (window.AppStore?.renderProducts) {
        window.AppStore.renderProducts(sortedData);
        window.AppStore.setupProductGridInteractions?.();
    }

    // 6. CẬP NHẬT GIAO DIỆN CHỮ (Title, Meta, Breadcrumb)
    const titleEl = document.getElementById('categoryTitle');
    const metaEl = document.getElementById('categoryMeta');
    const breadcrumbCurrent = document.getElementById('breadcrumbCurrent');
    
    if (titleEl) titleEl.textContent = categoryLabel(cat);
    if (metaEl) metaEl.textContent = `${filtered.length} sản phẩm`;
    if (breadcrumbCurrent) breadcrumbCurrent.textContent = categoryLabel(cat);

    // 7. CẬP NHẬT BANNER ƯU ĐÃI
    const promoTitle = document.getElementById('promoTitle');
    const promoSubtitle = document.getElementById('promoSubtitle');
    
    if (promoTitle && promoSubtitle) {
        const labels = ['hp', 'dell', 'lenovo', 'macbook'];
        if (labels.includes(cat)) {
            promoTitle.textContent = `Ưu đãi ${categoryLabel(cat)} Mới`;
            promoSubtitle.textContent = 'Quà tặng hấp dẫn & Bảo hành chính hãng';
        } else {
            promoTitle.textContent = 'Horse Store - Laptop Thế Hệ Mới';
            promoSubtitle.textContent = 'Sản phẩm công nghệ đỉnh cao 2026';
        }
    }

    // 8. SỰ KIỆN TABS SẮP XẾP
    const tabs = document.getElementById('sortTabs');
    tabs?.addEventListener('click', (e) => {
        const btn = e.target.closest('.sort-tab');
        if (!btn) return;

        tabs.querySelectorAll('.sort-tab').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        const sortKey = btn.getAttribute('data-sort') || 'popular';
        const currentSorted = sortList(filtered, sortKey);
        
        if (window.AppStore?.renderProducts) {
            window.AppStore.renderProducts(currentSorted);
            window.AppStore.setupProductGridInteractions?.();
        }
    });
    document.addEventListener('DOMContentLoaded', () => {
    if (window.updateHeaderUI) window.updateHeaderUI();
});
});