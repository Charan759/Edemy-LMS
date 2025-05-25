import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import humanizeDuration from "humanize-duration";

export const AppContext = createContext();

export const AppContextProvider = (props)=>{

    const currency = import.meta.env.VITE_CURRENCY
    const navigate = useNavigate()

    const [allCourses, setAllCourses] = useState([])
    const [isEducator, setIsEducator] = useState(true)
    const [enrolledCourses, setEnrolledCourses] = useState([])

    //Fetch all courses
    const fetchAllCourses = async()=>{
        setAllCourses(dummyCourses);
    }

    //Function to caluclate avertage rating of course
    const caluclateRating =(course)=>{
            if(course.courseRatings.length === 0){
                return 0;
            }
            let totalRating = 0
            course.courseRatings.forEach(rating => {
                totalRating += rating.rating // total rating = total rating + rating * rating (total rating = 5 + 2 * 2)
            })
            return totalRating / course.courseRatings.length
    }

    //Function to caluclate Course chapter time
    const caluclateChapterTime = (chapter) =>{
        let time = 0;
        chapter.chapterContent.map((lecture)=> time += lecture.lectureDuration)
        return humanizeDuration(time * 60 * 1000, {units: ["h", "m"]})
    }
    //Function to caluclate Course Duration
    const calculateCourseDuration = (course)=>{
        let time = 0;
        
        course.courseContent.map((chapter)=> chapter.chapterContent.map(
            (lecture) => time += lecture.lectureDuration
        ))
        return humanizeDuration(time * 60 * 1000, {units: ["h", "m"]})
    }
    //Function to caluclate the no. of lectures of a course
    const caluclateNoOfLectures = (course)=> {
        let totalLectures = 0;
        course.courseContent.forEach(chapter => {
            if(Array.isArray(chapter.chapterContent)){
                totalLectures += chapter.chapterContent.length
            }
        });
        return totalLectures;
    }

    //Fetch User Enrolled Courses
    const fetchUserEnrolledCourses = async ()=>{
        setEnrolledCourses(dummyCourses)
    }


    useEffect(()=>{
        fetchAllCourses();
        fetchUserEnrolledCourses()
    },[])
    const value ={
        currency, allCourses, navigate, caluclateRating,
        isEducator, setIsEducator, caluclateNoOfLectures,
        calculateCourseDuration, caluclateChapterTime,
        enrolledCourses, fetchUserEnrolledCourses
    }
    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}