import React, { MutableRefObject, Ref, RefObject } from 'react'
import styled from '../style.module.css'

const Input = ({ type, name, ref, placeholder, style, id }: {
    type: string,
    name: string,
    ref: any,
    placeholder: string,
    style: string,
    id: string
}) => {
    return (
        <div>
            <input type={type} name={name} ref={ref} placeholder={placeholder} className={style} id={id} />
        </div>
    )
}

export default Input;