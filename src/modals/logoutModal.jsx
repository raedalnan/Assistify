import React from 'react'
import LoginSide from "../assets/loginSide.png"
import Button from '../component/button';

const LogoutModal = () => {
  return (
    <>
      <div className=' relative w-6/12 flex container justify-end items-center mx-auto gap-0'>
      < div className=' absolute top-0 left-0 z-0  '>
            <img src={LoginSide} alt="building" className='rounded-l-lg h-full object-cover' />
        </div>
        <div className='w-8/12 z-10 container flex justify-center flex-col bg-white rounded-lg pl-8 pr-2 py-4'>
            <h3 className=' text-h3 text-dark-blue font-noor font-bold'>هل انت متأكد من تسجيل الخروج</h3>
            <Button label={"تأكيد"}  type={"submit"} color={"teal"}></Button>
            <Button color={"white"} label={"تراجع"} ></Button>
        </div>
      </div>
      {/* <div className=' bg-custom-gradient w-full h-screen flex justify-center items-center'>
      </div> */}
    </>
  )
}

export default LogoutModal
