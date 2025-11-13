import React from 'react'
const Aboutus = () => {
  return (
    // <div id='about' className=''>
    //   <div className='h-[100%] w-[100%] back1 pb-10 pt-10 '>
    //     <div className='flex text-6xl text-white justify-center p-10' > ABOUT US </div>
    //     <div className="bg-white h-1 opacity-15 mt-0 ml-[25%] mr-[25%]"></div>
    //     <div className='p-20'>
    //       <p className='text-white justify-center pl-[15%] pr-[15%] text-2xl'>
    //         <span className='block text-center text-4xl mt-5 mb-10 underline'>JGVFX Online </span>
    //         JGVFX Online is a cutting-edge digital learning platform dedicated to empowering the next generation of creators in Visual Effects (VFX), Animation, Game Design, and Artificial Intelligence (AI).

    //         Our mission is to bridge the gap between creativity and technology through high-quality, industry-relevant education. Whether you're a student, aspiring artist, or working professional, our programs are designed to help you build real-world skills with hands-on training and expert mentorship.
    //         <span className='block mt-2 mb-2 underline'>We offer:</span>
    //         VFX & Animation Training – Master the art of visual storytelling using industry tools like After Effects, Houdini, Maya, and Nuke.
    //         Game Development Courses – Dive into Unreal Engine to design immersive gaming experiences.
    //         AI for Creatives – Learn how artificial intelligence is transforming the creative industry with tools for image generation, video production, and automation.
    //         <span className='block mt-2'>At JGVFX Online, we believe in learning by doing. Our project-based learning approach, along with access to experienced mentors and a vibrant community, ensures you don’t just learn—you create, innovate, and excel</span>
    //       </p>
    //     </div>
    //   </div>
    //   <div className="bg-white h-0.5 opacity-15 left-0"></div>
    // </div>
    <div id='about' className='w-full back1 pt-15'>
      <div className='text-center text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-10'>
        ABOUT US
      </div>

      <div className="bg-white h-1 opacity-20 w-3/4 mx-auto mb-10"></div>

      <div className='px-6 sm:px-10 md:px-20'>
        <div className='max-w-4xl mx-auto text-white text-lg sm:text-xl leading-relaxed'>
          <h2 className='text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold underline mb-10'>
            JGVFX Online
          </h2>

          <p className='mb-5'>
            JGVFX Online is a cutting-edge digital learning platform dedicated to empowering the next generation of creators in Visual Effects (VFX), Animation, Game Design, and Artificial Intelligence (AI).
          </p>

          <p className='mb-5'>
            Our mission is to bridge the gap between creativity and technology through high-quality, industry-relevant education. Whether you're a student, aspiring artist, or working professional, our programs are designed to help you build real-world skills with hands-on training and expert mentorship.
          </p>

          <p className='mb-2 underline font-medium'>We offer:</p>
          <ul className='list-disc list-inside ml-4 mb-5 space-y-2'>
            <li>
              <strong>VFX & Animation Training –</strong> Master the art of visual storytelling using industry tools like After Effects, Houdini, Maya, and Nuke.
            </li>
            <li>
              <strong>Game Development Courses –</strong> Dive into Unreal Engine to design immersive gaming experiences.
            </li>
            <li>
              <strong>AI for Creatives –</strong> Learn how artificial intelligence is transforming the creative industry with tools for image generation, video production, and automation.
            </li>
          </ul>

          <p>
            At JGVFX Online, we believe in learning by doing. Our project-based learning approach, along with access to experienced mentors and a vibrant community, ensures you don’t just learn—you create, innovate, and excel.
          </p>
        </div>
      </div>

      <div className="bg-white h-0.5  w-full mt-15"></div>
    </div>
  )
}

export default Aboutus
