import React from 'react'
import styled from '../style.module.css'

const Footer = () => {
    return (
        <div>
            <span className={styled.footer}>
                <button>로그인</button>
                <span>·</span>
                <button>회원가입</button>
                <span> 문의</span>
            </span>
        </div>
    )
}

export default Footer;