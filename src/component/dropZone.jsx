import React from 'react'
import UploadSvg from "../assets/svgs/upload.svg"

const DropZone = ({id , label , fileSize}) => {
  return (
        <div className="border border-dashed h-36 border-gray-500 bg-purple2 relative mb-5 rounded-3xl">
            <input 
            type="file" 
            id={id}
            className="cursor-pointer relative block opacity-0 w-full h-full p-20 z-50" />
            <div className="text-center p-10 absolute top-0 right-0 left-0 m-auto flex justify-center items-center gap-4">
                <img src={UploadSvg} alt="" />
                <h4 className='font-noor'>
                اسحب و افلت الصورة هنا او قم برفعها من الملفات
                </h4>
                <p dir='rtl' className="font-noor text-gray-2 absolute bottom-3 right-4">الحجم الاقصى: {fileSize} MB</p>
            </div>
            <label htmlFor={id} className='font-noor absolute right-3 -top-3 px-1 rounded text-dark text-sm 
                                         bg-white peer-focus:text-blue-500 peer-focus:top-1 peer-focus:px-1 peer-focus:text-xs 
                                           transition-all duration-100 ease-in-out'>
                {label}
            </label>
        </div>
  )
}

export default DropZone
