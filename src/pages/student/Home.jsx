import React from 'react'
import Hero from '../../components/students/Hero'
import Companies from '../../components/students/Companies'
import CourseSection from '../../components/students/CourseSection'
import Navbar from '../../components/students/Navbar'
import Testimonials from '../../components/students/Testimonials'
import CallToAction from '../../components/students/CallToAction'
import Footers from '../../components/educators/Footers'
import CoursesList from './CoursesList'

const Home = () => {
  return (
    <div className='flex flex-col items-center space-y-7 text-center'>
      <Hero />
      <Companies />
      <CourseSection />
      <Testimonials />
      <CallToAction />
      <Footers />
    </div>
  )
}

export default Home
