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
        initFadeInAnimation();
    }

    // 즉시 실행
    init();

})();