import {useState} from 'react'
import Textbox from '../component/textbox';
import Button from '../component/button';
import LoginSide from "../assets/loginSide.png"
import googlesvg from "../assets/svgs/google.svg"
import facebooksvg from "../assets/svgs/facebook.svg"
import applesvg from "../assets/svgs/apple.svg"
import { Link } from 'react-router-dom';


const LoginForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setError('');
  
      // Basic validation
      if (!email || !password) {
        setError('Both fields are required.');
        return;
      }
  
      
      console.log('Logging in with:', { email, password });
      
      setEmail('');
      setPassword('');
    };
  
  return (
    <div className="relative w-full lg:w-6/12 flex container justify-end gap-0">
  <div className="absolute top-0 left-0 bottom-0 right-0 z-0">
    <img src={LoginSide} alt="building" className="rounded-l-lg h-full object-cover" />
  </div>
  <div className="bg-white rounded-lg p-5 z-10 px-4 lg:px-8 w-full lg:w-8/12">
    <h2 className="text-h2 font-bold font-noor my-6 text-center text-dark-blue">تسجيل الدخول</h2>
    {/* {error && <p className="text-red-500 text-center mb-4">{error}</p>} */}
    <form onSubmit={handleSubmit}>
      <Textbox type={"text"} label={"الايميل او رقم الهاتف"} id={'username'} />
      <Textbox type={"password"} label={"كلمة المرور"} id={'password'} />
      <Button type="submit" color={"teal"} label="تسجيل الدخول" />
    </form>
    <p dir='rtl' className='font-noor mx-4 my-8'>ليس لديك حساب؟ 
      <Link to={"/signup"} className='ml-5 text-sm underline text-purple'> انشاء حساب</Link> 
      <Link to={"/verify-account"} className='text-sm underline text-navy'>نسيت كلمة المرور</Link>
    </p>
    <div className='relative border-t-2 border-gray mt-8'>
      <p className='font-noor absolute -top-5 left-1/2 px-4 bg-white text-gray'>أو</p>
    </div>
    <div className='flex flex-col sm:flex-row justify-center my-8 space-y-4 sm:space-y-0 sm:space-x-5'>
      <button className="flex items-center px-4 py-2 bg-white rounded-full shadow-md">
        <img src={googlesvg} alt="Google Logo" className="w-6 h-6 mr-2" />
        <span className="text-gray-800 font-medium">Google</span>
      </button>
      <button className="flex items-center px-4 py-2 bg-dark rounded-full shadow-md">
        <img src={applesvg} alt="Apple Logo" className="w-6 h-6 mr-2" />
        <span className="text-white font-medium">Apple</span>
      </button>
      <button className="flex items-center px-4 py-2 bg-blue rounded-full shadow-md">
        <img src={facebooksvg} alt="Facebook Logo" className="w-6 h-6 mr-2" />
        <span className="text-white font-medium">Facebook</span>
      </button>
    </div>
  </div>
</div>

  )
}

export default LoginForm
