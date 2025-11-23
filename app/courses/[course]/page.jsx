import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { coursesData } from '@/app/lib/coursesData'
import { notFound } from 'next/navigation'

export default function CoursePage({ params }) {
  const { course } = params
  const courseData = coursesData.find(c => c.slug === course)

  if (!courseData) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>

          {/* Course header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{courseData.title}</h1>
            <div className="bg-white h-1 opacity-20 mx-auto w-1/4 mb-8" />
          </div>

          {/* Course content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="order-2 md:order-1">
              <Image
                src={courseData.image}
                alt={courseData.title}
                className="w-full h-auto rounded-2xl shadow-2xl border-2 border-gray-700"
                width={500}
                height={300}
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">Course Overview</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                {courseData.description}
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Hands-on projects and real-world applications</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Expert instructors with industry experience</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Flexible learning schedule</span>
                </div>
              </div>
            </div>
          </div>

          {/* Call to action */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-6">Ready to Start Your Journey?</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our community of creative professionals and take your skills to the next level.
              Enroll now and unlock your potential in the world of digital media and design.
            </p>
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSfWb-pRaLL7tEYDItzgyQJcbBWa2NfugxqLllK8aPdcCgTUOg/viewform?usp=header"
              target="_blank"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return coursesData.map((course) => ({
    course: course.slug,
  }))
}
