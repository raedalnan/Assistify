import React, { useState, useEffect , useRef} from 'react';
import background from '../assets/main-bg.jpg';
import LoginSide from '../assets/loginSide.png';
import { useNavigate } from 'react-router-dom';

const EmailVerification = () => {
  const [code, setCode] = useState(Array(6).fill(''));
  const [resendTimer, setResendTimer] = useState(260);
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

  useEffect(() => {
    if (resendTimer > 0) {
      const timerId = setInterval(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearInterval(timerId);
    }
  }, [resendTimer]);

  const handleChange = (e, index) => {
    const newCode = [...code];
    newCode[index] = e.target.value;
    setCode(newCode);
    if (e.target.value !== '' && index < 5) {
      document.getElementById(`code-input-${index + 1}`).focus();
    }
  };

  const handleConfirm = () => {
    alert(`Verification code: ${code.join('')}`);
  };

  const handleResend = () => {
    setResendTimer(260);
  };

  const formatTime = (time) => {
    const minutes = String(Math.floor(time / 60)).padStart(2, '0');
    const seconds = String(time % 60).padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-custom-gradient relative">
      {/* <img src={background} alt="Background" className="absolute inset-0 w-full h-full object-cover" /> */}
      <div className="bg-white p-8 rounded-lg shadow-lg text-center w-11/12 md:w-2/3 lg:w-1/3 flex flex-col items-center z-10 relative">
        {/* <div className="absolute top-0 left-0 bottom-0 right-0 z-0">
          <img src={LoginSide} alt="Building" className="rounded-l-lg h-full object-cover opacity-50" />
        </div> */}
        <div className="relative z-10 w-full lg:w-2/3 p-4">
          <h2 className="text-2xl mb-4 font-bold text-navy">مرحباً بك RED</h2>
          <p className="text-sm mb-4 text-gray-600 font-medium">لقد تم إرسال رمز التأكيد إلى: (red1234@gmail.com)</p>
          <div className="flex justify-center space-x-2 mb-4">
            {code.map((num, index) => (
              <input
                key={index}
                id={`code-input-${index}`}
                type="text"
                maxLength="1"
                value={num}
                onChange={(e) => handleChange(e, index)}
                className="w-10 h-10 text-center text-xl border border-gray-300 rounded"
              />
            ))}
          </div>
          <button
            className="bg-teal text-white py-2 px-4 rounded-xl text-lg mb-4 w-full font-bold"
            onClick={handleConfirm}
          >
            تأكيد
          </button>
          <p className="text-sm text-gray-600 mb-4 font-medium">
            إذا لم يصلك الرمز يمكنك إعادة المحاولة بعد {formatTime(resendTimer)}
          </p>
          <button
            className={`py-2 px-4 rounded-xl text-lg w-full font-bold bg-white border border-gray-2`}
            onClick={handleResend}
            disabled={resendTimer > 0}
          >
            إعادة الإرسال
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
