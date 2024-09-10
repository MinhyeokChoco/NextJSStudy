"use client"

import { useAtom } from "jotai";
import { countAtom } from "./state/countAtom";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  const [count, setCount] = useAtom(countAtom);

  useEffect(() => {
    console.log(count)
  }, [count])
  return (
    <div>
      {/* <Image src="/temp.jpg" width={100} height={100} alt="" layout="responsive" placeholder="blur" */}
      {/* blurDataURL="/temp.jpg" /> */}
      {/* width와 height 속성은 무조건 default 값으로 줘야 함 */}
      {/* layout="responsive" : 부모 크기에 따라서 커지거나 작아지거나 함, 부모 크기에 맞게 설정 */}

      {/* <img src="/temp.jpg" alt="" /> */}
      <div>{count}</div>
      <button onClick={() => setCount((prev) => prev + 1)}>증가</button>
    </div>
  );
}