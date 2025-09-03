/**
 * SKIN2 전용 Footer JavaScript
 * 스크롤이 맨 아래에 도달했을 때만 Footer를 표시
 */

(function() {
    'use strict';
    
    let footer;
    let isFooterVisible = false;
    let scrollTimeout;
    
    // Footer 요소들 초기화
    function initFooterElements() {
        footer = document.getElementById('skin2-footer');
        
        console.log('initFooterElements - footer:', footer);
        
        if (!footer) {
            console.log('Footer 요소를 찾을 수 없습니다!');
            return;
        }
    }
    
    // 사이드바 Footer 기능 제거 - 통합 Footer 사용
    
    // 스크롤 위치 확인 및 Footer 표시/숨김
    function checkScrollPosition() {
        if (!footer) return;
        
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.offsetHeight,
            document.body.clientHeight,
            document.documentElement.clientHeight
        );
        
        // 스크롤이 맨 아래에서 100px 이내에 도달했는지 확인
        const isAtBottom = (scrollTop + windowHeight) >= (documentHeight - 100);
        
        if (isAtBottom && !isFooterVisible) {
            showFooter();
        } else if (!isAtBottom && isFooterVisible) {
            hideFooter();
        }
    }
    
    // Footer 표시
    function showFooter() {
        if (!footer) return;
        
        isFooterVisible = true;
        footer.classList.add('show');
        
        // 통합 Footer 사용으로 사이드바 Footer 관련 코드 제거
        
        // 애니메이션을 위한 작은 지연
        setTimeout(() => {
            footer.style.transition = 'opacity 0.3s ease-in-out';
            footer.style.opacity = '1';
            
            // 사이드바 Footer 애니메이션은 CSS transition으로 처리됨
        }, 10);
    }
    
    // Footer 숨김
    function hideFooter() {
        if (!footer) return;
        
        isFooterVisible = false;
        footer.style.opacity = '0';
        
        // 통합 Footer 사용으로 사이드바 Footer 관련 코드 제거
        
        setTimeout(() => {
            footer.classList.remove('show');
        }, 300);
    }
    
    // 스크롤 이벤트 핸들러 (디바운싱 적용)
    function onScroll() {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(checkScrollPosition, 50);
    }
    
    // 리사이즈 이벤트 핸들러
    function onResize() {
        // 스크롤 위치 재확인
        setTimeout(checkScrollPosition, 100);
    }
    
    // 초기화 함수
    function init() {
        // DOM이 준비되면 실행
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
            return;
        }
        
        initFooterElements();
        
        // 이벤트 리스너 등록
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onResize);
        
        // 초기 스크롤 위치 확인
        setTimeout(checkScrollPosition, 100);
        
        // 디버깅을 위한 로그
        console.log('통합 Footer 초기화 완료');
        console.log('footer:', footer);
        console.log('window.innerWidth:', window.innerWidth);
    }
    
    // 즉시 실행
    init();
    
})();