// ========== PRODUCT DETAIL PAGE RENDER ==========

document.addEventListener('DOMContentLoaded', () => {
    // Lấy ID sản phẩm từ URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id')) || 1;

    // Lấy dữ liệu sản phẩm
    const productData = window.productDetails[productId];
    if (!productData) {
        document.querySelector('.pd-page').innerHTML = '<p style="text-align:center; padding:40px;">Sản phẩm không tìm thấy</p>';
        return;
    }

    // === RENDER TITLE & RATING ===
    document.getElementById('pdTitle').textContent = productData.name;
    const ratingValue = productData.rating ? productData.rating.toFixed(1) : '5.0';
    document.getElementById('pdRatingCount').textContent = `${ratingValue} (${productData.reviewCount} đánh giá)`;
    
    // Stars
    const starCount = Math.round(productData.rating);
    document.getElementById('pdStars').textContent = '★'.repeat(starCount) + '☆'.repeat(5 - starCount);

    // === RENDER IMAGES ===
    document.getElementById('pdMainImage').src = productData.image;
    document.getElementById('pdMainImage').alt = productData.name;

    // Thumbnail strip - CHỈ hiện nếu có nhiều hơn 1 ảnh
    const thumbsContainer = document.getElementById('pdThumbs');
    if (productData.images && productData.images.length > 1) {
        thumbsContainer.innerHTML = productData.images.map((img, idx) => `
            <img src="${img}" alt="Thumb ${idx}" class="pd-thumb ${idx === 0 ? 'active' : ''}" 
                 onclick="document.getElementById('pdMainImage').src='${img}'">
        `).join('');
        thumbsContainer.style.display = 'grid';
    } else {
        thumbsContainer.style.display = 'none';
    }

    // Badge mới
    const badgeNew = document.getElementById('pdBadgeNew');
    if (productData.isNew) {
        badgeNew.style.display = 'block';
    } else {
        badgeNew.style.display = 'none';
    }

    // === RENDER PRICE ===
    const basePrice = productData.basePrice || productData.variants[0]?.price || 0;
    document.getElementById('pdPrice').textContent = basePrice.toLocaleString('vi-VN') + '₫';
    
    if (productData.oldPrice) {
        document.getElementById('pdOldPrice').innerHTML = `<s>${productData.oldPrice.toLocaleString('vi-VN')}₫</s>`;
    }

    // Trade price (thường là 80% giá hiện tại)
    const tradePrice = Math.round(basePrice * 0.8);
    document.getElementById('pdTradePrice').textContent = tradePrice.toLocaleString('vi-VN') + '₫';

    // === RENDER VARIANTS (Phiên bản) ===
    const variantSection = document.getElementById('pdVariantSection');
    if (productData.variants && productData.variants.length > 0) {
        const variantHTML = productData.variants.map((v, idx) => `
            <button class="pd-variant-btn ${idx === 0 ? 'active' : ''}" onclick="selectVariant(${idx}, this)">
                ${v.label}
            </button>
        `).join('');
        document.getElementById('pdVariants').innerHTML = variantHTML;
        variantSection.style.display = 'block';

        // Global function để thay đổi giá khi chọn variant
        window.selectVariant = (idx, elem) => {
            document.querySelectorAll('.pd-variant-btn').forEach(b => b.classList.remove('active'));
            elem.classList.add('active');
            const variantPrice = productData.variants[idx].price;
            document.getElementById('pdPrice').textContent = variantPrice.toLocaleString('vi-VN') + '₫';
        };
    } else {
        variantSection.style.display = 'none';
    }

    // === RENDER COLORS (Màu sắc) ===
    const colorSection = document.getElementById('pdColorSection');
    if (productData.colors && productData.colors.length > 0) {
        const colorHTML = productData.colors.map((c, idx) => `
            <div class="pd-color-item">
                <button class="pd-color-btn ${idx === 0 ? 'active' : ''}" 
                        onclick="selectColor(${idx}, this)"
                        title="${c.name}">
                    <div class="pd-color-thumb" style="background-color: ${getColorCode(c.name)};"></div>
                    <div class="pd-color-info">
                        <div class="pd-color-name">${c.name}</div>
                        <div class="pd-color-price">${c.price.toLocaleString('vi-VN')}₫</div>
                    </div>
                    <div class="pd-color-check" style="display: ${idx === 0 ? 'block' : 'none'};">✓</div>
                </button>
            </div>
        `).join('');
        if (colorSection) {
            document.getElementById('pdColors').innerHTML = colorHTML;
            colorSection.style.display = 'block';
        }

        window.selectColor = (idx, elem) => {
            document.querySelectorAll('.pd-color-btn').forEach(b => {
                b.classList.remove('active');
                b.querySelector('.pd-color-check').style.display = 'none';
            });
            elem.classList.add('active');
            elem.querySelector('.pd-color-check').style.display = 'block';
            if (productData.colors[idx].image) {
                document.getElementById('pdMainImage').src = productData.colors[idx].image;
            }
            const colorPrice = productData.colors[idx].price;
            document.getElementById('pdPrice').textContent = colorPrice.toLocaleString('vi-VN') + '₫';
        };
    } else if (colorSection) {
        colorSection.style.display = 'none';
    }

    // Helper function để lấy mã màu từ tên tiếng Việt
    function getColorCode(colorName) {
        const colorMap = {
            'Bạc': '#c0c0c0',
            'Đen': '#000000',
            'Trắng': '#ffffff',
            'Xám': '#808080',
            'Vàng': '#ffff00',
            'Đỏ': '#ff0000',
            'Xanh': '#0000ff',
            'Xanh lá cây': '#008000',
            'Cam': '#ffa500',
            'Tím': '#800080',
            'Hồng': '#ffc0cb',
            'Nâu': '#a52a2a',
            'Ánh sao': '#a8a9ad',
            'Ánh sao xám': '#696969',
            'Đêm đen': '#1a1a1a'
        };
        return colorMap[colorName] || '#cccccc';
    }

    // === RENDER QUICK SPECS ===
    const quickSpecsContainer = document.getElementById('pdQuickSpecs');
    if (productData.quickSpecs && quickSpecsContainer) {
        quickSpecsContainer.innerHTML = productData.quickSpecs.map(spec => `
            <div class="pd-quick-spec">
                <span class="pd-quick-spec-label">${spec.label}</span>
                <span class="pd-quick-spec-value">${spec.value}</span>
            </div>
        `).join('');
    }

    // === RENDER FULL SPECS ===
    const specsContainer = document.getElementById('pdSpecs');
    if (productData.specs && specsContainer) {
        specsContainer.innerHTML = productData.specs.map(spec => `
            <tr>
                <td class="spec-key">${spec.key}</td>
                <td class="spec-value">${spec.val}</td>
            </tr>
        `).join('');
    }

    // === RENDER RELATED PRODUCTS (Sản phẩm liên quan) ===
    const relatedContainer = document.getElementById('pdRelated');
    if (relatedContainer && window.AppStore && window.AppStore.products) {
        const related = window.AppStore.products
            .filter(p => p.category === productData.category && p.id !== productId)
            .slice(0, 4);
        
        relatedContainer.innerHTML = related.map(p => {
            const rating = p.rating || 0;
            const isNew = p.isNew || false;
            const chips = [];
            
            // Lấy chips từ product data
            if (p.quickSpecs && p.quickSpecs.length > 0) {
                chips.push(...p.quickSpecs.slice(0, 2).map(s => s.value));
            }
            
            return `
                <div class="product-card product-card--shop fade-in" data-product-id="${p.id}">
                    <div class="product-image product-image--shop">
                        <img src="${p.image}" alt="${p.name}" onerror="this.src='https://via.placeholder.com/200x200?text=Laptop'">
                        ${isNew ? `<span class="corner-badge corner-badge--new">Mới</span>` : ''}
                        <button class="product-fav" type="button" aria-label="Yêu thích">
                            ♡
                        </button>
                    </div>

                    <div class="product-info product-info--shop">
                        <h3 class="product-name product-name--shop">${p.name}</h3>

                        <div class="product-price product-price--shop">
                            <span class="price-current price-current--shop">${p.price.toLocaleString('vi-VN')}₫</span>
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

                            <button class="add-to-cart-btn add-to-cart-btn--compact" data-product-id="${p.id}">
                                Thêm vào giỏ
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
        
        // Setup interactions cho related products (click card -> detail page)
        const relatedContainerNew = relatedContainer.cloneNode(true);
        relatedContainer.parentNode.replaceChild(relatedContainerNew, relatedContainer);
        
        relatedContainerNew.addEventListener('click', (e) => {
            // Click "Thêm vào giỏ" button
            const addToCartBtn = e.target.closest('.add-to-cart-btn');
            if (addToCartBtn) {
                e.preventDefault();
                e.stopPropagation();
                const id = Number(addToCartBtn.getAttribute('data-product-id'));
                console.log('[related product] Add to cart, id:', id);
                if (id && window.addToCart) {
                    window.addToCart(id);
                }
                return;
            }

            // Click card -> mở product detail page
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

    // === ADD TO CART ===
    const cartIconBtn = document.getElementById('pdCartIconBtn');
    if (cartIconBtn) {
        // Remove old listener nếu có (prevent duplicate)
        const newCartBtn = cartIconBtn.cloneNode(true);
        cartIconBtn.parentNode.replaceChild(newCartBtn, cartIconBtn);
        
        newCartBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('[pdCartIconBtn] Click event, productId:', productId);
            if (window.addToCart) {
                window.addToCart(productId);
            }
        });
    }

    // === BUY NOW ===
    const buyBtn = document.getElementById('pdBuyBtn');
    if (buyBtn) {
        // Remove old listener nếu có (prevent duplicate)
        const newBuyBtn = buyBtn.cloneNode(true);
        buyBtn.parentNode.replaceChild(newBuyBtn, buyBtn);
        
        newBuyBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('[pdBuyBtn] Click event, productId:', productId);
            if (window.addToCart) {
                window.addToCart(productId);
                // Chuyển đến trang checkout (nếu có)
                setTimeout(() => {
                    window.location.href = 'checkout.html';
                }, 100);
            }
        });
    }

    // === FAVORITE ===
    const favBtn = document.getElementById('pdFavBtn');
    if (favBtn) {
        // Remove old listener nếu có (prevent duplicate)
        const newFavBtn = favBtn.cloneNode(true);
        favBtn.parentNode.replaceChild(newFavBtn, favBtn);
        
        newFavBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            newFavBtn.classList.toggle('active');
            const isFav = newFavBtn.classList.contains('active');
            const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
            if (isFav) {
                if (!favorites.includes(productId)) favorites.push(productId);
            } else {
                favorites = favorites.filter(id => id !== productId);
            }
            localStorage.setItem('favorites', JSON.stringify(favorites));
        });

        // Kiểm tra nếu đã yêu thích
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        if (favorites.includes(productId)) {
            newFavBtn.classList.add('active');
        }
    }
});
