import React,{useState} from 'react'
import CourseList from '../../Components/coursesList/CoursesList'
import Search from '../../Components/search/Search'

const Courses = () => {
    const [search , setSearch] = useState('');
    return (
        <div className='coursesPage' >
            <Search className='search' setSearch={setSearch} />
            <CourseList search={search}/>
        </div>
    )
}

export default Courses
