import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux"


import {getAllCourses, toggleAdd} from '../../JS/actions/lesson'


import  Load from '../spinner/Spinner'
import Course from '../course/Course'



import './CoursesList.css'
const CourseList = ({search}) => {
    //hook
    //useState
    //useselector
    
    const courseList = useSelector(state=>state.courseReducer.courseList.listCourses)
    console.log(courseList)
    console.log(1)
    const loadCourse = useSelector(state=>state.courseReducer.loadCourse)

    //usedispatch
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllCourses());
    }, []);
    
    return (
        <div className='coursesList'>
             <Link to="/coursesList/add"> <button onClick={()=>dispatch(toggleAdd())}>addcontact</button></Link>
           {/*loadCourse ?
           <Load/>
           :
           courseList.filter(course=>
            course.name.toLowerCase().includes(search.toLowerCase())
            ||
            course.courseFor.toLowerCase().includes(search.toLowerCase())
           )
           .map(el=>
           <div>
           { <Course key={el._id} course={el} courseCard={true}/> }
           </div>
            )
            
           */ }
            
        </div>
        
    )
}

export default CourseList
