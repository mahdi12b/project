import React, { useEffect, useState } from "react";
import {useHistory}  from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { toggleEdit, toggleAdd } from "../../JS/actions/lesson";
import { Button } from "react-bootstrap";
import "./Add.css";
const Add = () => {
  const [course, setCourse] = useState({});
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState();
  const dispatch = useDispatch();
  const editCourse = useSelector((state) => state.courseReducer.courseList.listCourses);
  console.log(editCourse)
  const edit = useSelector((state) => state.courseReducer.edit);
  console.log(edit)
  const History = useHistory();
  useEffect(() => {
    edit
      ? setCourse(editCourse)
      : setCourse({video:"" , exercice:"" ,  name: "", matiere: "", courseFor: "" });
  }, [editCourse,edit]);

  const handleChange = (e) => {
      e.preventDefault();
    edit ?
     dispatch(toggleEdit(editCourse._id, course)) 
     : dispatch(toggleAdd(course));
     History.push('/coursesList')
  };

  const handleCourse = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="add">
        <label>Video</label>
        <input name="video" value={course.video} onChange={handleCourse} />
      </div>
      <div className="add">
        <label>Exercice</label>
        <input name="exercice" value={course.exercice} onChange={handleCourse} />
      </div>
      <div className="add">
        <label>name</label>
        <input name="name" value={course.name} onChange={handleCourse} />
      </div>
      <div className="add">
        <label>matiere</label>
        <input name="matiere" value={course.matiere} onChange={handleCourse} />
      </div>
      <div className="add">
        <label>courseFor</label>
        <input name="courseFor" value={course.courseFor} onChange={handleCourse} />
      </div>
      <div className="add">
        <Button
          variant="secondary"
          onClick={(e) => handleChange(e)}
        >
          {edit ? "Edit contact" : "Add contact "}
        </Button>
      </div>
    </div>
  );
};

export default Add;