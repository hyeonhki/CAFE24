# CAFE24 SKIN2 커스터마이징 작업 - Action Log

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
4. 🆕 `sde_design/skin2/layout/basic/css/sidebar-header.css` (좌측 고정 헤더 스타일)
5. 🆕 `sde_design/skin2/layout/basic/js/sidebar-header.js` (모바일 반응형 JavaScript)

### 📤 서버 업로드 순서 권장:
1. **1단계**: layout.html + font.css (폰트 적용)
2. **2단계**: sidebar-header.css + sidebar-header.js (좌측 헤더 스타일 및 스크립트)
3. **3단계**: header.html (좌측 고정 헤더 적용)
4. **확인**: 각 단계별로 웹사이트에서 정상 작동 확인

### 🔍 업로드 후 확인사항:
- [ ] 폰트가 Switzer + 나눔스퀘어로 적용되었는지 확인
- [ ] 헤더가 좌측에 고정되어 표시되는지 확인 (280px 너비)
- [ ] 콘텐츠 영역이 좌측 여백(margin-left: 280px)을 가지고 있는지 확인
- [ ] 스크롤 시 헤더는 고정되고 콘텐츠만 스크롤되는지 확인
- [ ] 서비스 메뉴 4개(Shop, Login, My, Custom Care)가 상단에 표시되는지 확인
- [ ] 카테고리 6개(New arrivals, Best, Outers, Tops, Bottoms, Accessories)가 중앙에 표시되는지 확인
- [ ] 하단에 로고가 표시되고 클릭 시 메인페이지로 이동하는지 확인
- [ ] 모바일(768px 이하)에서 햄버거 메뉴로 전환되는지 확인
- [ ] 모바일에서 햄버거 버튼 클릭 시 사이드바가 슬라이드되는지 확인

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