"use client"

import React, { useRef } from 'react'
import styled from '../style.module.css';
import Link from 'next/link';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import Label from '../atoms/Label';
import Image from 'next/image';

const Body = () => {
    const uidref = useRef<HTMLInputElement | null>(null);
    const upwref = useRef<HTMLInputElement | null>(null);
    const uckref = useRef<string>();

    const handlerLogin = () => {
        console.log(123);
    }

    return (
        // <div>
        //     <Input type="text" name='uid' ref={uidref} style={styled.userInput} placeholder="아이디 또는 이메일" id='uidInput' />
        //     <Input type="password" name='upw' ref={upwref} style={styled.userInput} placeholder="비밀번호" id='upwInput' />
        //     <Input type="checkbox" name='saveid' ref={''} style={''} placeholder={''} id='saveid' />
        //     <Label htmlFor='saveid'>아이디 저장</Label>
        //     <Button btnstyle={styled.loginBtn}>로그인</Button>
        //     <div>
        //         <Link href='/signup'>회원가입</Link>
        //         <Link href='/findid'>아이디 찾기</Link>
        //         <Link href='/findpw'>비밀번호 찾기</Link>
        //     </div>
        // </div>

        <div className='flex flex-col items-center gap-6'>
            <div className='flex flex-col items-center justify-center w-[90%] '>
                <input type="text" name='uid' ref={uidref} className={styled.userInput} placeholder='아이디 또는 이메일' />
                <input type="text" name='upw' ref={upwref} className={styled.userInput} placeholder='비밀번호' />
                <div className='relative left-0'>
                    <input type="checkbox" name='saveid' className='absolute inset-y-0 left-0' />
                    <label htmlFor="saveid" className='text-[15]'> 아이디 저장</label>
                </div>
                <button className='flex bg-gray-400 text-white font-bold w-[90%] h-12 items-center justify-center rounded-lg' onClick={handlerLogin}>로그인</button>
            </div                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         >
            <div className='flex w-[70%] justify-around text-gray-500 font-normal'>
                <Link href='/signup'>회원가입</Link>
                <span>|</span>
                <Link href='/findid'>아이디 찾기</Link>
                <span>|</span>
                <Link href='/findpw'>비밀번호 찾기</Link>
            </div>
            <div className='flex flex-col relative items-center'>
                <div className="flex rounded-3xl border bg-red-500 w-36 text-white justify-center before:w-2 before:h-2 before:content-[''] before:absolute before:rotate-45 before:translate-y-5 before:bg-red-500 animate-bounce">간편하게 시작하기!</div>
                <button className='flex w-72 h-12 bg-yellow-300 rounded-3xl items-center justify-center'>
                    <div className='flex w-[60%] items-center justify-around'>
                        <Image src="/카카오톡.png" width={30} height={30} alt='카카오톡' />
                        카카오로 시작하기
                    </div>
                </button>
            </div>
            <div className='flex w-56 justify-around'>
                <Image src="/페이스북.png" width={60} height={60} alt='페이스북' />
                <Image src="/애플.png" width={60} height={60} alt='애플' className='rounded-[50%]' />
                <Image src="/네이버.png" width={60} height={60} alt='네이버' />
            </div>
        </div >
    )
}

export default Body;
