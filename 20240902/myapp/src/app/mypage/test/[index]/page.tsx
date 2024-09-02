const page = ({ params, searchParams }: {
    params: {
        index: string
    },
    searchParams: {
        a: string
    }
}) => {
    // 서버에서 실행이 되고 있다.
    // 서버 컴포넌트
    // 콘솔로그가 브라우저 개발자모드에서 보이는게 아닌 터미널에서 보이는 이유가 서버에서 실행되고 있기 때문
    console.log(searchParams);
    return (
        <div>
            여기는 index params를 받은 test 페이지
            <div>{params.index}</div>
        </div>
    )
}

export default page;
