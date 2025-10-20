import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { testimonials } from '../constants/index.js'
import GlowCard from '../components/GlowCard'

const Testimonials = () => {
  return (
    <section id="testimonials" className='flex-center section-padding'>
        <div className="w-full h-full md:px-10 px-5">
            <TitleHeader title="What People say About me?"
            sub="Client Feedback"/>
            <div className="lg:columns-3 md:colums-2 columns-1 mt-16">
                {testimonials.map((testimonial)=>(
                    <GlowCard card={testimonial}>
                        <div className="flex items-center gap-3">
                            <div>
                            <img src={testimonial.imgPath} alt={testimonial.name}/>
                            </div>
                            <div>
                                <p className='font-bold'>{testimonial.name}</p>
                                <p className='font-bold'>{testimonial.mentions}</p>
                            </div>
                        </div>
                    </GlowCard>
                ))}
            </div>
        </div>

    </section>
  )
}

export default Testimonials
