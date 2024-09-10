import styled from "./style.module.css";
import Link from "next/link";

export default async function Home() {

  const handlerForm = async (formData: FormData) => {
    "use server"
    console.log('하이욥 :)', formData)
    // 소셜 로그인 처리
  }

  return (
    <div className="">
      <div className="flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md p-8 bg-white rounded-md shadow-lg">
          <h2 className="text-3xl font-bold text-center text-gray-800">LKJ 로그인</h2>
          <form action="" className="mt-8">
            <div className="rounded-md shadow-sm">
              <label className={styled.user_label} htmlFor="">Email</label>
              <input className={styled.user_input} type="text" />
              <label className={`${styled.user_label} mt-4`} htmlFor="">비밀번호</label>
              <input className={styled.user_input} type="text" />

              <div className="flex items-center justify-between mt-8">
                <div className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 text-black border-gray-300" />
                  <label htmlFor="" className="block ml-2 text-sm text-gray-800">아이디 기억하기</label>
                </div>
                <div className="text-sm">
                  <Link className="font-medium text-gray-600 hover:text-green-500" href="">비밀번호 찾기</Link>
                </div>
              </div>
              <div className="mt-8">
                <button className="w-full px-4 py-2 text-white bg-green-400 rounded-lg hover:bg-green-300">로그인</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// https://tailwindcss.com/docs/background-color