// Banner Carousel Script - Auto Rotate
(function() {
    let currentIndex = 0;
    let autoRotateTimer = null;
    const autoRotateInterval = 5000; // 5 seconds

    function initBannerCarousel() {
        const images = document.querySelectorAll('.home-banner-image');
        const dots = document.querySelectorAll('.banner-dots .dot');
        const totalBanners = images.length;

        // Check if elements exist
        if (totalBanners === 0 || dots.length === 0) {
            console.log('Retrying banner carousel initialization...');
            // Retry after 500ms
            setTimeout(initBannerCarousel, 500);
            return;
        }

        console.log(`Banner carousel found ${totalBanners} banners`);

        // Function to show a specific banner
        function showBanner(index) {
            // Ensure index is within bounds
            index = index % totalBanners;
            
            // Remove active class from all images and dots
            images.forEach(img => img.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));

            // Add active class to current image and dot
            if (images[index]) {
                images[index].classList.add('active');
                console.log(`Showing banner ${index + 1}/${totalBanners}`);
            }
            if (dots[index]) {
                dots[index].classList.add('active');
            }
        }

        // Function to go to next banner
        function nextBanner() {
            currentIndex = (currentIndex + 1) % totalBanners;
            showBanner(currentIndex);
        }

        // Function to go to specific banner
        function goToBanner(index) {
            currentIndex = index;
            showBanner(currentIndex);
            // Reset the auto-rotate timeout
            if (autoRotateTimer) clearInterval(autoRotateTimer);
            startAutoRotate();
        }

        // Start auto-rotate
        function startAutoRotate() {
            autoRotateTimer = setInterval(nextBanner, autoRotateInterval);
        }

        // Add click listeners to dots
        dots.forEach((dot, idx) => {
            dot.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index')) || idx;
                console.log(`Dot clicked: ${index}`);
                goToBanner(index);
            });
        });

        // Initialize - show first banner
        showBanner(0);

        // Start auto-rotate immediately
        startAutoRotate();

        // Pause on hover, resume on mouse leave
        const slider = document.getElementById('homeBannerSlider');
        if (slider) {
            slider.addEventListener('mouseenter', function() {
                console.log('Pause carousel on hover');
                if (autoRotateTimer) clearInterval(autoRotateTimer);
            });

            slider.addEventListener('mouseleave', function() {
                console.log('Resume carousel on mouse leave');
                startAutoRotate();
            });
        }

        // Expose functions to global scope
        window.bannerCarousel = {
            nextBanner,
            goToBanner,
            getCurrentIndex: () => currentIndex,
            startAutoRotate,
            stopAutoRotate: () => {
                if (autoRotateTimer) clearInterval(autoRotateTimer);
            }
        };

        console.log('✅ Banner carousel initialized and auto-rotating!');
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initBannerCarousel);
    } else {
        // DOM is already loaded
        initBannerCarousel();
    }

    // Fallback: Initialize after page load too
    window.addEventListener('load', initBannerCarousel);
})();
