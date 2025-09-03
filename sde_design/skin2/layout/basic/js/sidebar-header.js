/**
 * SKIN2 전용 좌측 고정 헤더 JavaScript
 * 모바일 반응형 및 인터랙션 처리
 */

(function() {
    'use strict';

    // 모바일 환경 감지
    function isMobile() {
        return window.innerWidth <= 768;
    }

    // 모바일 메뉴 토글 기능
    function initMobileMenu() {
        if (!isMobile()) return;

        // 햄버거 메뉴 버튼 생성
        const mobileToggle = document.createElement('button');
        mobileToggle.className = 'mobile-menu-toggle';
        mobileToggle.innerHTML = '☰';
        mobileToggle.setAttribute('aria-label', 'Menu Toggle');
        document.body.appendChild(mobileToggle);

        // 오버레이 생성
        const overlay = document.createElement('div');
        overlay.className = 'mobile-overlay';
        document.body.appendChild(overlay);

        const sidebar = document.getElementById('sidebar-header');

        // 메뉴 열기/닫기 토글
        function toggleMenu() {
            const isOpen = sidebar.classList.contains('mobile-open');
            
            if (isOpen) {
                sidebar.classList.remove('mobile-open');
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            } else {
                sidebar.classList.add('mobile-open');
                overlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        }

        // 이벤트 리스너
        mobileToggle.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', toggleMenu);

        // ESC 키로 메뉴 닫기
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && sidebar.classList.contains('mobile-open')) {
                toggleMenu();
            }
        });
    }

    // 드롭다운 메뉴 토글 (Custom Care)
    function initDropdownMenu() {
        const customCareDropdown = document.querySelector('.custom-care-dropdown');
        const dropdownToggle = document.querySelector('.dropdown-toggle');
        const dropdownMenu = document.querySelector('.dropdown-menu');

        if (!customCareDropdown || !dropdownToggle || !dropdownMenu) return;

        // 클릭으로 드롭다운 토글 (모바일 대응)
        dropdownToggle.addEventListener('click', function(e) {
            e.preventDefault();
            const isOpen = dropdownMenu.style.display === 'block';
            dropdownMenu.style.display = isOpen ? 'none' : 'block';
        });

        // 외부 클릭 시 드롭다운 닫기
        document.addEventListener('click', function(e) {
            if (!customCareDropdown.contains(e.target)) {
                dropdownMenu.style.display = 'none';
            }
        });
    }

    // 현재 페이지 활성화 표시
    function setActiveMenu() {
        const currentPath = window.location.pathname;
        const currentSearch = window.location.search;
        
        // 모든 링크 활성화 제거
        document.querySelectorAll('#sidebar-header a').forEach(link => {
            link.classList.remove('active');
        });

        // 현재 페이지에 해당하는 메뉴 활성화
        document.querySelectorAll('#sidebar-header a').forEach(link => {
            const linkPath = link.getAttribute('href');
            
            if (linkPath === currentPath + currentSearch || 
                (currentPath === '/' && linkPath === '/') ||
                (linkPath && currentPath.includes(linkPath.split('?')[0]))) {
                link.classList.add('active');
                link.style.color = '#000';
                link.style.fontWeight = '600';
            }
        });
    }

    // 스크롤 효과 (그림자 제거됨)
    function initScrollEffect() {
        // 그림자 효과 완전 제거
        // 헤더와 콘텐츠 섹션 간 경계를 없애기 위해 그림자 제거
        return;
    }

    // 로딩 완료 후 초기화
    function init() {
        // DOM이 준비되면 실행
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
            return;
        }

        initMobileMenu();
        initDropdownMenu();
        setActiveMenu();
        initScrollEffect();

        // 리사이즈 시 모바일 메뉴 재초기화
        let resizeTimer;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {
                const mobileToggle = document.querySelector('.mobile-menu-toggle');
                const overlay = document.querySelector('.mobile-overlay');
                
                if (isMobile() && !mobileToggle) {
                    initMobileMenu();
                } else if (!isMobile() && mobileToggle) {
                    mobileToggle.remove();
                    overlay.remove();
                    document.getElementById('sidebar-header').classList.remove('mobile-open');
                    document.body.style.overflow = '';
                }
            }, 250);
        });
    }

    // 즉시 실행
    init();

})();