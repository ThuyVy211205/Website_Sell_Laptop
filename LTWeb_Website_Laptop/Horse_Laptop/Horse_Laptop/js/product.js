// ========== PRODUCT DATA: LAPTOP (HP, DELL, LENOVO, MACBOOK) ==========

window.productDetails = {
    // ==================== LAPTOP HP ====================
    1: {
        id: 1,
        name: 'Laptop HP 14',
        category: 'hp',
        rating: 4.8,
        reviewCount: 156,
        image: '../images/hp-14-1.webp',
        images: ['../images/hp-14-1.webp'],
        isNew: true,
        basePrice: 16490000,
        oldPrice: 18500000,
        variants: [
            { label: 'Core i5 | 8GB | 512GB', price: 16490000 },
            { label: 'Core i7 | 16GB | 512GB', price: 21990000 }
        ],
        colors: [{ name: 'Bạc', price: 16490000, image: '../images/hp-14-2.webp' }],
        quickSpecs: [
            { label: 'CPU', value: 'Intel Core i5-1335U' },
            { label: 'RAM', value: '8GB DDR4' },
            { label: 'Ổ cứng', value: '512GB SSD' },
            { label: 'Màn hình', value: '14" FHD IPS' }
        ],
        specs: [
            { key: 'Vi xử lý', val: 'Intel Core i5-1335U, 1.3GHz up to 4.6GHz, 10 nhân' },
            { key: 'RAM', val: '8GB / 16GB DDR4 3200MHz' },
            { key: 'Ổ cứng', val: '512GB SSD PCIe NVMe' },
            { key: 'Màn hình', val: '14" FHD (1920x1080) IPS, 45% NTSC' },
            { key: 'Đồ họa', val: 'Intel Iris Xe Graphics' },
            { key: 'Camera', val: 'HD 720p' },
            { key: 'Pin', val: '3-cell, 41 Wh' },
            { key: 'Cổng kết nối', val: '2x USB 3.1, 1x USB Type-C, HDMI, Jack 3.5mm' },
            { key: 'Trọng lượng', val: '1.41 kg' },
            { key: 'HĐH', val: 'Windows 11' }
        ]
    },
    2: {
        id: 2,
        name: 'Laptop HP 15',
        category: 'hp',
        rating: 4.9,
        reviewCount: 89,
        image: '../images/hp-15-1.webp',
        images: ['../images/hp-15-1.webp'],
        isNew: true,
        basePrice: 24500000,
        oldPrice: null,
        variants: [
            { label: '512GB', price: 24500000 },
            { label: '1TB', price: 27500000 }
        ],
        colors: [{ name: 'Bạc', price: 24500000, image: '../images/hp-15-2.webp' }],
        quickSpecs: [
            { label: 'Màn hình', value: '15.6" Cảm ứng xoay 360' },
            { label: 'CPU', value: 'Intel Core i7-1355U' },
            { label: 'RAM', value: '16GB LPDDR5X' },
            { label: 'Storage', value: '512GB / 1TB SSD' }
        ],
        specs: [
            { key: 'Vi xử lý', val: 'Intel Core i7-1355U, 1.2GHz up to 5.0GHz' },
            { key: 'RAM', val: '16GB LPDDR5X' },
            { key: 'Ổ cứng', val: '512GB / 1TB SSD PCIe NVMe' },
            { key: 'Màn hình', val: '15.6" FHD (1920x1080) Cảm ứng xoay 360 độ, 45% NTSC' },
            { key: 'Đồ họa', val: 'Intel Iris Xe Graphics' },
            { key: 'Camera', val: 'HD 720p' },
            { key: 'Pin', val: '3-cell, 52 Wh' },
            { key: 'Cổng kết nối', val: '2x USB 3.1, 1x USB Type-C, HDMI, Jack 3.5mm' },
            { key: 'Trọng lượng', val: '1.78 kg' },
            { key: 'HĐH', val: 'Windows 11' }
        ]
    },
    3: {
        id: 3,
        name: 'Laptop HP Pro Book',
        category: 'hp',
        rating: 4.7,
        reviewCount: 312,
        image: '../images/hp-probook-1.webp',
        images: ['../images/hp-probook-1.webp'],
        isNew: false,
        basePrice: 18990000,
        oldPrice: 20500000,
        variants: [
            { label: 'Core i5 RTX 3050', price: 18990000 },
            { label: 'Core i7 RTX 4050', price: 22500000 }
        ],
        colors: [{ name: 'Bạc', price: 18990000, image: 'hp-probook-2.webp' }],
        quickSpecs: [
            { label: 'CPU', value: 'Intel Core i5-12450H' },
            { label: 'GPU', value: 'NVIDIA RTX 3050 4GB' },
            { label: 'Màn hình', value: '15.6" 144Hz' },
            { label: 'RAM', value: '8GB DDR5' }
        ],
        specs: [
            { key: 'Vi xử lý', val: 'Intel Core i5-12450H, 1.7GHz up to 4.4GHz, 8 nhân' },
            { key: 'RAM', val: '8GB / 16GB DDR5 4800MHz' },
            { key: 'Ổ cứng', val: '512GB SSD PCIe NVMe' },
            { key: 'Màn hình', val: '15.6" FHD (1920x1080) 144Hz IPS' },
            { key: 'Đồ họa', val: 'NVIDIA GeForce RTX 3050 4GB GDDR6' },
            { key: 'Camera', val: 'FHD 1080p' },
            { key: 'Pin', val: '3-cell, 52 Wh' },
            { key: 'Cổng kết nối', val: '2x USB 3.1, 1x USB Type-C, HDMI, Jack 3.5mm' },
            { key: 'Trọng lượng', val: '1.89 kg' },
            { key: 'HĐH', val: 'Windows 11 Pro' }
        ]
    },

    // ==================== LAPTOP DELL ====================
    4: {
        id: 4,
        name: 'Dell Inspiron 15 5430',
        category: 'dell',
        rating: 4.7,
        reviewCount: 142,
        image: '../images/dell-15-1.webp',
        images: ['../images/dell-15-1.webp'],
        isNew: true,
        basePrice: 17290000,
        oldPrice: 19000000,
        variants: [
            { label: 'Core i5 | 8GB | 512GB', price: 17290000 },
            { label: 'Core i7 | 16GB | 512GB', price: 19990000 }
        ],
        colors: [{ name: 'Bạc', price: 17290000, image: '../images/dell-15-2.webp' }],
        quickSpecs: [
            { label: 'CPU', value: 'Intel Core i5-1340P' },
            { label: 'RAM', value: '8GB / 16GB LPDDR5' },
            { label: 'Màn hình', value: '15.6" FHD' },
            { label: 'Storage', value: '512GB SSD' }
        ],
        specs: [
            { key: 'Vi xử lý', val: 'Intel Core i5-1340P, 1.9GHz up to 4.6GHz, 12 nhân' },
            { key: 'RAM', val: '8GB / 16GB LPDDR5' },
            { key: 'Ổ cứng', val: '512GB SSD PCIe NVMe' },
            { key: 'Màn hình', val: '15.6" FHD (1920x1080) IPS 60Hz' },
            { key: 'Đồ họa', val: 'Intel Iris Xe Graphics' },
            { key: 'Camera', val: 'HD 720p' },
            { key: 'Pin', val: '4-cell, 52 Wh' },
            { key: 'Cổng kết nối', val: '2x USB 3.2, 1x USB Type-C, HDMI, Jack 3.5mm' },
            { key: 'Trọng lượng', val: '1.63 kg' },
            { key: 'HĐH', val: 'Windows 11' }
        ]
    },
    5: {
        id: 5,
        name: 'Dell Inspiron 16 3520',
        category: 'dell',
        rating: 4.5,
        reviewCount: 215,
        image: '../images/dell-16-1.webp',
        images: ['../images/dell-16-1.webp'],
        isNew: false,
        basePrice: 12490000,
        oldPrice: 14500000,
        variants: [
            { label: '8GB | 256GB', price: 12490000 },
            { label: '16GB | 512GB', price: 14990000 }
        ],
        colors: [{ name: 'Đen', price: 12490000, image: '../images/dell-16-2.webp' }],
        quickSpecs: [
            { label: 'CPU', value: 'Intel Core i5-1235U' },
            { label: 'RAM', value: '8GB / 16GB DDR4' },
            { label: 'Màn hình', value: '16" 120Hz' },
            { label: 'Storage', value: '256GB / 512GB SSD' }
        ],
        specs: [
            { key: 'Vi xử lý', val: 'Intel Core i5-1235U, 1.3GHz up to 4.4GHz, 10 nhân' },
            { key: 'RAM', val: '8GB / 16GB DDR4 3200MHz' },
            { key: 'Ổ cứng', val: '256GB / 512GB SSD PCIe NVMe' },
            { key: 'Màn hình', val: '16" FHD+ (1920x1200) 120Hz IPS' },
            { key: 'Đồ họa', val: 'Intel Iris Xe Graphics' },
            { key: 'Camera', val: 'HD 720p' },
            { key: 'Pin', val: '3-cell, 42 Wh' },
            { key: 'Cổng kết nối', val: '2x USB 3.1, 1x USB Type-C, HDMI, Jack 3.5mm' },
            { key: 'Trọng lượng', val: '2.02 kg' },
            { key: 'HĐH', val: 'Windows 11' }
        ]
    },
    6: {
        id: 6,
        name: 'Dell 16 Plus 3250',
        category: 'dell',
        rating: 5.0,
        reviewCount: 56,
        image: '../images/dell-16-plus-1.webp',
        images: ['../images/dell-16-plus-1.webp'],
        isNew: true,
        basePrice: 45990000,
        oldPrice: null,
        variants: [
            { label: 'Ultra 7 | 16GB | 512GB', price: 45990000 },
            { label: 'Ultra 9 | 32GB | 1TB', price: 55990000 }
        ],
        colors: [{ name: 'Bạc', price: 45990000, image: 'dell-16-plus-3.webp' }],
        quickSpecs: [
            { label: 'CPU', value: 'Intel Ultra 7-155H' },
            { label: 'RAM', value: '16GB / 32GB LPDDR5X' },
            { label: 'Màn hình', value: '16" 3K OLED 120Hz' },
            { label: 'Storage', value: '512GB / 1TB SSD' }
        ],
        specs: [
            { key: 'Vi xử lý', val: 'Intel Ultra 7-155H / Ultra 9-185H' },
            { key: 'RAM', val: '16GB / 32GB LPDDR5X' },
            { key: 'Ổ cứng', val: '512GB / 1TB SSD PCIe NVMe' },
            { key: 'Màn hình', val: '16" 3K OLED (3072x1920) 120Hz, 99.9% DCI-P3' },
            { key: 'Đồ họa', val: 'Intel Arc Graphics' },
            { key: 'Camera', val: 'FHD 1080p IR' },
            { key: 'Pin', val: '6-cell, 85 Wh' },
            { key: 'Cổng kết nối', val: '2x Thunderbolt 4, 2x USB 3.2, HDMI 2.1, Jack 3.5mm' },
            { key: 'Trọng lượng', val: '2.06 kg' },
            { key: 'HĐH', val: 'Windows 11 Pro' }
        ]
    },

    // ==================== LAPTOP LENOVO ====================
    7: {
        id: 7,
        name: 'Lenovo ThinkPad',
        category: 'lenovo',
        rating: 4.6,
        reviewCount: 188,
        image: '../images/lenovo-think-pad-1.webp',
        images: ['../images/lenovo-think-pad-1.webp'],
        isNew: false,
        basePrice: 13990000,
        oldPrice: 15500000,
        variants: [
            { label: 'Ryzen 5 | 8GB | 512GB', price: 13990000 },
            { label: 'Ryzen 7 | 16GB | 512GB', price: 16990000 }
        ],
        colors: [{ name: 'Đen', price: 13990000, image: 'lenovo-think-pad-2.webp' }],
        quickSpecs: [
            { label: 'CPU', value: 'AMD Ryzen 5-7520U' },
            { label: 'RAM', value: '8GB / 16GB LPDDR5' },
            { label: 'Màn hình', value: '14" FHD' },
            { label: 'Storage', value: '512GB SSD' }
        ],
        specs: [
            { key: 'Vi xử lý', val: 'AMD Ryzen 5-7520U, 2.8GHz up to 4.7GHz, 6 nhân' },
            { key: 'RAM', val: '8GB / 16GB LPDDR5' },
            { key: 'Ổ cứng', val: '512GB SSD PCIe NVMe' },
            { key: 'Màn hình', val: '14" FHD (1920x1080) IPS 180 độ' },
            { key: 'Đồ họa', val: 'Radeon Graphics' },
            { key: 'Camera', val: 'FHD 1080p' },
            { key: 'Pin', val: '3-cell, 52 Wh' },
            { key: 'Cổng kết nối', val: '2x USB 3.1, 1x USB Type-C, HDMI, Jack 3.5mm' },
            { key: 'Trọng lượng', val: '1.62 kg' },
            { key: 'HĐH', val: 'Windows 11 Pro' }
        ]
    },
    8: {
        id: 8,
        name: 'Lenovo ThinkBook',
        category: 'lenovo',
        rating: 4.9,
        reviewCount: 74,
        image: '../images/lenovo-thinkbook-1.webp',
        images: ['../images/lenovo-thinkbook-1.webp'],
        isNew: true,
        basePrice: 26490000,
        oldPrice: null,
        variants: [
            { label: 'Ultra 5 | 16GB | 512GB', price: 26490000 },
            { label: 'Ultra 7 | 16GB | 1TB', price: 29990000 }
        ],
        colors: [{ name: 'Bạc', price: 26490000, image: 'lenovo-thinkbook-2.webp' }],
        quickSpecs: [
            { label: 'CPU', value: 'Intel Ultra 5-125H' },
            { label: 'RAM', value: '16GB LPDDR5X' },
            { label: 'Màn hình', value: '14" 2.8K OLED 120Hz' },
            { label: 'Storage', value: '512GB / 1TB SSD' }
        ],
        specs: [
            { key: 'Vi xử lý', val: 'Intel Ultra 5-125H / Ultra 7-165H' },
            { key: 'RAM', val: '16GB / 32GB LPDDR5X' },
            { key: 'Ổ cứng', val: '512GB / 1TB SSD PCIe NVMe' },
            { key: 'Màn hình', val: '14" 2.8K OLED (2880x1800) 120Hz 100% DCI-P3' },
            { key: 'Đồ họa', val: 'Intel Arc Graphics / NVIDIA RTX 4050' },
            { key: 'Camera', val: 'FHD 1080p IR' },
            { key: 'Pin', val: '60Wh' },
            { key: 'Cổng kết nối', val: '2x Thunderbolt 4, 1x USB 3.2, HDMI 2.1' },
            { key: 'Trọng lượng', val: '1.34 kg' },
            { key: 'HĐH', val: 'Windows 11' }
        ]
    },
    9: {
        id: 9,
        name: 'Lenovo V14',
        category: 'lenovo',
        rating: 4.8,
        reviewCount: 224,
        image: '../images/lenovo-v14-1.webp',
        images: ['../images/lenovo-v14-1.webp'],
        isNew: false,
        basePrice: 32990000,
        oldPrice: null,
        variants: [
            { label: 'Core i7 | 16GB | 512GB', price: 32990000 },
            { label: 'Core i7 | 32GB | 1TB', price: 37990000 }
        ],
        colors: [{ name: 'Đen', price: 32990000, image: '../images/lenovo-v14-2.webp' }],
        quickSpecs: [
            { label: 'CPU', value: 'Intel Core i7-1365U' },
            { label: 'RAM', value: '16GB / 32GB LPDDR5X' },
            { label: 'Màn hình', value: '14" 2.5K 60Hz' },
            { label: 'Storage', value: '512GB / 1TB SSD' }
        ],
        specs: [
            { key: 'Vi xử lý', val: 'Intel Core i7-1365U, 0.9GHz up to 5.2GHz, 10 nhân' },
            { key: 'RAM', val: '16GB / 32GB LPDDR5X' },
            { key: 'Ổ cứng', val: '512GB / 1TB SSD PCIe NVMe' },
            { key: 'Màn hình', val: '14" 2.5K (2560x1600) 60Hz IPS' },
            { key: 'Đồ họa', val: 'Intel Iris Xe Graphics' },
            { key: 'Camera', val: 'FHD 1080p' },
            { key: 'Pin', val: '3-cell, 52 Wh' },
            { key: 'Cổng kết nối', val: '2x USB 3.1, 1x USB Type-C, HDMI, Jack 3.5mm' },
            { key: 'Trọng lượng', val: '1.48 kg' },
            { key: 'HĐH', val: 'Windows 11 Pro' }
        ]
    },

    // ==================== MACBOOK ====================
    10: {
        id: 10,
        name: 'MacBook Air M5 15 inch (2026)',
        category: 'macbook',
        rating: 4.8,
        reviewCount: 450,
        image: '../images/macbook_air_m5.webp',
        images: ['../images/macbook_air_m5.webp'],
        isNew: true,
        basePrice: 39990000,
        oldPrice: 42000000,
        variants: [
            { label: '8GB | 512GB', price: 39990000 },
            { label: '16GB | 512GB', price: 44990000 }
        ],
        colors: [
            { name: 'Bạc', price: 39990000, image: '../images/macbook_air_m5.webp' },
            { name: 'Xám', price: 39990000, image: '../images/macbook_air_m5.webp' }
        ],
        quickSpecs: [
            { label: 'Chip', value: 'Apple M5' },
            { label: 'Màn hình', value: '15.3" Liquid Retina' },
            { label: 'RAM', value: '8GB LPDDR5X' },
            { label: 'Storage', value: '512GB SSD' }
        ],
        specs: [
            { key: 'Màn hình', val: '15.3 inch Liquid Retina, 2880×1864 px' },
            { key: 'Chip', val: 'Apple M5, 8 nhân CPU, 10 nhân GPU' },
            { key: 'RAM', val: '8 GB (LPDDR5X)' },
            { key: 'Bộ nhớ trong', val: '512GB / 1TB SSD' },
            { key: 'Camera', val: 'FaceTime HD 1080p' },
            { key: 'Pin', val: 'Lên đến 18 giờ phát video' },
            { key: 'Hệ điều hành', val: 'macOS 15' },
            { key: 'Kết nối', val: '2x Thunderbolt 4, MagSafe, Wi-Fi 7, Bluetooth 5.4' },
            { key: 'Trọng lượng', val: '1.24 kg' }
        ]
    },
    11: {
        id: 11,
        name: 'MacBook Air M4 13 inch (2025)',
        category: 'macbook',
        rating: 4.7,
        reviewCount: 125,
        image: '../images/macbook_air_m4.webp',
        images: ['../images/macbook_air_m4.webp'],
        isNew: true,
        basePrice: 31990000,
        oldPrice: 34990000,
        variants: [
            { label: '512GB', price: 31990000 },
            { label: '1TB', price: 36990000 }
        ],
        colors: [
            { name: 'Bạc', price: 31990000, image: '../images/macbook_air_m4.webp' },
            { name: 'Xám', price: 31990000, image: '../images/macbook_air_m4.webp' }
        ],
        quickSpecs: [
            { label: 'Chip', value: 'Apple M4' },
            { label: 'Màn hình', value: '13.6" Liquid Retina' },
            { label: 'RAM', value: '8GB LPDDR5X' },
            { label: 'Storage', value: '512GB SSD' }
        ],
        specs: [
            { key: 'Màn hình', val: '15.3 inch Liquid Retina, 2880×1864 px' },
            { key: 'Chip', val: 'Apple M4, 8 nhân CPU, 10 nhân GPU' },
            { key: 'RAM', val: '8 GB (LPDDR5X)' },
            { key: 'Bộ nhớ trong', val: '512GB / 1TB SSD' },
            { key: 'Camera', val: 'FaceTime HD 1080p' },
            { key: 'Pin', val: 'Lên đến 18 giờ phát video' },
            { key: 'Hệ điều hành', val: 'macOS 15' },
            { key: 'Kết nối', val: '2x Thunderbolt 4, MagSafe, Wi-Fi 7, Bluetooth 5.4' },
            { key: 'Trọng lượng', val: '1.24 kg' }
        ]
    },
    12: {
        id: 12,
        name: 'MacBook Air M2 13 inch (2024)',
        category: 'macbook',
        rating: 4.6,
        reviewCount: 890,
        image: '../images/macbook_air_m2.webp',
        images: ['../images/macbook_air_m2.webp'],
        isNew: false,
        basePrice: 27990000,
        oldPrice: 29900000,
        variants: [
            { label: '256GB', price: 27990000 },
            { label: '512GB', price: 29990000 }
        ],
        colors: [
            { name: 'Bạc', price: 27990000, image: '../images/macbook_air_m2.webp' },
            { name: 'Xám', price: 27990000, image: '../images/macbook_air_m2.webp' }
        ],
        quickSpecs: [
            { label: 'Chip', value: 'Apple M2' },
            { label: 'Màn hình', value: '13.6" Retina' },
            { label: 'RAM', value: '8GB LPDDR5' },
            { label: 'Storage', value: '256GB SSD' }
        ],
        specs: [
            { key: 'Màn hình', val: '13.6 inch Liquid Retina, 2560×1600 px' },
            { key: 'Chip', val: 'Apple M2, 8 nhân CPU, 8 nhân GPU' },
            { key: 'RAM', val: '8 GB (LPDDR5)' },
            { key: 'Bộ nhớ trong', val: '256GB / 512GB SSD' },
            { key: 'Camera', val: 'FaceTime HD 720p' },
            { key: 'Pin', val: 'Lên đến 15 giờ phát video' },
            { key: 'Hệ điều hành', val: 'macOS 14' },
            { key: 'Kết nối', val: '2x Thunderbolt 3, MagSafe, Wi-Fi 6E, Bluetooth 5.3' },
            { key: 'Trọng lượng', val: '1.24 kg' }
        ]
    }
};

// Tự động thêm thuộc tính .price để tương thích với các logic cũ
Object.values(window.productDetails).forEach(p => {
    if (!p.price) p.price = p.basePrice;
});

/**
 * Hàm cập nhật Breadcrumb và tiêu đề trang
 */
window.renderTitle = function(p) {
    const titleEl = document.getElementById('pdTitle');
    const breadcrumbName = document.getElementById('pdBreadcrumbName');
    const breadcrumbCat = document.getElementById('pdBreadcrumbCat');
    const mainImageEl = document.getElementById('pdMainImage');
    const stickyImageEl = document.getElementById('pdStickyImg');
    const priceEl = document.getElementById('pdPrice');

    if (titleEl) titleEl.textContent = p.name;
    if (breadcrumbName) breadcrumbName.textContent = p.name;
    document.title = `${p.name} - Horse Store`;

    // Render image
    if (mainImageEl) {
        const imageUrl = p.images && p.images.length > 0 ? p.images[0] : p.image;
        mainImageEl.src = imageUrl;
        mainImageEl.alt = p.name;
    }
    
    if (stickyImageEl) {
        const imageUrl = p.images && p.images.length > 0 ? p.images[0] : p.image;
        stickyImageEl.src = imageUrl;
        stickyImageEl.alt = p.name;
    }

    // Render price
    if (priceEl) {
        const price = p.price || p.basePrice;
        priceEl.textContent = price.toLocaleString('vi-VN') + 'đ';
    }

    if (breadcrumbCat) {
        const catLabels = { hp: 'HP', dell: 'Dell', lenovo: 'Lenovo', macbook: 'MacBook' };
        breadcrumbCat.textContent = catLabels[p.category] || p.category;
        breadcrumbCat.href = `category.html?cat=${p.category}`;
    }
};

document.addEventListener('DOMContentLoaded', () => {
    if (window.updateHeaderUI) window.updateHeaderUI();
    
    // Get product ID from URL and render product details
    const params = new URLSearchParams(window.location.search);
    const productId = Number(params.get('id'));
    
    if (productId && window.productDetails && window.productDetails[productId]) {
        const product = window.productDetails[productId];
        window.renderTitle(product);
    } else if (productId) {
        // Try to find product in AppStore products
        if (window.AppStore && window.AppStore.products) {
            const product = window.AppStore.products.find(p => p.id === productId);
            if (product) {
                window.renderTitle(product);
            }
        }
    }
    
    // Setup add to cart button on product detail page
    const cartBtn = document.getElementById("pdCartIconBtn");
    if (cartBtn) {
        cartBtn.addEventListener("click", (e) => {
            e.preventDefault();
            // Get product ID from URL parameter
            const params = new URLSearchParams(window.location.search);
            const productId = Number(params.get('id'));
            
            if (!productId || productId === 0) {
                console.error('Product ID not found in URL');
                alert('Không tìm thấy sản phẩm. Vui lòng thử lại.');
                return;
            }
            
            // Call the addToCart function
            if (typeof window.addToCart === 'function') {
window.addToCart(productId);
            } else {
                console.error('addToCart function not available');
                alert('Không thể thêm vào giỏ hàng. Vui lòng thử lại.');
            }
        });
    }

    // Setup sticky buy now button
    const stickyBuyBtn = document.getElementById("pdStickyBuy");
    if (stickyBuyBtn) {
        stickyBuyBtn.addEventListener("click", (e) => {
            e.preventDefault();
            // Get product ID from URL parameter
            const params = new URLSearchParams(window.location.search);
            const productId = Number(params.get('id'));
            
            if (!productId || productId === 0) {
                console.error('Product ID not found in URL');
                alert('Không tìm thấy sản phẩm. Vui lòng thử lại.');
                return;
            }
            
            // Add to cart then redirect to checkout
            if (typeof window.addToCart === 'function') {
                window.addToCart(productId);
                // Redirect to checkout
                window.location.href = 'checkout.html';
            } else {
                console.error('addToCart function not available');
                alert('Không thể mua ngay. Vui lòng thử lại.');
            }
        });
    }

    // Setup main buy now button (pdBuyBtn)
    const mainBuyBtn = document.getElementById("pdBuyBtn");
    if (mainBuyBtn) {
        mainBuyBtn.addEventListener("click", (e) => {
            e.preventDefault();
            // Get product ID from URL parameter
            const params = new URLSearchParams(window.location.search);
            const productId = Number(params.get('id'));
            
            if (!productId || productId === 0) {
                console.error('Product ID not found in URL');
                alert('Không tìm thấy sản phẩm. Vui lòng thử lại.');
                return;
            }
            
            // Add to cart then redirect to checkout
            if (typeof window.addToCart === 'function') {
                window.addToCart(productId);
                // Redirect to checkout
                window.location.href = 'checkout.html';
            } else {
                console.error('addToCart function not available');
                alert('Không thể mua ngay. Vui lòng thử lại.');
            }
        });
    }

    // Setup sticky cart button
    const stickyCartBtn = document.getElementById("pdStickyCart");
    if (stickyCartBtn) {
        stickyCartBtn.addEventListener("click", (e) => {
            e.preventDefault();
            // Get product ID from URL parameter
            const params = new URLSearchParams(window.location.search);
            const productId = Number(params.get('id'));
            
            if (!productId || productId === 0) {
                console.error('Product ID not found in URL');
                alert('Không tìm thấy sản phẩm. Vui lòng thử lại.');
                return;
            }
            
            // Add to cart
            if (typeof window.addToCart === 'function') {
                window.addToCart(productId);
            } else {
                console.error('addToCart function not available');
                alert('Không thể thêm vào giỏ hàng. Vui lòng thử lại.');
            }
        });
    }
}); // 26/3