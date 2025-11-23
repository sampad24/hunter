'use client'
import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
import unreal from '@/app/components/works/images/UEcourse.png'
import product from '@/app/components/works/images/product.png'
import special from '@/app/components/works/images/special.png'
import aivideo from '@/app/components/works/images/aivideo.png'
import imaged from '@/app/components/works/images/3d.png'
import motion from '@/app/components/works/images/motion.png'
import vfx from '@/app/components/works/images/vfx.png'
const Courses = () => {
  const courseImages = [
    { img: unreal, slug: 'uecourse' },
    { img: product, slug: 'product' },
    { img: aivideo, slug: 'aivideo' },
    { img: special, slug: 'special' }
  ]
  const moreCourses = [
    { img: vfx, slug: 'vfx' },
    { img: imaged, slug: '3d' },
    { img: motion, slug: 'motion' }
  ]
  return (
    // <div className='h-[100%] w-[100%]'>
    //   <div id='courses' className='h-[100%] w-[100%] back1 pb-10 pt-10 mt-0 '>
    //     <div className='flex text-6xl text-white justify-center p-10' > COURSES</div>
    //     <div className="bg-white h-1 opacity-15 mt-0 ml-[25%] mr-[25%] "></div>
    //     <div className='grid grid-cols-1 mt-10 m-auto pb-30  h-[100%] w-460 bg-gray-100 rounded-4xl shadow-2xl '>
    //       <div className='flex gap-20 mt-10 justify-center'>
    //         <div className='rounded-4xl border-3 shadow-2xl  h-[120%] w-[20%] hover:cursor-pointer '><Link href={"https://docs.google.com/forms/d/e/1FAIpQLSfWb-pRaLL7tEYDItzgyQJcbBWa2NfugxqLllK8aPdcCgTUOg/viewform?usp=header"} target='_blank'><Image className='h-[100%] rounded-4xl' src={unreal} alt=''></Image></Link></div>
    //         <div className='rounded-4xl border-3 shadow-2xl  h-[120%] w-[20%] hover:cursor-pointer '><Link href={"https://docs.google.com/forms/d/e/1FAIpQLSfWb-pRaLL7tEYDItzgyQJcbBWa2NfugxqLllK8aPdcCgTUOg/viewform?usp=header"} target='_blank'><Image className='h-[100%] rounded-4xl' src={product} alt=''></Image></Link></div>
    //         <div className='rounded-4xl border-3 shadow-2xl  h-[120%] w-[20%] hover:cursor-pointer '><Link href={"https://docs.google.com/forms/d/e/1FAIpQLSfWb-pRaLL7tEYDItzgyQJcbBWa2NfugxqLllK8aPdcCgTUOg/viewform?usp=header"} target='_blank'><Image className='h-[100%] rounded-4xl' src={aivideo} alt=''></Image></Link></div>
    //         <div className='rounded-4xl border-3 shadow-2xl  h-[120%] w-[20%] hover:cursor-pointer '><Link href={"https://docs.google.com/forms/d/e/1FAIpQLSfWb-pRaLL7tEYDItzgyQJcbBWa2NfugxqLllK8aPdcCgTUOg/viewform?usp=header"} target='_blank'><Image className='h-[100%] rounded-4xl' src={special} alt=''></Image></Link></div>
    //       </div>
    //     </div>
    //     <div className='grid grid-cols-1 mt-10 m-auto pb-30  h-[100%] w-460 bg-gray-100   rounded-4xl shadow-2xl '>
    //       <div className='flex gap-20 mt-10 justify-center'>
    //         <div className='rounded-4xl border-3 shadow-2xl  h-[120%] w-[25%] hover:cursor-pointer '><Link href={"https://docs.google.com/forms/d/e/1FAIpQLSfWb-pRaLL7tEYDItzgyQJcbBWa2NfugxqLllK8aPdcCgTUOg/viewform?usp=header"} target='_blank'><Image className='h-[100%] rounded-4xl' src={vfx} alt=''></Image></Link></div>
    //         <div className='rounded-4xl border-3 shadow-2xl  h-[120%] w-[25%] hover:cursor-pointer '><Link href={"https://docs.google.com/forms/d/e/1FAIpQLSfWb-pRaLL7tEYDItzgyQJcbBWa2NfugxqLllK8aPdcCgTUOg/viewform?usp=header"} target='_blank'><Image className='h-[100%] rounded-4xl' src={imaged} alt=''></Image></Link></div>
    //         <div className='rounded-4xl border-3 shadow-2xl  h-[120%] w-[25%] hover:cursor-pointer '><Link href={"https://docs.google.com/forms/d/e/1FAIpQLSfWb-pRaLL7tEYDItzgyQJcbBWa2NfugxqLllK8aPdcCgTUOg/viewform?usp=header"} target='_blank'><Image className='h-[100%] rounded-4xl' src={motion} alt=''></Image></Link></div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="bg-white h-0.5 opacity-15 left-0"></div>
    // </div>
    <div className="w-full back1 pb-10">
      <div id="courses" className="text-white pt-10">
        <h2 className="text-4xl md:text-6xl font-bold text-center pb-6">COURSES</h2>
        <div className="bg-white h-[1px] opacity-20 mx-auto w-1/2" />



        {/* First row of courses */}
        <div className="mt-10 px-4 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {courseImages.map((course, idx) => (
            <Link
              key={idx}
              href={`/courses/${course.slug}`}
              className="rounded-2xl overflow-hidden shadow-2xl border-2 hover:scale-150 transition duration-300"
            >
              <Image src={course.img} alt={`course-${idx}`} className="w-full h-full object-cover" />
            </Link>
          ))}
        </div>

        {/* Second row of courses */}
        <div className="mt-15 px-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {moreCourses.map((course, idx) => (
            <Link
              key={idx}
              href={`/courses/${course.slug}`}
              className="rounded-2xl overflow-hidden shadow-2xl border-2 hover:scale-150 transition duration-300"
            >
              <Image src={course.img} alt={`course-${idx + 4}`} className="w-full h-full object-cover" />
            </Link>
          ))}
        </div>
      </div>
      <div className="bg-white h-0.5  left-0 mt-20"></div>
    </div>
  )
}

export default Courses
