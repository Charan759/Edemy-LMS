import React from 'react'
import Navbar from './components/students/Navbar'
import Hero from './components/students/Hero'
import CallToAction from './components/students/CallToAction'
import Companies from './components/students/Companies'
import Coursecard from './components/students/Coursecard'
import CourseSection from './components/students/CourseSection'
import Loading from './components/students/Loading'
import Rating from './components/students/Rating'
import Searchbar from './components/students/Searchbar'
import Testimonials from './components/students/Testimonials'
import Footer from './components/students/Footer'
import Sidebar from './components/educators/Sidebar'
import Footers from './components/educators/Footers'
import Home from './pages/student/Home'
import CoursesList from './pages/student/CoursesList'
import CourseDetails from './pages/student/CourseDetails';
import Player from './pages/student/Player'
import AddCourse from './pages/educator/AddCourse'
import Dashboard from './pages/educator/Dashboard'
import Educator from './pages/educator/Educator'
import MyCourses from './pages/educator/MyCourses'
import Studentsenrolled from './pages/educator/Studentsenrolled'
import Myenrollments from './pages/student/Myenrollments'
import { Route, Routes, useMatch } from 'react-router-dom'

const App = () => {

  const isEducatorRoute = useMatch('/educator/*')
    
  return (
    <div className='text-default min-h-screen bg-white'>
      {!isEducatorRoute && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course-list' element={<CoursesList />} />
        <Route path='/course-list/:input' element=
          {<CoursesList />} />
        <Route path='/CourseDetails/:id' element={<CourseDetails />} />
        <Route path='/my-enrollments' element={<Myenrollments />} />
        <Route path='/player/:courseId' element={<Player />} />
        <Route path='/loading/:path' element={<Loading />} />
        <Route path='/educator' element={< Educator />}>
          
          <Route path='Dashboard'index element={<Dashboard />} />
          <Route path='add-course' element={<AddCourse />} />
          <Route path='mycourses' element={<MyCourses />} />
          <Route path='student-enrolled' element=
            {<Studentsenrolled />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App

