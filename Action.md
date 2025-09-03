# CAFE24 SKIN2 커스터마이징 작업 - Action Log

---

## 🔄 6차 수정: 메인 페이지 최적화 및 콘텐츠 정리 (2025-09-03)

### 📋 6차 작업 개요
- **수정일**: 2025년 9월 3일
- **작업자**: Claude Code
- **작업내용**: 메인 페이지 콘텐츠 최적화 및 사용자 요청사항 반영
- **변경 범위**: 콘텐츠 영역 스크롤바, 설명칸, hero section, 헤더 스타일링

### 🎯 6차 변경 목표
- **스크롤바 제거**: 콘텐츠 영역 좌우 스크롤바 완전 제거
- **설명칸 제거**: Top Seller, Trending now, New arrivals의 부제목 제거
- **Hero 섹션**: 최상단 텍스트 섹션 추가 및 여백 조정
- **헤더 정리**: 구분선 및 그림자 효과 제거

### 📂 6차 주요 변경 사항

#### 1. sde_design/skin2/layout/basic/css/sidebar-header.css 수정
**콘텐츠 영역 스크롤바 제거**:
```css
/* 기존 */
#container {
    max-width: calc(100vw - 450px);
}

#contents {
    max-width: 100%;
    box-sizing: border-box;
}

/* 변경 후 */
#container {
    width: calc(100vw - 450px);
    overflow-x: hidden;
}

#contents {
    width: 100%;
    box-sizing: border-box;
    overflow-x: hidden;
}
```

**헤더 구분선 및 그림자 제거**:
```css
/* 제거된 스타일들 */
- border-right: 1px solid #e0e0e0; /* 헤더 우측 구분선 */
- box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1); /* 헤더 그림자 */
- border-bottom: 1px solid #f0f0f0; /* top-area 구분선 */
- border-top: 1px solid #f0f0f0; /* logo-area 구분선 */
```

#### 2. sde_design/skin2/index.html 대폭 수정
**Hero 텍스트 섹션 추가**:
```html
<!-- 새로 추가된 Hero 텍스트 섹션 -->
<section class="hero-text-section">
	<div class="hero-text-content">
		<p>We travel because we need to, because distance and difference are the secret tonic to creativity.<br>
		When we get home, home is still the same, but something in our minds has changed, and that changes everything.<br>
		And that's why we keep exploring.</p>
	</div>
</section>
```

**설명칸 제거**:
```html
<!-- Top Seller 설명 제거 -->
<!-- 기존: "지금 가장 인기있는" → 삭제 -->
<div class="main_title_txt01" data-ez-role="title">Top seller</div>

<!-- Trending now 설명 제거 -->
<!-- 기존: "에디터가 선정한" → 삭제 -->
<div class="main_title_txt01" data-ez-role="title">Trending now</div>

<!-- New Arrivals 설명 제거 -->
<!-- 기존: "놓치기에 아쉬운" → 삭제 -->
<div class="main_title_txt01" data-ez-role="title">New Arrivals</div>
```

#### 3. sde_design/skin2/layout/basic/css/main.css (새로 생성)
**Hero 텍스트 섹션 스타일링**:
```css
/* Hero 텍스트 섹션 */
.hero-text-section {
    background: #f8f9fa;
    padding: 60px 0;
    margin-bottom: 80px;
    text-align: center;
}

.hero-text-content {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 20px;
}

.hero-text-content p {
    font-family: 'Switzer', 'Nanum Square', sans-serif;
    font-size: 18px;
    line-height: 1.8;
    color: #333;
    font-weight: 400;
    margin: 0;
    letter-spacing: -0.02em;
}

/* 메인 타이틀 스타일 조정 */
.main_title_txt01 {
    font-family: 'Switzer', 'Nanum Square', sans-serif;
    font-size: 32px;
    font-weight: 600;
    color: #000;
    margin-bottom: 40px;
}
```

#### 4. sde_design/skin2/layout/basic/js/main.js (새로 생성)
**메인 페이지 인터랙션 JavaScript**:
```javascript
// 스크롤 애니메이션
function initScrollAnimation() {
    const heroSection = document.querySelector('.hero-text-section');
    // 패럴랙스 효과 구현
}

// 페이드인 애니메이션
function initFadeInAnimation() {
    const sections = document.querySelectorAll('.section');
    // Intersection Observer로 섹션별 페이드인 효과
}
```

### 📐 반응형 최적화

**태블릿 (1200px 이하)**:
```css
.hero-text-section {
    padding: 50px 0;
    margin-bottom: 60px;
}

.hero-text-content p {
    font-size: 16px;
    line-height: 1.7;
}

.main_title_txt01 {
    font-size: 28px;
}

#container {
    width: calc(100vw - 380px);
    overflow-x: hidden;
}
```

**모바일 (768px 이하)**:
```css
.hero-text-section {
    padding: 40px 0;
    margin-bottom: 40px;
}

.hero-text-content p {
    font-size: 15px;
    line-height: 1.6;
}

.main_title_txt01 {
    font-size: 24px;
}

#container {
    width: 100vw;
    overflow-x: hidden;
}
```

### 🎨 시각적 개선 사항

**1. 콘텐츠 영역 완전 최적화**:
- 좌우 스크롤바 완전 제거
- 화면 너비에 완벽하게 맞는 콘텐츠 표시
- 모든 반응형 단계에서 스크롤바 방지

**2. Hero 섹션 추가**:
- 브랜드 메시지가 담긴 상단 텍스트 섹션
- 우아한 배경색과 여백으로 임팩트 증대
- 반응형 타이포그래피 적용

**3. 메인 콘텐츠 정리**:
- 불필요한 설명칸 제거로 깔끔한 레이아웃
- 제목만 남겨 더욱 임팩트 있는 섹션 헤더
- 콘텐츠 집중도 향상

**4. 헤더 스타일 정리**:
- 모든 구분선 제거로 미니멀한 디자인
- 그림자 효과 제거로 플랫 디자인 구현
- 더욱 깔끔하고 현대적인 사이드바

### 🔧 보수 및 추가 수정 방법

#### 1. Hero 텍스트 변경
**파일**: `/sde_design/skin2/index.html` (라인 8-12)
```html
<section class="hero-text-section">
	<div class="hero-text-content">
		<p>여기에 원하는 텍스트를 입력하세요.<br>
		여러 줄로 나눠서 작성할 수 있습니다.</p>
	</div>
</section>
```

#### 2. Hero 섹션 스타일 변경
**파일**: `/sde_design/skin2/layout/basic/css/main.css`
```css
.hero-text-section {
    background: #your-color; /* 배경색 변경 */
    padding: 80px 0; /* 여백 조정 */
}

.hero-text-content p {
    font-size: 20px; /* 폰트 크기 변경 */
    color: #your-color; /* 텍스트 색상 변경 */
}
```

#### 3. 설명칸 다시 추가
**파일**: `/sde_design/skin2/index.html`
```html
<div class="main_title ez-align-left" data-ez-role="ez-align" data-ez-align="left">
	<div class="main_title_txt01" data-ez-role="title">Top seller</div>
	<div class="main_title_txt02" data-ez-role="subtitle">지금 가장 인기있는</div>
</div>
```

#### 4. 헤더 구분선 다시 추가
**파일**: `/sde_design/skin2/layout/basic/css/sidebar-header.css`
```css
#sidebar-header {
    border-right: 1px solid #e0e0e0;
    box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
}

.sidebar-top-area {
    border-bottom: 1px solid #f0f0f0;
}

.sidebar-logo-area {
    border-top: 1px solid #f0f0f0;
}
```

### ⚠️ 주의사항 (6차 수정)

1. **스크롤바 제거**: `overflow-x: hidden`으로 인해 긴 콘텐츠가 잘릴 수 있으니 확인 필요
2. **Hero 섹션**: 모바일에서 텍스트가 너무 길면 가독성 저하 가능
3. **설명칸 제거**: SEO에 미치는 영향 검토 필요
4. **캐시 이슈**: CSS/JS 파일 변경 후 브라우저 캐시 삭제 필요
5. **반응형 테스트**: 다양한 화면 크기에서 레이아웃 확인 권장

---

## 🔄 5차 수정: 로그인/로그아웃 기능 및 가로 레이아웃 적용 (2025-09-03)

### 📋 5차 작업 개요
- **수정일**: 2025년 9월 3일
- **작업자**: Claude Code
- **작업내용**: 헤더 내부 레이아웃을 수직에서 수평으로 변경 및 로그인 기능 수정
- **변경 범위**: 헤더 HTML 구조 및 CSS 레이아웃 전면 변경

### 🎯 5차 변경 목표
- **로그인 기능**: CAFE24 모듈 태그 적용으로 로그인/로그아웃 상태별 표시
- **레이아웃 변경**: 헤더 내부 요소들을 세로 배치에서 가로 배치로 변경
- **줄바꿈 적용**: 요소가 많을 경우 자동 줄바꿈으로 반응형 대응
- **스크롤 제거**: 헤더 스크롤 완전 제거로 모든 요소가 한 화면에 표시

### 📂 5차 주요 변경 사항

#### 1. sde_design/skin2/layout/basic/header.html 구조 변경
**로그인/로그아웃 기능 수정**:
```html
<!-- 기존 방식 제거 -->
<a data-ez-item="login" module="Layout_statelogoff" href="/member/login.html">Login</a>
<a data-ez-item="logout" module="Layout_stateLogon" href="{$action_logout}" style="display:none;">Logout</a>

<!-- CAFE24 모듈 방식으로 변경 -->
<span module="Layout_statelogoff">
	<a href="/member/login.html">Login</a>
</span>
<span module="Layout_stateLogon">
	<a href="{$action_logout}">Logout</a>
	<a href="/myshop/index.html">My</a>
</span>
```

**가로 나열 구조로 변경**:
```html
<!-- 기존 ul/li 구조 제거 -->
<ul>
	<li><a href="/">Shop</a></li>
	<li><a href="/member/login.html">Login</a></li>
</ul>

<!-- 직접 a 태그 가로 배치로 변경 -->
<nav class="service-nav">
	<a href="/">Shop</a>
	<a href="/member/login.html">Login</a>
	<a href="/myshop/index.html">My</a>
</nav>
```

#### 2. sde_design/skin2/layout/basic/css/sidebar-header.css 대폭 수정
**서비스 네비게이션 Flexbox 레이아웃**:
```css
/* 기존 수직 레이아웃 제거 */
.service-nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.service-nav ul li {
    margin-bottom: 15px;
}

/* Flexbox 가로 레이아웃으로 변경 */
.service-nav {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    align-items: center;
}

.service-nav a {
    font-family: 'Switzer', 'Nanum Square', sans-serif;
    font-size: 18px;
    font-weight: 500;
    color: #333;
    padding: 8px 12px;
    white-space: nowrap;
}

.service-nav span {
    display: contents;
}
```

**카테고리 네비게이션 Flexbox 레이아웃**:
```css
/* 기존 수직 레이아웃 제거 */
.category-nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.category-nav ul li {
    margin-bottom: 20px;
}

/* Flexbox 가로 레이아웃으로 변경 */
.category-nav {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    align-items: center;
}

.category-nav a {
    font-family: 'Switzer', 'Nanum Square', sans-serif;
    font-size: 22px;
    font-weight: 400;
    color: #333;
    padding: 12px 16px;
    border-bottom: 2px solid transparent;
    white-space: nowrap;
}

.category-nav a:hover {
    transform: translateY(-2px); /* 위로 살짝 이동 효과 */
}
```

**헤더 스크롤 제거**:
```css
#sidebar-header {
    overflow-y: hidden; /* auto에서 hidden으로 변경 */
}
```

#### 3. sde_design/skin2/layout/basic/js/sidebar-header.js 업데이트
**드롭다운 메뉴 JavaScript 수정**:
```javascript
// 기존 서브메뉴 방식 제거
function initSubMenu() {
    const customCareLink = document.querySelector('.service-nav a[data-ez-item="board"]');
    const subMenu = document.querySelector('.service-nav .sub-menu');
    // ...
}

// 드롭다운 방식으로 변경
function initDropdownMenu() {
    const customCareDropdown = document.querySelector('.custom-care-dropdown');
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    
    // 클릭으로 드롭다운 토글 (모바일 대응)
    dropdownToggle.addEventListener('click', function(e) {
        e.preventDefault();
        const isOpen = dropdownMenu.style.display === 'block';
        dropdownMenu.style.display = isOpen ? 'none' : 'block';
    });
}
```

### 📐 레이아웃 변화 비교

**변경 전 (수직 배치)**:
```
┌─────────────────┐
│ Shop            │
│ Login           │
│ My              │
│ Custom Care     │
├─────────────────┤
│ New arrivals    │
│ Best            │
│ Outers          │
│ Tops            │
│ Bottoms         │
│ Accessories     │
├─────────────────┤
│ [Logo]          │
└─────────────────┘
```

**변경 후 (수평 배치)**:
```
┌─────────────────┐
│ Shop Login My   │
│ Custom Care     │
├─────────────────┤
│ New arrivals    │
│ Best Outers     │
│ Tops Bottoms    │
│ Accessories     │
├─────────────────┤
│ [Logo]          │
└─────────────────┘
```

### 🎨 시각적 개선 사항

**1. 공간 효율성 대폭 증대**:
- 세로 스크롤 제거로 모든 요소가 한 화면에 표시
- 가로 공간 활용으로 더 많은 정보를 컴팩트하게 배치
- 450px 헤더 폭을 최대한 활용

**2. 사용자 경험 개선**:
- 스크롤 없이 모든 메뉴에 즉시 접근 가능
- flex-wrap으로 화면 크기에 따른 자동 줄바꿈
- 호버 효과 차별화 (위로 이동 vs 옆으로 이동)

**3. 모던한 인터페이스**:
- flexbox 기반의 최신 레이아웃 방식
- 깔끔한 간격 및 패딩 조정
- 반응형 친화적 구조

### 🔧 보수 및 추가 수정 방법

#### 1. 로그인 버튼 스타일 변경
**파일**: `/sde_design/skin2/layout/basic/css/sidebar-header.css`
```css
.service-nav span[module="Layout_statelogoff"] a {
    background: #007bff;
    color: white;
    border-radius: 4px;
}

.service-nav span[module="Layout_stateLogon"] a {
    color: #dc3545; /* 로그아웃은 빨간색 */
}
```

#### 2. 가로 배치 간격 조정
```css
.service-nav {
    gap: 30px; /* 20px에서 30px로 증가 */
}

.category-nav {
    gap: 20px; /* 24px에서 20px로 감소 */
}
```

#### 3. 수직 배치로 되돌리기
**HTML 구조 복원**:
```html
<nav class="service-nav">
    <ul>
        <li><a href="/">Shop</a></li>
        <li><a href="/member/login.html">Login</a></li>
    </ul>
</nav>
```

**CSS 복원**:
```css
.service-nav {
    display: block; /* flex에서 block으로 */
}

.service-nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.service-nav ul li {
    margin-bottom: 15px;
}
```

### ⚠️ 주의사항 (5차 수정)

1. **CAFE24 모듈**: `Layout_statelogoff/Layout_stateLogon` 모듈이 정상 작동하는지 확인 필요
2. **줄바꿈**: 메뉴 항목이 많을 경우 줄바꿈으로 인한 레이아웃 변화 고려
3. **모바일 대응**: 작은 화면에서 가로 배치가 적절한지 확인 필요
4. **브라우저 호환성**: flexbox 지원이 제한된 구형 브라우저 고려
5. **접근성**: 키보드 네비게이션 및 스크린 리더 호환성 확인

---

## 🔄 4차 수정: 헤더 폭 확대 및 콘텐츠 최적화 (2025-09-02 18:30)

### 📋 4차 작업 개요
- **수정일**: 2025년 9월 2일 18:30 (KST)
- **작업자**: Claude Code
- **작업내용**: 좌측 고정 헤더 폭을 50% 이상 확대하고 콘텐츠 영역 최적화
- **변경 범위**: 헤더 크기 및 반응형 레이아웃 전체 조정

### 🎯 4차 변경 목표
- **헤더 폭 확대**: 280px → 450px (61% 증가)
- **콘텐츠 최적화**: 헤더를 제외한 화면에 딱 맞는 가로폭 설정
- **반응형 개선**: 다양한 화면 크기에 맞는 브레이크포인트 재조정
- **사용성 향상**: 더 넓은 공간을 활용한 폰트 크기 및 여백 최적화

### 📂 4차 주요 변경 사항

#### sde_design/skin2/layout/basic/css/sidebar-header.css 대폭 수정

**1. 헤더 폭 확대**:
```css
/* 기존 */
#sidebar-header {
    width: 280px;
}
body {
    margin-left: 280px;
}

/* 변경 후 */
#sidebar-header {
    width: 450px;
}
body {
    margin-left: 450px;
}
```

**2. 콘텐츠 영역 최적화**:
```css
#container {
    max-width: calc(100vw - 450px);
}

#contents {
    padding: 20px;
    max-width: 100%;
    box-sizing: border-box;
}
```

**3. 폰트 크기 및 여백 증대**:
- 서비스 메뉴 폰트: 16px → 18px
- 카테고리 메뉴 폰트: 18px → 22px
- 패딩: 20px → 30px (상하좌우)
- 로고 최대 크기: 120px → 160px

**4. 반응형 브레이크포인트 재조정**:

**데스크탑 (1201px 이상)**:
- 헤더: 450px
- 콘텐츠: calc(100vw - 450px)

**태블릿 (769px - 1200px)**:
```css
#sidebar-header { width: 380px; }
body { margin-left: 380px; }
#container { max-width: calc(100vw - 380px); }
```

**모바일 (768px 이하)**:
```css
#sidebar-header { width: 320px; }
body { margin-left: 0; }
#container { max-width: 100vw; }
```

### 📐 화면 크기별 헤더 폭 비교

| 화면 크기 | 기존 헤더 폭 | 새 헤더 폭 | 증가율 |
|-----------|-------------|------------|--------|
| 데스크탑  | 280px       | 450px      | +61%   |
| 태블릿    | 260px       | 380px      | +46%   |
| 모바일    | 슬라이드    | 320px      | -      |

### 🎨 시각적 개선 사항

**폰트 크기 확대**:
- 더 읽기 쉬운 서비스 메뉴 (18px)
- 임팩트 있는 카테고리 메뉴 (22px)
- 더 큰 로고 표시 (160px)

**여백 및 패딩 최적화**:
- 상하 패딩: 30px → 40px
- 좌우 패딩: 20px → 30px
- 메뉴 간격 확대

**콘텐츠 영역 최적화**:
- 화면 너비에서 헤더 폭을 정확히 제외한 최대 너비 설정
- box-sizing: border-box로 패딩 포함 계산

---

## 🔄 3차 수정: 좌측 고정 헤더 레이아웃 변경 (2025-09-02 18:00)

### 📋 3차 작업 개요
- **수정일**: 2025년 9월 2일 18:00 (KST)
- **작업자**: Claude Code  
- **작업내용**: 기존 상단 헤더를 좌측 고정형 사이드바 헤더로 완전 변경
- **변경 범위**: SKIN2 헤더 레이아웃 전체 재구성

### 🎯 3차 변경 목표
- **레이아웃**: 상단 헤더 → 좌측 고정 사이드바로 변경
- **고정 효과**: 스크롤 시 헤더 고정, 콘텐츠 영역만 스크롤
- **메뉴 간소화**: 필요한 항목만 유지하여 깔끔한 네비게이션 구성
- **반응형**: 모바일에서 햄버거 메뉴로 전환

### 📂 3차 수정 파일

#### 1. sde_design/skin2/layout/basic/header.html (대폭 수정)
**변경 내용**: 전체 헤더 구조를 좌측 고정형으로 재구성

**새로운 구조**:
```html
<!-- 기존 복잡한 헤더 구조 제거 -->
<!-- 새로운 3단계 구조 -->
<header id="sidebar-header" class="sidebar-fixed">
    <!-- 1. Top Area: 서비스 관련 항목 -->
    <div class="sidebar-top-area">
        - Shop (메인 페이지)
        - Login (로그인)
        - My (마이페이지)
        - Custom Care (고객센터)
    </div>
    
    <!-- 2. Category Area: 상품 카테고리 -->
    <div class="sidebar-category-area">
        - New arrivals
        - Best
        - Outers
        - Tops
        - Bottoms
        - Accessories
    </div>
    
    <!-- 3. Logo Area: 브랜드 로고 -->
    <div class="sidebar-logo-area">
        - 로고 이미지 (/logo.png)
    </div>
</header>
```

**제거된 항목들**:
- 회원가입, 내정보수정, 주문조회, 최근본상품
- 상단 배너, 쇼핑정보, 장바구니/검색 아이콘
- 기존 복잡한 네비게이션 구조

#### 2. sde_design/skin2/layout/basic/css/sidebar-header.css (새로 생성)
**작업 내용**: 좌측 고정 헤더 전용 스타일링

**핵심 스타일**:
```css
/* 좌측 고정 포지션 */
#sidebar-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 280px;
    height: 100vh;
    z-index: 1000;
}

/* 콘텐츠 영역 여백 */
body {
    margin-left: 280px;
}

/* 반응형 모바일 대응 */
@media screen and (max-width: 768px) {
    #sidebar-header {
        transform: translateX(-100%);
    }
    body {
        margin-left: 0;
    }
}
```

#### 3. sde_design/skin2/layout/basic/js/sidebar-header.js (새로 생성)
**작업 내용**: 모바일 반응형 및 인터랙션 JavaScript

**주요 기능**:
- 모바일 햄버거 메뉴 토글
- 서브메뉴(Custom Care) 토글
- 현재 페이지 활성화 표시
- 스크롤 효과

#### 4. sde_design/skin2/layout/basic/layout.html (CSS/JS 포함)
**추가된 내용**:
```html
<!--@css(/layout/basic/css/sidebar-header.css)-->
<!--@js(/layout/basic/js/sidebar-header.js)-->
```

### 🔧 보수 및 추가 수정 방법

#### 1. 헤더 너비 변경
**파일**: `/sde_design/skin2/layout/basic/css/sidebar-header.css`

```css
/* 헤더 너비 변경 시 */
#sidebar-header {
    width: 320px; /* 원하는 너비로 변경 */
}

body {
    margin-left: 320px; /* 동일한 값으로 변경 */
}

/* 태블릿 반응형도 함께 수정 */
@media screen and (max-width: 1024px) {
    #sidebar-header {
        width: 300px;
    }
    body {
        margin-left: 300px;
    }
}
```

#### 2. 메뉴 항목 추가/삭제
**파일**: `/sde_design/skin2/layout/basic/header.html`

**서비스 메뉴 추가**:
```html
<nav class="service-nav">
    <ul>
        <li><a href="/">Shop</a></li>
        <li><a href="/member/login.html">Login</a></li>
        <li><a href="/myshop/index.html">My</a></li>
        <!-- 새 메뉴 추가 -->
        <li><a href="/notice/list.html">Notice</a></li>
    </ul>
</nav>
```

**카테고리 메뉴 수정**:
```html
<nav class="category-nav">
    <ul>
        <li><a href="/product/list.html?module=product_listmain_1">New arrivals</a></li>
        <li><a href="/product/list.html?best=true">Best</a></li>
        <!-- 새 카테고리 추가 -->
        <li><a href="/product/list.html?cate_no=5">Sale</a></li>
    </ul>
</nav>
```

#### 3. 로고 변경
**파일**: `/sde_design/skin2/layout/basic/header.html`

```html
<div class="sidebar-logo">
    <a href="/">
        <!-- 로고 경로 변경 -->
        <img src="/web/upload/logo/new-logo.png" alt="{$mall_name}" />
    </a>
</div>
```

#### 4. 모바일 메뉴 동작 커스터마이징
**파일**: `/sde_design/skin2/layout/basic/js/sidebar-header.js`

햄버거 버튼 스타일 변경, 애니메이션 효과 조정 가능

#### 5. 기존 상단 헤더로 되돌리기
1. **header.html**: base 폴더의 원본 파일로 복원
2. **CSS 파일**: sidebar-header.css 제거
3. **JS 파일**: sidebar-header.js 제거  
4. **layout.html**: CSS/JS 포함 부분 제거

### ⚠️ 주의사항 (3차 수정)

1. **콘텐츠 여백**: 헤더 너비 변경 시 body의 margin-left 값도 반드시 함께 수정
2. **모바일 테스트**: 768px 이하에서 햄버거 메뉴 정상 작동 확인 필요
3. **기존 기능**: 로그인/로그아웃, 장바구니 등 CAFE24 기본 기능은 유지됨
4. **SEO**: 헤더 구조 변경으로 인한 검색 엔진 최적화 영향 검토 필요
5. **브라우저 호환성**: IE11 이하 브라우저에서는 일부 CSS 속성 지원 제한

### 🎯 레이아웃 변경 효과
- **사용성 개선**: 좌측 고정으로 네비게이션 접근성 향상
- **공간 활용**: 상단 공간 확보로 콘텐츠 영역 확대
- **모던 디자인**: 최신 웹 트렌드에 맞는 사이드바 네비게이션
- **모바일 최적화**: 반응형 햄버거 메뉴로 모바일 UX 개선

---

## 🔄 2차 수정: 헤더 네비게이션 영문화 (2025-09-02 17:30)

### 📋 2차 작업 개요
- **수정일**: 2025년 9월 2일 17:30 (KST)
- **작업자**: Claude Code
- **작업내용**: SKIN2 헤더 네비게이션을 한글에서 영문으로 변경 및 카테고리 간소화
- **변경 범위**: SKIN2 헤더 메뉴만 적용

### 🎯 2차 변경 목표
- **카테고리 개수**: 8개 → 4개로 축소
- **언어**: 한글 → 영문으로 변경
- **메뉴 방식**: 동적 → 정적으로 변경

### 📂 2차 수정 파일

#### sde_design/skin2/layout/basic/header.html (새로 생성)
**작업 방법**: base/layout/basic/header.html을 복사 후 수정

**변경된 카테고리 매핑**:
```
기존 (8개 한글):
- 상의 → 제거
- 하의 → 제거  
- 아우터 → 제거
- 신발 → 제거
- 가방 → 제거
- 악세서리 → 제거
- 언더웨어/잠옷 → 제거
- 기타 → 제거

신규 (4개 영문):
- Top (상의) → /product/list.html?cate_no=1
- Bottom (하의) → /product/list.html?cate_no=2
- Outer (아우터) → /product/list.html?cate_no=3
- Accessories (악세서리) → /product/list.html?cate_no=4
```

### 🔧 보수 및 추가 수정 방법

#### 1. 카테고리 추가/삭제 방법
**파일 위치**: `/sde_design/skin2/layout/basic/header.html` (라인 75-80)

**카테고리 추가**:
```html
<ul>
    <li><a href="/product/list.html?cate_no=1">Top</a></li>
    <li><a href="/product/list.html?cate_no=2">Bottom</a></li>
    <li><a href="/product/list.html?cate_no=3">Outer</a></li>
    <li><a href="/product/list.html?cate_no=4">Accessories</a></li>
    <!-- 새 카테고리 추가 예시 -->
    <li><a href="/product/list.html?cate_no=5">Shoes</a></li>
</ul>
```

**카테고리 삭제**: 해당 `<li>` 태그 전체를 삭제

#### 2. 카테고리 URL 변경 방법
실제 CAFE24 관리자에서 설정한 카테고리 번호에 맞게 `cate_no=숫자` 부분을 수정:

```html
<!-- 예시: 카테고리 번호가 다를 경우 -->
<li><a href="/product/list.html?cate_no=101">Top</a></li>
<li><a href="/product/list.html?cate_no=102">Bottom</a></li>
```

#### 3. 카테고리명 변경 방법
**영문 변경**: 태그 안의 텍스트만 수정
```html
<li><a href="/product/list.html?cate_no=1">Tops</a></li>  <!-- Top → Tops -->
```

**한글로 되돌리기**: 
```html
<li><a href="/product/list.html?cate_no=1">상의</a></li>
```

#### 4. 동적 메뉴로 되돌리기
전체 카테고리 div를 원래대로 변경:
```html
<div module="Layout_category" class="top_category">
    <!--@js(/js/module/layout/category.js)-->
    <ul>
        <li><a href="{$link_product_list}">{$name_or_img_tag}</a></li>
        <li><a href="{$link_product_list}">{$name_or_img_tag}</a></li>
    </ul>
</div>
```

#### 5. 카테고리 스타일링 변경
**CSS 파일**: `/sde_design/skin2/layout/basic/css/` 폴더에 새 CSS 파일 생성 또는 기존 파일 수정

**예시**:
```css
.top_category ul li a {
    font-family: 'Switzer', sans-serif;
    font-weight: 500;
    color: #333;
    text-transform: uppercase; /* 영문 대문자 변환 */
}

.top_category ul li a:hover {
    color: #000;
    font-weight: 600;
}
```

### ⚠️ 주의사항 (2차 수정)
1. **카테고리 번호**: 실제 CAFE24 관리자에서 생성한 카테고리 번호와 일치해야 함
2. **링크 테스트**: 각 카테고리 링크가 올바른 페이지로 연결되는지 확인 필요
3. **SEO 고려**: 영문 카테고리명이 검색 엔진 최적화에 미치는 영향 검토 필요
4. **사용자 경험**: 기존 한글 사용자들의 혼란 최소화 방안 고려

---

## 🔄 1차 수정: 폰트 변경 (2025-09-02 17:00)

### 📋 1차 작업 개요
- **작업일**: 2025년 9월 2일
- **작업자**: Claude Code
- **작업내용**: SKIN2 전용 폰트를 Switzer(영문) 및 나눔스퀘어(국문)로 변경
- **변경 범위**: SKIN2만 적용 (다른 스킨은 기존 폰트 유지)

## 🎯 변경 목표
- **영문 폰트**: Switzer
- **국문 폰트**: 나눔스퀘어 (Nanum Square)
- **적용 범위**: SKIN2의 모든 페이지

## 📂 수정된 파일 목록

### 1. sde_design/skin2/layout/basic/layout.html (새로 생성)
**파일 위치**: `/sde_design/skin2/layout/basic/layout.html`
**작업 내용**: base layout을 복사하여 skin2 전용 layout 생성
**수정 라인**: 33-36, 51-57

#### 변경 내용:
- **기존 폰트 제거**:
  - Montserrat + Noto Sans KR
  - Spoqa Han Sans Neo
  - Open Sans
  - Nanum Gothic + Red Hat Display
- **새로운 폰트 추가**:
  - Nanum Square (400, 700, 800, 900 weight)
  - Switzer (전체 weight)

#### 구체적 변경:
```html
<!-- 변경 전 -->
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet">
<link href='//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css' rel='stylesheet' type='text/css'>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&family=Red+Hat+Display:wght@400;500;700&display=swap" rel="stylesheet">

<!-- 변경 후 (skin2 전용) -->
<!-- skin2 전용 폰트: Switzer(영문) + 나눔스퀘어(국문) -->
<link href="https://fonts.googleapis.com/css2?family=Nanum+Square:wght@400;700;800;900&display=swap" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/@fontsource/switzer@5.0.9/index.css" rel="stylesheet">
```

#### 테마 설정 변경 (모든 테마를 Switzer + 나눔스퀘어로 통일):
```html
<!-- MODERN 테마 (theme01) -->
data-font="Switzer, Nanum Square"
data-font-css="https://cdn.jsdelivr.net/npm/@fontsource/switzer@5.0.9/index.css"

<!-- SOFT 테마 (theme02) -->
data-font="Switzer, Nanum Square"
data-font-css="https://cdn.jsdelivr.net/npm/@fontsource/switzer@5.0.9/index.css"

<!-- BREEZY 테마 (theme03) -->
data-font="Switzer, Nanum Square"
data-font-css="https://cdn.jsdelivr.net/npm/@fontsource/switzer@5.0.9/index.css"

<!-- FRESH 테마 (theme04) -->
data-font="Switzer, Nanum Square"
data-font-css="https://cdn.jsdelivr.net/npm/@fontsource/switzer@5.0.9/index.css"
```

### 2. sde_design/skin2/layout/basic/css/font.css (새로 생성)
**파일 위치**: `/sde_design/skin2/layout/basic/css/font.css`
**작업 내용**: skin2 전용 폰트 스타일 정의

### 3. sde_design/skin2/layout/basic/header.html (새로 생성)
**파일 위치**: `/sde_design/skin2/layout/basic/header.html`
**작업 내용**: base header를 복사하여 skin2 전용 헤더 생성
**수정 라인**: 72-82

#### 변경 내용:
- **기존**: 동적 카테고리 메뉴 (한글)
  - '상의', '하의', '아우터', '신발', '가방', '악세서리', '언더웨어/잠옷', '기타'
- **변경**: 정적 영문 카테고리 메뉴 (4개로 축소)
  - Top, Bottom, Outer, Accessories

#### 구체적 변경:
```html
<!-- 변경 전 -->
<div module="Layout_category" class="top_category">
    <!--@js(/js/module/layout/category.js)-->
    <ul>
        <li><a href="{$link_product_list}">{$name_or_img_tag}</a></li>
        <li><a href="{$link_product_list}">{$name_or_img_tag}</a></li>
    </ul>
</div>

<!-- 변경 후 (SKIN2 전용) -->
<div class="top_category">
    <!-- SKIN2 전용 영문 카테고리 메뉴 -->
    <ul>
        <li><a href="/product/list.html?cate_no=1">Top</a></li>
        <li><a href="/product/list.html?cate_no=2">Bottom</a></li>
        <li><a href="/product/list.html?cate_no=3">Outer</a></li>
        <li><a href="/product/list.html?cate_no=4">Accessories</a></li>
    </ul>
</div>
```

#### 카테고리 매핑:
- **Top** (상의) → `/product/list.html?cate_no=1`
- **Bottom** (하의) → `/product/list.html?cate_no=2`  
- **Outer** (아우터) → `/product/list.html?cate_no=3`
- **Accessories** (악세서리) → `/product/list.html?cate_no=4`

#### 주요 스타일:
```css
/* 기본 body 폰트 설정 */
body {
    font-family: 'Switzer', 'Nanum Square', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
    font-weight: 400;
    line-height: 1.6;
}

/* 제목 폰트 */
h1, h2, h3, h4, h5, h6 {
    font-family: 'Switzer', 'Nanum Square', sans-serif;
    font-weight: 700;
}

/* 한글 우선 적용 */
.korean-priority {
    font-family: 'Nanum Square', 'Switzer', sans-serif;
}

/* 영문 우선 적용 */
.english-priority {
    font-family: 'Switzer', sans-serif;
}
```

## 🎨 폰트 적용 방법 및 설정 가이드

### SKIN2에서 폰트 적용 방법:

#### 1. 자동 적용 (권장):
`/sde_design/skin2/layout/basic/css/font.css` 파일이 자동으로 로드되므로 별도 설정 불필요

#### 2. HTML 클래스 사용:
```html
<!-- 한글 우선 표시 -->
<div class="korean-priority">한글 텍스트가 우선 적용됩니다</div>

<!-- 영문 우선 표시 -->
<div class="english-priority">English text with Switzer font</div>

<!-- 폰트 굵기 조절 -->
<span class="font-bold">굵은 텍스트</span>
<span class="font-medium">중간 굵기</span>
```

#### 3. 커스텀 CSS 추가 (필요시):
```css
.product-title {
    font-family: 'Switzer', 'Nanum Square', sans-serif;
    font-weight: 700;
}

.price-display {
    font-family: 'Switzer', sans-serif;
    font-weight: 600;
}
```

### 폰트 weight 가이드:

#### Switzer 폰트:
- Thin: 100
- ExtraLight: 200
- Light: 300
- Regular: 400
- Medium: 500
- SemiBold: 600
- Bold: 700
- ExtraBold: 800
- Black: 900

#### 나눔스퀘어 폰트:
- Regular: 400
- Bold: 700
- ExtraBold: 800
- Heavy: 900

## 📍 SKIN2 설정 위치 상세 안내

### 1. SKIN2 메인 레이아웃 설정
- **위치**: `/sde_design/skin2/layout/basic/layout.html`
- **적용 범위**: SKIN2의 모든 페이지
- **수정 방법**: `<head>` 태그 내 폰트 링크 및 CSS 포함

### 2. SKIN2 폰트 스타일 설정
- **위치**: `/sde_design/skin2/layout/basic/css/font.css`
- **적용 범위**: SKIN2 전체
- **내용**: 폰트 패밀리 정의, 클래스별 스타일, 반응형 설정

### 3. 테마별 폰트 설정 (SKIN2 전용)
- **위치**: `/sde_design/skin2/layout/basic/layout.html` 내 `<script type="text/ez-prop">` 섹션
- **적용 방법**: 모든 테마가 `Switzer, Nanum Square`로 통일
- **영향 범위**: SKIN2에서 선택된 테마

## ⚡ 긴급 수정이 필요한 경우

### 1. 폰트 로딩 실패 시:
```html
<!-- 대체 폰트 설정 -->
<style>
* {
    font-family: 'Switzer', 'Nanum Square', 'Noto Sans KR', 'Malgun Gothic', '맑은 고딕', sans-serif !important;
}
</style>
```

### 2. 특정 페이지만 다른 폰트 적용:
- 해당 페이지의 HTML 파일 `<head>` 섹션에 개별적으로 폰트 링크 추가

### 3. 폰트 로딩 속도 개선:
```html
<!-- 폰트 미리 로딩 -->
<link rel="preload" href="https://fonts.googleapis.com/css2?family=Nanum+Square:wght@400;700;800;900&display=swap" as="style">
<link rel="preload" href="https://cdn.jsdelivr.net/npm/@fontsource/switzer@5.0.9/index.css" as="style">
```

## 🚨 주의사항

1. **CAFE24 모듈 태그 준수**: 모든 수정 사항은 CAFE24 모듈 태그 규칙을 준수하여 작성됨
2. **SKIN2 전용 적용**: 다른 스킨(skin1, base, mobile)은 기존 폰트 유지
3. **캐시 이슈**: 폰트 변경 후 브라우저 캐시 삭제 필요
4. **디렉토리 구조**: SKIN2에 새로운 layout 디렉토리 생성됨
5. **백업**: 기존 파일 백업 후 업로드 권장

## 📱 SKIN2 적용 범위

- **PC 버전**: `/sde_design/skin2/`의 모든 페이지
- **모바일 버전**: SKIN2 사용 시 PC와 동일한 폰트 적용
- **다른 스킨**: 기존 폰트 설정 그대로 유지
- **테마 변경**: SKIN2 내 모든 테마가 동일한 폰트 사용

## ✅ 최종 업로드 체크리스트 (SKIN2 전용)

### 1차 수정 (폰트 변경):
1. ✅ `sde_design/skin2/layout/basic/layout.html` (폰트 설정 + 추가 CSS/JS 포함)
2. ✅ `sde_design/skin2/layout/basic/css/font.css` (폰트 스타일)

### 2차 수정 (네비게이션 영문화):
3. 🔄 `sde_design/skin2/layout/basic/header.html` (네비게이션 변경 → 좌측 고정형으로 대폭 수정)

### 3차 수정 (좌측 고정 헤더):
4. 🔄 `sde_design/skin2/layout/basic/css/sidebar-header.css` (좌측 고정 헤더 스타일 → 4차에서 폭 확대)
5. 🆕 `sde_design/skin2/layout/basic/js/sidebar-header.js` (모바일 반응형 JavaScript)

### 4차 수정 (헤더 폭 확대):
6. ✅ `sde_design/skin2/layout/basic/css/sidebar-header.css` (헤더 450px 확대, 반응형 개선)

### 📤 서버 업로드 순서 권장:
1. **1단계**: layout.html + font.css (폰트 적용)
2. **2단계**: sidebar-header.css + sidebar-header.js (좌측 헤더 스타일 및 스크립트)
3. **3단계**: header.html (좌측 고정 헤더 적용)
4. **확인**: 각 단계별로 웹사이트에서 정상 작동 확인

### 🔍 업로드 후 확인사항:

#### 기본 기능 확인:
- [ ] 폰트가 Switzer + 나눔스퀘어로 적용되었는지 확인
- [ ] 서비스 메뉴 4개(Shop, Login, My, Custom Care)가 상단에 표시되는지 확인
- [ ] 카테고리 6개(New arrivals, Best, Outers, Tops, Bottoms, Accessories)가 중앙에 표시되는지 확인
- [ ] 하단에 로고가 표시되고 클릭 시 메인페이지로 이동하는지 확인

#### 헤더 크기 및 레이아웃 확인:
- [ ] **데스크탑**: 헤더가 좌측에 고정되어 표시되는지 확인 (450px 너비)
- [ ] **데스크탑**: 콘텐츠 영역이 좌측 여백(margin-left: 450px)을 가지고 있는지 확인
- [ ] **태블릿** (1200px 이하): 헤더 너비가 380px로 축소되는지 확인
- [ ] **모바일** (768px 이하): 햄버거 메뉴로 전환되고 너비가 320px인지 확인

#### 반응형 및 인터랙션 확인:
- [ ] 스크롤 시 헤더는 고정되고 콘텐츠만 스크롤되는지 확인
- [ ] 콘텐츠 영역이 화면에서 헤더를 제외한 공간을 완전히 활용하는지 확인
- [ ] 모바일에서 햄버거 버튼 클릭 시 사이드바가 슬라이드되는지 확인
- [ ] 다양한 화면 크기에서 헤더와 콘텐츠가 겹치지 않는지 확인

#### 폰트 및 디자인 확인:
- [ ] 서비스 메뉴 폰트 크기가 18px로 표시되는지 확인
- [ ] 카테고리 메뉴 폰트 크기가 22px로 표시되는지 확인
- [ ] 로고 크기가 적절히 크게 표시되는지 확인 (최대 160px)

## 🔧 추후 작업 권장사항

1. **CSS 세부 조정**: 필요에 따라 `font.css` 파일에 추가 스타일 정의
2. **폰트 최적화**: 사용하지 않는 font-weight 제거하여 로딩 속도 개선
3. **SKIN2 테스트**: 다양한 페이지에서 폰트 및 네비게이션 확인
4. **카테고리 URL 매핑**: 실제 카테고리 번호에 맞게 URL 조정
5. **다른 스킨 적용**: 필요시 skin1, mobile에도 동일한 방식으로 적용 가능

## 🎯 SKIN2 전용 작업 완료

✅ **SKIN2만 선택적 적용 완료**
- 다른 스킨들은 기존 설정 유지
- SKIN2 전용 layout.html, header.html 생성
- 전용 CSS 파일로 스타일 관리
- 헤더 네비게이션 영문화 및 간소화

## 📝 주요 변경사항 요약

### 폰트 변경:
- Switzer (영문) + 나눔스퀘어 (국문) 적용

### 네비게이션 변경:
- 기존 8개 → 4개 카테고리로 축소
- 한글 → 영문으로 변경
- 동적 → 정적 메뉴로 변경

---
**최종 수정 시간**: 2025-09-02 17:30 (KST)
**총 수정 파일**: 3개 (신규 생성)
**적용 범위**: SKIN2만 적용