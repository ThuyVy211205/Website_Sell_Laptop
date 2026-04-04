// Contact Widget - Modal with QR Code Integration
(function() {
    const createContactWidget = () => {
        // Create modal HTML
        const modalContainer = document.createElement('div');
        modalContainer.id = 'contact-modals';
        modalContainer.innerHTML = `
            <!-- QR Code Modal -->
            <div class="qr-modal" id="qrModal" style="display: none;">
                <div class="qr-modal-overlay" id="qrOverlay"></div>
                <div class="qr-modal-content">
                    <button class="qr-modal-close" id="qrClose">✕</button>
                    <div class="qr-modal-body">
                        <h3 id="qrTitle"></h3>
                        <img id="qrImage" src="" alt="QR Code" class="qr-code-image">
                        <p id="qrDescription"></p>
                    </div>
                </div>
            </div>

            <!-- Hotline Modal -->
            <div class="hotline-modal" id="hotlineModal" style="display: none;">
                <div class="hotline-modal-overlay" id="hotlineOverlay"></div>
                <div class="hotline-modal-content">
                    <button class="hotline-modal-close" id="hotlineClose">✕</button>
                    <div class="hotline-modal-body">
                        <h3>📞 Hotline</h3>
                        <div class="hotline-number">0868 264 437</div>
                        <p>Gọi chúng tôi để được tư vấn ngay!</p>
                        <a href="tel:0868264437" class="hotline-call-btn">Gọi ngay</a>
                    </div>
                </div>
            </div>
        `;
        
        // Only append if not already in DOM
        if (!document.getElementById('contact-modals')) {
            document.body.appendChild(modalContainer);
        }
        
        // Add CSS
        addContactWidgetStyles();
        
        // Add Event Listeners
        addEventListeners();
    };
    
    const addContactWidgetStyles = () => {
        const style = document.createElement('style');
        style.textContent = `
            /* QR Modal */
            .qr-modal {
                position: fixed;
                inset: 0;
                z-index: 1100;
                display: flex;
                align-items: center;
                justify-content: center;
                animation: modalFadeIn 0.3s ease;
            }
            
            .qr-modal-overlay {
                position: fixed;
                inset: 0;
                background: rgba(0, 0, 0, 0.6);
                cursor: pointer;
            }
            
            .qr-modal-content {
                position: relative;
                background: white;
                border-radius: 20px;
                width: 90%;
                max-width: 440px;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
                animation: modalSlideUp 0.3s cubic-bezier(0.23, 1, 0.32, 1);
                overflow: hidden;
            }
            
            .qr-modal-close {
                position: absolute;
                top: 16px;
                right: 16px;
                background: rgba(255, 255, 255, 0.9);
                border: none;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                font-size: 24px;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.2s;
                z-index: 10;
            }
            
            .qr-modal-close:hover {
                background: white;
                transform: rotate(90deg);
            }
            
            .qr-modal-body {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 40px 30px 30px 30px;
                text-align: center;
            }
            
            .qr-modal-body h3 {
                margin: 0 0 20px 0;
                font-size: 22px;
                color: #333;
            }
            
            .qr-code-image {
                max-width: 320px;
                width: 100%;
                height: auto;
                border-radius: 12px;
                margin-bottom: 20px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            }
            
            .qr-modal-body p {
                margin: 0;
                font-size: 14px;
                color: #666;
                line-height: 1.6;
            }
            
            /* Hotline Modal */
            .hotline-modal {
                position: fixed;
                inset: 0;
                z-index: 1100;
                display: flex;
                align-items: center;
                justify-content: center;
                animation: modalFadeIn 0.3s ease;
            }
            
            .hotline-modal-overlay {
                position: fixed;
                inset: 0;
                background: rgba(0, 0, 0, 0.6);
                cursor: pointer;
            }
            
            .hotline-modal-content {
                position: relative;
                background: white;
                border-radius: 20px;
                width: 90%;
                max-width: 380px;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
                animation: modalSlideUp 0.3s cubic-bezier(0.23, 1, 0.32, 1);
                overflow: hidden;
            }
            
            .hotline-modal-close {
                position: absolute;
                top: 16px;
                right: 16px;
                background: rgba(255, 255, 255, 0.9);
                border: none;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                font-size: 24px;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.2s;
                z-index: 10;
            }
            
            .hotline-modal-close:hover {
                background: white;
                transform: rotate(90deg);
            }
            
            .hotline-modal-body {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 40px 30px 30px 30px;
                text-align: center;
            }
            
            .hotline-modal-body h3 {
                margin: 0 0 25px 0;
                font-size: 24px;
                color: #22c55e;
            }
            
            .hotline-number {
                font-size: 36px;
                font-weight: 700;
                color: #22c55e;
                margin-bottom: 15px;
                letter-spacing: 1px;
                font-family: 'Courier New', monospace;
            }
            
            .hotline-modal-body p {
                margin: 0 0 25px 0;
                font-size: 14px;
                color: #666;
                line-height: 1.6;
            }
            
            .hotline-call-btn {
                display: inline-block;
                background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
                color: white;
                padding: 14px 32px;
                border-radius: 12px;
                font-weight: 600;
                text-decoration: none;
                transition: all 0.2s;
                box-shadow: 0 4px 12px rgba(34, 197, 94, 0.3);
            }
            
            .hotline-call-btn:hover {
                transform: translateY(-2px);
                box-shadow: 0 6px 16px rgba(34, 197, 94, 0.4);
            }
            
            .hotline-call-btn:active {
                transform: translateY(0);
            }
            
            /* Button styling for contact widgets */
            .contact-btn[data-contact],
            .contact-btn[type="button"] {
                background: none !important;
                border: none !important;
                color: inherit !important;
                padding: 0 !important;
                font: inherit !important;
            }
            
            /* Animations */
            @keyframes modalFadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            @keyframes modalSlideUp {
                from {
                    opacity: 0;
                    transform: translateY(40px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            /* Responsive */
            @media (max-width: 600px) {
                .qr-modal-content {
                    width: 95%;
                }
                .hotline-modal-content {
                    width: 95%;
                }
            }
        `;
        document.head.appendChild(style);
    };
    
    const addEventListeners = () => {
        const qrModal = document.getElementById('qrModal');
        const qrOverlay = document.getElementById('qrOverlay');
        const qrClose = document.getElementById('qrClose');
        const hotlineModal = document.getElementById('hotlineModal');
        const hotlineOverlay = document.getElementById('hotlineOverlay');
        const hotlineClose = document.getElementById('hotlineClose');
        
        // Close QR modal
        const closeQRModal = () => {
            qrModal.style.display = 'none';
        };
        
        // Close Hotline modal
        const closeHotlineModal = () => {
            hotlineModal.style.display = 'none';
        };
        
        qrClose.addEventListener('click', closeQRModal);
        qrOverlay.addEventListener('click', closeQRModal);
        hotlineClose.addEventListener('click', closeHotlineModal);
        hotlineOverlay.addEventListener('click', closeHotlineModal);
        
        // Show QR Modal function
        function showQRModal(title, imageSrc, description) {
            document.getElementById('qrTitle').textContent = title;
            document.getElementById('qrImage').src = imageSrc;
            document.getElementById('qrDescription').textContent = description;
            qrModal.style.display = 'flex';
        }
        
        // Show Hotline Modal function
        function showHotlineModal() {
            hotlineModal.style.display = 'flex';
        }
        
        // Attach to Zalo buttons with data attribute or href containing zalo
        const zaloButtons = document.querySelectorAll('[data-contact="zalo"], a[href*="zalo"]');
        zaloButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                showQRModal('Zalo', '../images/qrzalovy.jpg', 'Quét mã QR hoặc tìm kiếm Horse Store trên Zalo');
            });
        });
        
        // Attach to Messenger buttons with data attribute or href containing messenger
        const messengerButtons = document.querySelectorAll('[data-contact="messenger"], a[href*="messenger"]');
        messengerButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                showQRModal('Messenger', '../images/qrmessvy.jpg', 'Quét mã QR để kết nối với Horse Store trên Messenger');
            });
        });
        
        // Attach to Hotline buttons
        const hotlineButtons = document.querySelectorAll('[data-contact="hotline"], a[href*="hotline"]');
        hotlineButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                showHotlineModal();
            });
        });
        
        // Close modals with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeQRModal();
                closeHotlineModal();
            }
        });
    };
    
    // Export reinitialize function for dynamically added buttons
    window.reinitializeContactListeners = addEventListeners;
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createContactWidget);
    } else {
        createContactWidget();
    }
})();
