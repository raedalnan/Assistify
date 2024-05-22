import React, { useState } from 'react';
import Textbox from '../component/textbox';
import DropZone from '../component/dropZone';
import Button from '../component/button';
import { Link } from 'react-router-dom';
import googlesvg from "../assets/svgs/google.svg";
import facebooksvg from "../assets/svgs/facebook.svg";
import applesvg from "../assets/svgs/apple.svg";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    password: '',
    repass: '',
    img: null,
    idProof: null
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [id]: files[0] });
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.repass) {
      setError('Passwords do not match');
      return;
    }

    setError('');

    const dataToSend = {
      fullname: formData.fullname,
      email: formData.email,
      password: formData.password,
      phone: formData.phone
    };

    try {
      const response = await fetch('', {
        method: 'POST',
        headers: {
          
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        console.log('Signup successful');
      } else {
        console.log('Signup failed');
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <div className=' bg-white h-screen w-4/5 z-10 flex justify-center items-center flex-col px-20'>
      <h1 className='text-h2 text-navy font-noor font-bold mb-10'>إنشاء حساب</h1>
      <form className='grid grid-cols-2 gap-6 w-full' onSubmit={handleSubmit}>
        <div className='w-full'>
          <DropZone id="img" label="الصورة الشخصية" fileSize={"2"} onChange={handleChange} />
          <DropZone id="idProof" label="اثبات شخصية" fileSize={"1"} onChange={handleChange} />
          <Button label={"إنشاء حساب"} color={"teal"} type="submit" />
          {error && <p className='text-red-500'>{error}</p>}
          <p dir='rtl' className='font-noor mx-4 '> لديك حساب؟
            <Link to={"/login"} className='ml-5 text-sm underline text-purple'>
              تسجيل الدخول
            </Link>
          </p>
        </div>
        <div className=''>
          <Textbox label={"الاسم الكامل"} type={"text"} id={"fullname"} onChange={handleChange} />
          <Textbox label={"الايميل"} type={"email"} id={"email"} onChange={handleChange} />
          <Textbox label={"رقم الهاتف"} type={"text"} id={"phone"} onChange={handleChange} />
          <Textbox label={"كلمة المرور"} type={"password"} id={"password"} onChange={handleChange} />
          <Textbox label={"تأكيد كلمة المرور"} type={"password"} id={"repass"} onChange={handleChange} />
        </div>
      </form>
      <div className='relative border-t-2 w-4/5 border-gray-2 my-10 opacity-40'>
        <p className='font-noor absolute -top-5 left-1/2 px-4 bg-white text-gray-2'>أو</p>
      </div>
      <div className='flex my-8 space-x-16'>
        <Link className="flex items-center px-4 py-2 bg-white rounded-full shadow-md">
          <img src={googlesvg} alt="Google Logo" className="w-6 h-6 mr-2" />
          <span className="text-gray-800 font-medium">Google</span>
        </Link>
        <Link className="flex items-center px-4 py-2 bg-dark rounded-full shadow-md">
          <img src={applesvg} alt="Apple Logo" className="w-6 h-6 mr-2" />
          <span className="text-white font-medium">Apple</span>
        </Link>
        <Link className="flex items-center px-4 py-2 bg-blue rounded-full shadow-md">
          <img src={facebooksvg} alt="Facebook Logo" className="w-6 h-6 mr-2" />
          <span className="text-white font-medium">Facebook</span>
        </Link>
      </div>
    </div>
  );
}

export default SignupForm;
