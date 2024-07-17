import React from 'react'

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className? : string;
    width?: 'w-full' | 'w-fit';   
}
const Button = ({children , className , width = 'w-fit' , ...rest} : IProps) => {
  return (
    <button className={`${className} rounded ${width} text-white p-2`}  {...rest}>{children}</button>
  )
}

export default Button