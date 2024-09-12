import React from 'react'

const Label = ({ htmlFor, children }: {
    htmlFor: string,
    children: React.ReactNode
}) => {
    return (
        <div>
            <label htmlFor={htmlFor}>{children}</label>
        </div>
    )
}

export default Label;
