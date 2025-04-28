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
import Navbars from './components/educators/Navbars'
import Sidebar from './components/educators/Sidebar'
import Footers from './components/educators/Footers'
import Home from './pages/student/Home'
import CourseDetails from './pages/student/CourseDetails'
import CoursesList from './pages/student/CoursesList'
import Player from './pages/student/Player'
import AddCourse from './pages/educator/AddCourse'
import Dashboard from './pages/educator/Dashboard'
import Educator from './pages/educator/Educator'
import MyCourses from './pages/educator/MyCourses'
import Studentsenrolled from './pages/educator/Studentsenrolled'
import AppContext from './Context/AppContext'

const App = () => {
  return (
    <div>
      Hello world
      <Navbar />
      <Hero />
      <CallToAction />
      <Companies />
      <Coursecard />
      <CourseSection />
      <Loading />
      <Rating />
      <Searchbar />
      <Testimonials />
      <Footer />
      <Navbars />
      <Sidebar />
      <Footers />
      <Home />
      <CourseDetails />
      <CoursesList />
      <Player />
      <AddCourse />
      <Dashboard />
      <Educator />
      <MyCourses />
      <Studentsenrolled />
      <AppContext />
    </div>
  )
}

export default App

