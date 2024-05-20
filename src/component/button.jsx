import React from 'react'

const Button = ({label , color ,type}) => {
  return (
    <div className=' w-full'>
      <button className="w-full py-1 text-submit rounded-xl my-4 text-dark-blue font-noor font-bold hover:opacity-80 transition-colors bg-teal" >
        {label}
      </button>
    </div>
  )
}

export default Button
