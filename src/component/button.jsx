import React from 'react'

const Button = ({label ,color ,type}) => {
  const backgroundColorClass = {
    teal: "bg-teal",
    white: "bg-white"
  }
  return (
    <div className=' w-full'>
      <button 
      type={type}
      className={`w-full py-2 text-submit shadow-md rounded-xl my-4 text-dark-blue font-noor font-bold hover:opacity-80 transition-colors ${backgroundColorClass[color] || ""}
      ${color === "white" ? "border border-light-gray" : ""} `} >
        {label}
      </button>
    </div>
  )
}

export default Button
