import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-light-gray h-20 flex items-center'>
      <div className="container mx-auto flex justify-stretch  items-center">
      <div className="flex space-x-8 basis-1/3">
        <button className='bg-navy text-teal px-4 py-1 h-8 rounded text-sm font-noor  hover:bg-teal hover:text-navy '>ابدأ</button>
        <button className='text-navy text-sm px-8 whitespace-nowrap h-8  border rounded font-bold hover:bg-navy hover:text-light-gray'><Link to="/login">سجل الدخول</Link></button>
      </div>
      <div className='flex justify-end container gap-5 space-x-10'>
            <ul className="flex space-x-4">
            <li><Link to="/" className="text-navy font-noor ">المزيد</Link></li>
            <li><Link to="/" className="text-navy font-noor  hover:text-dark-blue">البيع</Link></li>
            <li><Link to="/" className="text-navy font-noor  hover:text-dark-blue">برامج الجنسية لدى اسيستفاي</Link></li>
            <li><Link to="/" className="text-navy font-noor  hover:text-dark-blue">حول</Link></li>
            <li><Link to="/" className="text-navy font-noor  hover:text-dark-blue">العقارات</Link></li>
            </ul>
            <div className='w-32'>
                <Link to="/">
                    <img src="src\assets\Group.jpg" alt="logo" />
                </Link> 
            </div>
        </div>
      </div>
    </nav> 
  )
}

export default Navbar
