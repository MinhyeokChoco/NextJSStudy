import React from 'react'
import styled from '../style.module.css'

const Button = ({ btnstyle, children }: {
    btnstyle: string,
    children: React.ReactNode
}) => {
    console.log(btnstyle, 1);
    return (
        <div>
            <button className={btnstyle}>{children}</button>
        </div>
    )
}

export default Button;