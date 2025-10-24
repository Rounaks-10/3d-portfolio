import React, { use, useRef } from 'react'
import{gsap} from 'gsap';
import{ScrollTrigger} from 'gsap/ScrollTrigger';
import {useGSAP} from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef=useRef(null);
    const project1Ref=useRef(null);
    const project2Ref=useRef(null);
    const project3Ref=useRef(null);
    useGSAP(()=>{
         const projects=[project1Ref.current,project2Ref.current,project3Ref.current];

    projects.forEach((card,index)=>{
        gsap.fromTo(card,{
            y:50,opacity:0
        },
        {
            y:0,
            opacity:1,
            duration:1,
            delay:(index+1)*0.3,
            scrollTrigger:{
                trigger:card,
                start:"top bottom-=100",
            }
        }
    )
    })
        gsap.fromTo(sectionRef.current,{opacity:0},{opacity:1,duration:1.5})

    },[]);


  return (
    <div id="work" ref={sectionRef} className="app-showcase">
        <div className="w-full">
          <div className="showcaselayout">
            <div className="first-project-wrapper">
                <div className="image-wrapper" ref={project1Ref}>
                    <img src="/images/ExpenseTrack.png" alt="project1" />
                </div>
                <div className="text-content">
                    <h2>SmartExpense – AI-Powered Expense Tracker</h2>
                    <p className='text-white-50 md:text-xl'>SmartExpense is a full-stack, AI-enhanced expense tracking web application built with Next.js, React, Supabase, and Clerk. Designed with modern UI using Tailwind CSS and Shadcn UI, it enables users to manage their finances effortlessly through intelligent features:<br/>Receipt Scanning Transaction Management Interactive Dashboard Budgeting Reports Authentication & Security Backend & Database</p>
                </div>
                 <div className="flex flex-wrap gap-4">
            <a
              href="https://expense-tracker-five-sooty.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition-colors duration-200"
            >
              Live Demo
            </a>

            <a
              href="https://github.com/Rounaks-10/Expense-tracker"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-900 text-white px-5 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2"
            >
              <img src="/images/git.png" alt="GitHub" className="w-5 h-5" />
              GitHub
            </a>
          </div>
            </div>
            <div className="project-list-wrapper overflow-hidden" ref={project2Ref}>
                <div className="project">
                    <div className="image-wrapper bg-[#ffefdb]">
                        <img src="/images/Huffman.webp" alt="project2" />
                    </div>
                    <h2>HalfZip - File Compressor Using Huffman Encoding</h2>
                    <p className='text-white-50 md:text-xl'>Implemented Huffman encoding and decoding in C++ to compress text files by up to 50%. Uses frequency-based prefix codes with priority queues and binary trees to achieve efficient, lossless compression and decompression.</p>
                    <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/Rounaks-10/Expense-tracker"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-900 text-white px-5 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2"
            >
              <img src="/images/git.png" alt="GitHub" className="w-5 h-5" />
              GitHub
            </a>
          </div>
                </div>

                <div className="project" ref={project3Ref}>
                    <div className="image-wrapper bg-[#ffefdb]">
                        <img src="/images/AuthSys.png" alt="project3" />
                    </div>
                    <h2>SecureAuth – MERN Stack Authentication System</h2>
                    <p className='text-white-50 md:text-xl'>Built a secure authentication system using the MERN stack with features like user registration, login, logout, OTP verification, and PIN-based access. After OTP verification, users set a PIN for quick future logins. Ensures multi-layered security with JWT, hashed passwords, and secure API routes.</p>
                    <div className="flex flex-wrap gap-4">
            <a
              href="https://expense-tracker-five-sooty.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition-colors duration-200"
            >
              Live Demo
            </a>

            <a
              href="https://github.com/yourusername/SmartExpense"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-900 text-white px-5 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2"
            >
              <img src="/images/git.png" alt="GitHub" className="w-5 h-5" />
              GitHub
            </a>
          </div>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ShowcaseSection
