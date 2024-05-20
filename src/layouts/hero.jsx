import React from 'react'
import mainBgImage from '../assets/main-bg.jpg';

const Hero = () => {
  return (
    <section dir="rtl" className='h-[80vh] bg-cover flex items-center flex-col pt-4 space-y-8 relative' style={{ backgroundImage: `url(${mainBgImage})` }}>
        <div className="absolute inset-0 bg-custom-gradient  opacity-20 z-0"></div>
        <p className='text-teal font-noor z-10'>أحصل على الإقامة التركية بكل سهولة مع Assetify</p>
        <h1 className='text-4xl text-white z-10 leading-normal font-noor font-bold text-center'>استثمر من أي مكان في العالم واحصل <br/> على الإقامة التركية</h1>
        <p className='text-teal font-noor z-10 text-center'>استمتع بمجموعة من الفوائد عن طريق استثمار الحد الأدنى<br></br> 200,000 دولار أمريكي من خلال منصتنا.</p>
    </section>
  )
}

export default Hero