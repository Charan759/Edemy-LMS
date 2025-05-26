import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../Context/AppContext'
import { useParams, useSearchParams } from 'react-router-dom'
import { assets } from '../../assets/assets'
import humanizeDuration from 'humanize-duration'
import Youtube from 'react-youtube'
import YouTube from 'react-youtube'
import Footers from '../../components/educators/Footers'
import Rating from '../../components/students/Rating'

const Player = () => {

  const { enrolledCourses, caluclateChapterTime } = useContext(AppContext)
  const { courseId } = useParams()
  const [courseData, setCourseData] = useState(null)
  const [openSection, setOpenSection] = useState({})
  const [playerData, setPlayerData] = useState(null)


  const getCourseData = () => {
    enrolledCourses.find((course) => {
      if (course._id === courseId) {
        setCourseData(course)
      }
    })
  }
  const toggleSection = (index) => {
    setOpenSection((prev) => (
      {
        ...prev,
        [index]: !prev[index],
      }
    ));
  };
  useEffect(() => {
    getCourseData()
  }, [enrolledCourses])
  return (
    <>
      <div className='  p-4 sm:p-10 flex flex-col-reverse
        md:grid md:grid-cols-2 gap-10 md:px-36'>
        {/*left columns */}
        <div className=' text-gray-800'>
          <h2 className=' text-xl font-semibold'>Course Struchure</h2>

          <div className=' pt-5'>
            {courseData && courseData.courseContent.map((chapter, index) => (
              <div key={index} className='border border-gray-300 bg-white mb-2 rounded'>
                <div className='flex items-center justify-between px-4 py-3 cursor-pointer select-none
                            ' onClick={() => toggleSection(index)}>
                  <div className='flex items-center gap-2'>
                    <img src={assets.down_arrow_icon} alt="down_arrow_icon"
                      className={`transition-transform duration-300 ${openSection[index] ? '-rotate-90' : 'rotate-0'}`} />

                    <p className='font-medium md:text-base text-sm'> {chapter.chapterTitle} </p>
                  </div>
                  <p className='text-sm md:text-default'> {chapter.chapterContent.length} lectures -
                    {caluclateChapterTime(chapter)} </p>
                </div>
                <div className={`overflow-hidden transition-all duration-300  
                             ${openSection[index] ? 'max-h-96' : 'max-h-0'}`}>
                  <ul className='list-disc md:pl-10 pl-4 pr-4 py-2 text-gray-600 
                              border-t border-gray-300'>
                    {chapter.chapterContent.map((lecture, i) => (
                      <li key={i} className=' flex items-start gap-2 py-1'>
                        <img src={false ? assets.blue_tick_icon : assets.play_icon} alt="playicon" className='w-4 
                                    h-4 mt-1' />
                        <div className=' flex items-center justify-between
                                    w-full text-gray-800 text-xs md:text-default'>
                          <p> {lecture.lectureTitle} </p>
                          <div className='flex gap-2'>
                            {lecture.lectureUrl && <p
                              onClick={() => setPlayerData({
                                ...lecture, chapter: index + 1, lecture: i + 1
                              })}
                              className='text-blue-500 cursor-pointer'>Watch</p>}
                            <p> {humanizeDuration(lecture.lectureDuration * 60 * 1000,
                              { units: ['h', 'm'] })} </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className='flext items-center gap-2 py-3 mt-10'>
            <h1 className='text-xl font-bold'>Rate this course</h1>
            <Rating intialRating={0}/>
          </div>
        </div>

        {/*right columns */}
        <div className='md:mt-10'>
          {playerData ? (
            <div>
              <YouTube videoId={playerData.lectureUrl.split('/').pop()}
               iframeClassName='w-full aspect-video' />
               <div className='flex justify-between items-center mt-1'>
                <p>{playerData.chapter}.{playerData.lecture} {playerData.lectureTitle}
                </p>
                <button className='text-blue-600'>{false ? 'completed' : 'Mark Completd'}</button>
               </div>
            </div>
          )
          :
          <img src={courseData ? courseData.courseThumbnail : ''} alt="" />
          }
        </div>
      </div>
      <Footers />
    </>
  )
}

export default Player
