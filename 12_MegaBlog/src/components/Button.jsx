import React, { Children } from 'react'

function Button({
    Children,
    type = 'button',
    bgcolor = 'bg-blue-600',
    textcolor = 'text-while',
    className = '',
    ...props
}) {
    return (
        <button className={`px-4 py-2 rounded-lg ${bgcolor} ${textcolor} ${className}`} {...props}>
            {Children}
        </button>
    )
}

export default Button
