"use client"

import React from 'react'
import styled from '../style.module.css'
import { usePathname } from 'next/navigation';


const Header = () => {
    const path = usePathname();
    console.log(path);
    const pathHandler = () => {
        switch (path) {
            case "/":
                return "로그인"
            case "/signup":
                return "회원가입"
            default:
                break;
        }
    }
    return (
        <div className={styled.header}>
            <span className={styled.headerX}>
                <div className={styled.virtualElement}></div>
            </span>
            <span className={styled.headerChildren}>{pathHandler()}</span>
        </div >
    )
}

export default Header;