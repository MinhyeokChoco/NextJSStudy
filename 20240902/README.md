# NextJS

> vercel 이라는 미국의 클라우드 컴퓨팅 회사에서 만들었다.
> 생태계가 엄청 크고 프론트엔드에서 제일 사용성이 많음, 프론트엔드 프레임워크 중 최고, 인기가 엄청 많다.
> 오픈소스로 배포중
> react의 확장 프레임워크
> 벨로그나 카카오 등등 대기업에서 다 사용중이다.
> react로 개발을 할 때 더 확장된 편한 기능을 제공한다. (페이지 라우팅, 최적화 등)

## NextJS의 라우팅
1. Page Router
2. App Router

## NextJS의 CSR, SSR, pre-render
> 브라우저에서 요청을 받으면 HTML을 완성해서 응답해주는 방식
> CSR의 단점을 극복한 것
> 브라우저 -> 서버 -> 서버에서 HTML 완성 -> 브라우저로 응답 : SSR
> CSR은 JS를 읽어서 동적으로 생성해서 렌더링을 해주는 구조
> CSR은 최초 진입 후 페이지의 이동이 무척 빠르지만 대신 초기 로딩이 느리다.
> NextJS가 초기 로딩이 느린 단점을 보완했다.
- CSR : 브라우저 -> 서버 -> 빈 HTML root 태그 있는 index.html -> 브라우저 -> 브라우저에 bundle.js
            -> 브라우저에서 js를 실행해서 컨텐츠를 동적으로 생성(빈 HTML을 받아서 보여주고 JS를 받아서
            동적으로 렌더링을 하는 과정이 오래 걸린다.)
- pre-render : CSR과 SSR을 적절히 조화, CSR의 초기 로딩이 느린 단점을 보완했고, 페이지의 이동은 빠르게 함

## NextJS의 pre-render
> 브라우저 -> 서버 -> 서버측에서 js를 실행해서 동적으로 HTML을 완성 -> 브라우저(완성된 화면이 보이는 상태)
    -> 서버에서 브라우저에게 bundle.js 받고 (상호작용) (hydration 개념) ->
    브라우저(CSR로 처리, 페이지의 이동의 이점)

### CSR
> 자바스크립트를 사용해서 브라우저에 렌더링을 하는 것, 동적으로 생성하는걸 브라우저에서 처리한다.
> 부드럽게 화면 이동을 할 수 있다는 점이 장점이다.
> 그러나 SSR보다 속도가 느리다는게 단점이다.
> 이런 단점을 극복한게 NextJS이다.

### SSR
> 서버에서 완전히 페이지를 렌더링 한 후 브라우저에게 전달 해주면, 브라우저에서 응답을 받아서 렌더링 처리를 한다.
> CSR에 비해 서버에서 모든걸 처리 후 완성된 HTML을 응답해주기 때문에 브라우저 렌더 속도가 빠르다.

### NextJS 설치

```sh
npx create-next-app 폴더이름
npx create-next-app myapp

Need to install the following packages:
create-next-app@14.2.7
Ok to proceed? (y) : y

✔ Would you like to use TypeScript? … No / Yes : Yes
✔ Would you like to use ESLint? … No / Yes : Yes
✔ Would you like to use Tailwind CSS? … No / Yes : Yes
✔ Would you like to use `src/` directory? … No / Yes : Yes
✔ Would you like to use App Router? (recommended) … No / Yes : Yes
✔ Would you like to customize the default import alias (@/*)? … No / Yes : No
```

### src
1. page.tsx : 페이지를 담당하는 파일
2. layout.tsx : 레이아웃을 담당하는 파일

```sh
npm run dev
```

page.tsx : 우리가 보는 페이지 단위
layout.tsx : 레이아웃의 단위를 작성

## App Router
> page.tsx가 페이지의 라우팅을 처리하는 역할
> src/app 기준으로 page가 /(루트경로) 페이지이다.
> 만약 src/app폴더 안에 새로운 폴더를 만들면 어떻게 되나 ?
> mypage 폴더를 만들고 폴더 안에 page.tsx를 만들면
> 경로가 /mypage
> /mypage/test === mypage 폴더 안에 test 폴더 안에 page.tsx

- 정적 라우팅
```sh
app
- page.tsx === /
mypage
- page.tsx === /mypage
-- test
    - page.tsx === /mypage/test
detail
- page.tsx === /detail
```

- 동적 라우팅의 경우
> params 값을 사용해서 동적 라우팅 처리를 하고 싶은 경우
> 폴더명을 [] 대괄호 표기법을 사용해서 만들면 된다.
> 폴더명 안에 사용할 파라미터의 이름 : 예시 => [index] 파라미터의 키는 index

```sh
detail
- page.tsx === /detail
- [index] === /detail/index의 값
```

> 쿼리 스트링은 컴포넌트의 props에 객체로 할당된다. params 또한 props에 객체로 할당된다.


## layout
> 레이아웃의 파일이 있는 경로부터 적용, 페이지의 시작점
```sh
app
- layout.tsx === / 경로로 시작하는 모든 페이지의 레이아웃, 레이아웃의 시작점
mylayout
- layout.tsx === /mypage 경로로 시작하는 모든 페이지의 레이아웃
-- test
    - layout.tsx === /mypage/test 경로로 시작하는 모든 페이지의 레이아웃
detail
- layout.tsx === /detail 경로로 시작하는 모든 페이지의 레이아웃
```

> layout이 있는 경로부터 시작 경로 layout이 경로 안에 또 있으면 중복된다.
> layout 파일에는 children으로 page의 내용을 할당해준다.
> 경로의 상위의 layout이 먼저 적용된다.


### 레이아웃 관리 팁
> 레이아웃을 다룰 때 상위의 경로에서 레이아웃이 적용되는 것을 막고 싶다.

### 라우트 그룹핑
> 원하는 페이지들을 묶어서 레이아웃을 관리할 수 있다.
> 레이아웃 단위로 묶을 수 있다.
> 폴더에 () 소괄호로 폴더를 작성하면 라우트 그룹으로 만들어준다.
> (레이아웃 네이밍) 레이아웃이 공통으로 적용되는 페이지를 묶음으로 해준다.
> () 소괄호 폴더 안에 있는 바로 아래 있는 page 파일은 루트경로의 페이지
> 루트 경로에 있는 RootLayout은 절대 없으면 안된다. 필수로 있어야 렌더 가능

### NextJS의 클라이언트 컴포넌트와 서버 컴포넌트
> NextJS의 컴포넌트는 모든게 다 서버 컴포넌트로 만들어진다.
> 브라우저에서 기능을 실행 시키지 못한다. 즉 React Hook을 사용할 수 없다.
> 클라이언트 컴포넌트를 사용해야 할 경우 컴포넌트를 만들 때 "use client" 작성해야 함
> "use Client"를 작성하면 현재 작성중인 컴포넌트를 클라이언트 컴포넌트로 사용할거야. 라는 뜻
> 클라이언트 컴포넌트가 많으면 bundle.js의 양이 많아진다는 얘기이고, 즉 최적화를 위해서 되도록 적게 사용하자.


### 서버 컴포넌트와 클라이언트 컴포넌트를 구분하는 기준과 주의할 점
> 상호작용이 있는 상태관리를 해야 하는 컴포넌트는 클라이언트 컴포넌트로 구성
> 예시 => 검색했을 때 검색어에 따라서 목록이 보여야 한다. => 검색창은 클라이언트 컴포넌트 => 뷰는 서버 컴포넌트
> 서버 컴포넌트를 최대한 많이 사용하는게 좋고, 클라이언트 컴포넌트는 최대한 줄이는게 효율이 좋다.
> 서버 컴포넌트에 기능을 작성할 때 브라우저에서 실행될 코드는 들어가면 안된다.
> 그리고 클라이언트 컴포넌트에 내부에 서버 컴포넌트를 import 하면 안된다. (큰 문제)
    클라이언트 컴포넌트에 import된 서버 컴포넌트는 모두 클라이언트 컴포넌트가 된다.
> 어쩔 수 없이 사용해야 할 경우가 생기면 서버 측에서 만들 때 따로 따로 만들어서 사용할 수 있는 방법이 있는데
> props로 전달해서 사용하면 된다.

NextJS git repository 연결 및 기존 git 파일 올리기
올리브영 세일
요금 약정 할인 갱신
국취제 신청

## 실습
> main 페이지가 있고
> count 페이지가 있고
> game 페이지가 있고

> main 페이지의 레이아웃으로 Link 컴포넌트로 모든 페이지에 이동할 수 있고
> game 페이지에는 가위바위보 만들기
> main이랑 game 페이지는 공통 레이아웃을 가지고 있다.