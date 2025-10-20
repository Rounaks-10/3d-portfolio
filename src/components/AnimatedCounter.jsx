import React from 'react'
import TitleHeader from './TitleHeader'

const AnimatedCounter = () => {
  return (
    <div id="about" className="padding-x-lg xl:mt-0 mt-32">
      
        <TitleHeader
        title="About Me"
        sub=" Know more about me"
        />
        <br></br>
        <p className='text-white-50 md:text-xl'>I am currently pursuing a Bachelor of Technology in Computer Science and Engineering from Walchand College of Engineering ,Sangli , Passionate about building scalable,impactful and user-centered solutions.
          I am specialized in Full-Stack Web developer using MERN and enjoy solving complex problems with C++ and DSA. I am driven by curiosity, a problem-solving mindset, and a desire to make a positive impact through technology.
           I enjoy working on projects that challenge me to think critically, optimize performance, and prioritize user experience.
        </p>
        <br></br>
      <p className='text-white-50 md:text-xl'>
        I thrive in collaborative environments and believe in the power of teamwork, feedback, and continuous learning.
         I'm always exploring new tools, frameworks, and development practices to stay ahead in the ever-evolving tech landscape.My goal is to contribute to innovative, real-world applications that enhance lives and businesses.
          I am currently seeking opportunities where I can apply my skills, learn from experienced professionals, and grow as a software engineer.
      </p>
    </div>
  )
}

export default AnimatedCounter
