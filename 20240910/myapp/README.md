# NextJS 배포 최적화
> 웹에서 용량이 가장 무거운 것 = `이미지`
> 이미지가 웹의 용량의 절반 이상을 차지함
> 이미지 최적화 처리를 해서 배포를 하는 것이 효율적이다.

## 이미지 최적화 방식

1. lazy loading
> 유저가 웹에 접속하고 첫 화면에 보이는 이미지부터 로드를 진행하고 스크롤을 진행해서 이미지가 보이게 될 때 까지 로드를 지연시키는 것.
> 만약 페이지를 스크롤 해서 밑에 더 내릴 수 있는 공간이 있고 그 공간에 로드할 이미지가 있지만 현재 보여지는 페이지에 있는 이미지만 렌더링
> 그 페이지에 도달하게 되면 이미지를 로드하는 것

2. 이미지의 사이즈를 기기에 맞게 로드
> 여러 해상도로 브라우저 또는 모바일에 유저가 사용하는 기기의 화면 사이즈에 따라서 이미지를 로드하는 방식

3. 확장자 변경 (webp, avif)
    > webp : 구글에서 개발한 이미지 형식, jpeg나 png와 비교했을 때 압축이 더 되어있다. (용량을 적게 사용함)
             웹 성능에 최적화된 이미지 형식이라 할 수 있다.
    > avif : 비디오 코덱을 기반으로 한 이미지 포멧으로 webp 보다 높은 압축을 제공하는데 브라우저의 지원 범위가 적을 수 있는 단점이 있다.

4. blur image
> 이미지를 전부 로드하기전에 저해상도의 이미지를 먼저 보여주고 이후에 원본 이미지를 로드해서 로딩이 매끄럽게 보일 수 있게 하는 방식이다.

5. 이미지 캐싱
> 로드를 반복해서 하지 않고 캐시된 이미지 사용.

6. 이미지 스프라이트
> 여러 작은 이미지를 모두 합쳐서 큰 이미지로 만들어서 사용.

7. CSS 이미지 최적화
> background-position을 사용해서 하나의 이미지를 사용하고 이미지의 영역을 필요한 영역만큼 보여줘서 처리한다.

## NextJS Image 컴포넌트
> NextJS에서 제공하는 Image 컴포넌트는 우리가 별도로 코드를 작성해서 이미지를 최적화 할 필요 없이 기본적으로 이미지 최적화를 제공한다.
    Image 컴포넌트를 사용하면 확장자 변경 (webp, avif)이 기본으로 된다.
    (만약에 브라우저에서 확장자를 지원하지 않으면 원본 이미지 확장자 제공)

1. 확장자는 기본으로 webp, avif로 제공 (webp가 1순위)
```js
import Image from 'next/image';

<Image src="이미지 경로" width={100} height={100} alt="이미지 설명" />
```

2. 기기에 맞는 이미지 사이즈
> srcset 속성과 size 속성을 활용해서 기기의 크기에 맞는 이미지를 로드 해줘야 하는데
    NextJS Image 컴포넌트가 기능을 제공해준다. 반응형 이미지 기능을 제공한다.
    뷰포트 크기와 해상도에 맞는 이미지를 선택해서 로드해준다.
> `layout="responsive"`을 전달해주면 된다.

```js
<Image src="이미지 경로" layout="responsive" width={100} height={100} alt="이미지 설명" />
```

3. lazy loading
> Image 컴포넌트에서 lazy loading 속성을 제공
> `loading="lazy"`을 추가해주면 된다.

```js
<Image src="이미지 경로" layout="responsive" loading="lazy" width={100} height={100} alt="이미지 설명" />
```

4. blur image
> input 태그의 입력하기 전에 설명이 보이는 것처럼 로드되기 전에 화면에 저해상도 이미지가 보이는 것
> `placeholder="blur"`
> `blurDataURL="이미지 경로"` 같이 적어줘야 함
    > blurDataURL : 원본 이미지를 로드 하기 전에 저해상도 이미지를 로드해서 보여줄 때 어떤 이미지를 보여줄건지 적어줘야 함

```js
<Image src="이미지 경로" layout="responsive" loading="lazy" placeholder="blur" width={100} height={100}
        alt="이미지 설명" />
```

5. 이미지 캐싱
> NextJS는 기본적으로 이미지를 최적화 할 때 브라우저 캐싱을 제공한다.
> 캐싱에 대한 내용은 NextJS에서 기본적으로 제공해주기 때문에 따로 신경 쓸 필요 없다.


## 외부의 API에서 이미지를 불러오는 경우
> NextJS 서버에서 도메인을 확인하고 이미지를 가져올 수 있는데, 도메인을 허용해줘야 함
> 허용 안해주면 이미지를 컴포넌트에서 가져올 때 오류 발생
> 도메인 허용 : next.config.mjs

next.config.mjs

```js
const nextConfig = {
    images : {
        // 허용할 
        domains : ["127.0.0.1"], // 허용해줄 도메인의 호스트 주소, 만약 외부에서 가져온다면 API 배포한 경로
    }
};
```

## jotai (일본어로 `상태` 라는 뜻)
> 전역 상태 머신
> hook의 형태로 사용 가능하다.

## 설치
```sh
npm i jotai

```

> 스토어 생성
```js
import { atom } from "jotai"

// atom 함수호출 반환받은 값이 객체가 스토어
// atom 함수를 호출할 때 전달한 매개변수가 초기값;
export const myStore = atom(0); // 스토어 생성
// 예시 const myStore = atom(0); => 0이 초기값
```

> 전역상태 조회, 수정
```js
import { myStore } from './store'
// useAtom은 반환값으로 전역상태의 값(value)과 setState 메서드를 제공해준다.
// useAtom 함수를 호출할 때 매개변수로 가져올 전역상태
const [count, setCount] = useAtom(myStore);
```

### 실습
> 어제 만든 로그인 페이지에서 Image 컴포넌트 사용으로 변경 (최적화)
> jotai를 사용해서 로그인 시 전역상태로 로그인 정보 저장