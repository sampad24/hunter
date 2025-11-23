"use client"
import React from 'react'
import Image from 'next/image';
import w1 from '../components/works/w1.gif'
import w2 from '../components/works/w2.gif'
import w3 from '../components/works/w3.gif'
import w4 from '../components/works/w4.gif'
import w5 from '../components/works/w5.gif'
import w6 from '../components/works/w6.gif'
import w7 from '../components/works/w7.gif'
import w8 from '../components/works/w8.gif'
import w9 from '../components/works/w9.gif'
import w10 from '../components/works/w10.gif'


const Studentworks = () => {
    return (
        <div id='students' className='w-full back1 py-10'>
            <div className='text-center text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-6'>
                STUDENT WORKS
            </div>
            <div className="bg-white h-1 opacity-20 w-3/4 mx-auto mb-10"></div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 px-5 sm:px-10 xl:px-20'>
                {[w1, w2, w3, w4, w5,w6,w7,w8,w9,w10].map((img, idx) => (
                    <div key={idx} className='overflow-hidden rounded-3xl shadow-lg bg-white p-1'>
                        <Image
                            src={img}
                            alt={`work-${idx + 1}`}
                            className='w-full h-auto object-cover rounded-2xl'
                        />
                    </div>
                ))}
            </div>

            <div className="bg-white h-0.5 w-full mt-12"></div>
        </div>
    )
}

export default Studentworks
