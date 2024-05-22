import React from 'react'

const Textbox = ({label , type , id}) => {
  return (
    <div dir='rtl' className='relative w-full mb-6'>
      <input 
            id={id}
            type={type}
            className='peer font-noor w-full border border-dark rounded-xl my-2 px-3 pt-5 pb-1 focus:outline-none focus:border-blue-500'
      />
      <label 
      htmlFor={id} 
      className=' font-noor absolute right-3 -top-1 px-1 rounded-lg text-dark text-sm 
       bg-white peer-focus:text-blue-500 peer-focus:top-1 peer-focus:px-1 peer-focus:text-xs 
       transition-all duration-100 ease-in-out'>
        {label}
      </label>
    </div>
  )
}

export default Textbox
