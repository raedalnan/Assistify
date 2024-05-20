import LoginForm from '../layouts/loginForm';
import { useNavigate  } from 'react-router-dom';
import React, { useEffect } from 'react';

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        navigate('/');
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [navigate]);
 
  return (
    <div className='w-full h-screen bg-custom-gradient flex justify-center items-center'>
      <LoginForm />
    </div>
  );
};

export default Login;
