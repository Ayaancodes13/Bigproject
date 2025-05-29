import React, { Children } from 'react'


const Button = ({
    children,type="button",bgcolor= "bg-blue-300",textcolor="color-black", className}) => {
  return (
    <button
    type = {type} 
    className = {`rounded-sm ${bgcolor} ${textcolor}} ${className}`}>
        {children}
    </button>
  )
}

export default Button