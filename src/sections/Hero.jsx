import {words} from '../constants/index.js';
import HeroExperience from '../components/HeroModels/HeroExperience.jsx';
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import AnimatedCounter from '../components/AnimatedCounter.jsx';
import ShowcaseSection from './ShowcaseSection.jsx';
const Hero = () => {
  useGSAP(()=>{
    gsap.fromTo('.hero-text h1',
      {
        y:50,
        opacity:0
      },
      {
        y:0,
        opacity:1,
        stagger:0.2,
        duration:1,
        ease:'power2.inOut'
      },
    )
  })
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="Background"/>
      </div>
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="Background"/>
      </div>
      <div className="hero-layout">
      <div className='flex flex-col md:flex-row justify-around'>
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
         <div className="flex flex-col gap-7">
          <div className="hero-text">
            <h1>Creating 
              <span className="slide">
                <span className="wrapper">
                  {words.map((word)=>(
                    <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2"> 
                    <img src={word.imgPath} alt={word.text} className="xl:size-10 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"/>
                    <span>{word.text}</span>
                    </span>
                  ))}
                </span>
              </span>
            </h1>
            <h1>to provide</h1>
            <h1>quality solutions</h1>
            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">Hi, I am Rounak Sachin Sultane, Full Stack Web Developer</p>
            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">"Beyound Syntax - Where Logic meets creativity"</p>
            
          </div>
         </div>
        </header>

        {/* <figure> */}
          {/* <div className="hero-3d-layout border-red-2px">
            <HeroExperience />
          </div> */}
        {/* </figure> */}
        
        <img  src='images/Me.jpg' alt='Me' className="w-full max-w-sm rounded-lg object-cover"></img>
        
        </div>
      </div>
      <AnimatedCounter/>
      <ShowcaseSection />
    </section>
  )
}

export default Hero
