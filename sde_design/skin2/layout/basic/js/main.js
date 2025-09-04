/**
 * SKIN2 전용 메인 페이지 JavaScript
 * 메인 페이지 상호작용 및 애니메이션 처리
 */

(function() {
    'use strict';

    // 스크롤 애니메이션
    function initScrollAnimation() {
        const heroSection = document.querySelector('.hero-text-section');
        if (!heroSection) return;

        window.addEventListener('scroll', function() {
            const scrolled = window.scrollY;
            const rate = scrolled * -0.5;
            
            if (scrolled > 0 && scrolled < heroSection.offsetHeight) {
                heroSection.style.transform = `translateY(${rate}px)`;
            }
        });
    }

    // Swiper 초기화
    function initSwiper() {
        const swiperContainer = document.querySelector('.swiper-container.special_slide');
        if (!swiperContainer) return;
        
        // Swiper가 로드되었는지 확인
        if (typeof Swiper === 'undefined') {
            console.log('Swiper not loaded, trying again...');
            setTimeout(initSwiper, 500);
            return;
        }
        
        const swiper = new Swiper(swiperContainer, {
            slidesPerView: 3,
            spaceBetween: 20,
            loop: false,
            navigation: {
                nextEl: '.swiper-button-next-special_slide',
                prevEl: '.swiper-button-prev-special_slide',
            },
            lazy: true,
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 16
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 20
                }
            }
        });
        
        console.log('Swiper initialized:', swiper);
    }

    // 페이드인 애니메이션
    function initFadeInAnimation() {
        const sections = document.querySelectorAll('.section');
        
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        sections.forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(section);
        });
    }

    // 초기화
    function init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
            return;
        }
        
        initScrollAnimation();
        initSwiper();
        initFadeInAnimation();
    }

    // 즉시 실행
    init();

})();