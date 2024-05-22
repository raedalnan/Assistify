import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../layouts/loginForm';

const Login = () => {
  const navigate = useNavigate();
  const formRef = useRef();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        navigate('/');
      }
    };

    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        navigate('/');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [navigate]);

  return (
    <div className='w-full h-screen bg-custom-gradient flex justify-center items-center'>
      <LoginForm ref={formRef}/>
    </div>
  );
};

export default Login;
