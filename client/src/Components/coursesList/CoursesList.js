import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Card, Avatar, Col, Typography, Row } from "antd";
import axios from "axios";
import moment from "moment";
import { Link } from "react-router-dom";
import { Button } from "antd";

import Search from "../search/Search";
//import video from "../../../../models/video";

const { Title } = Typography;
const { Meta } = Card;

function ListCourses() {
  const professor = useSelector((state) => state.professorReducer);
  const [Videos, setVideos] = useState([]);
  const [search, setSearch] = useState("");
  console.log(Videos);
  const deleteCourse = (id) => {
    axios.delete(`/api/video/coursesList/${id}`);
    setVideos(
      Videos.filter((video) => {
        return video._id != id;
      })
    );
  };

  useEffect(() => {
    axios.get("/api/video/getVideos").then((response) => {
      if (response.data.success) {
        console.log(response.data.videos);
        setVideos(response.data.videos);
      } else {
        alert("Failed to get videos");
      }
    });
  }, []);

  const renderCards = Videos.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  ).map((video, index) => {
    var minutes = Math.floor(video.duration / 60);
    var seconds = Math.floor(video.duration - minutes * 60);
    return (
      <Col style={{ margin: 50 }} col={6} md={8} xs={18} key={video._id}>
        <div style={{ position: "relative" }}>
          <Link to={`/video/${video._id}`}>
            <img style={{ width: "100%" }} src="" alt="hahah" />
            <div
              className="duration"
              style={{
                bottom: 0,
                right: 0,
                position: "absolute",
                margin: "4px",
                color: "#fff",
                backgroundColor: "rgba(17, 17, 17, 0.8)",
                opacity: 0.8,
                padding: "2px 4px",
                borderRadius: "2px",
                letterSpacing: "0.5px",
                fontSize: "12px",
                fontWeight: "500",
                lineHeight: "12px",
              }}
            >
              <span>
                {minutes} : {seconds}
              </span>
            </div>
          </Link>
        </div>
        <br />
        <Meta
          ///// avataar image

          title={video.title}
        />
        <span>{video.description}</span>
        <span style={{ marginLeft: "3rem" }}>{video.views}</span>
        <span> {moment(video.createdAt).format("MMM Do YY")}</span>
        {professor.isAuthProfessor &&
        professor.professor._id === video.professor_id ? (
          <div>
            {" "}
            <Button
              onClick={() => {
                console.log("aa");
                alert(`${video._id}`);
                deleteCourse(video._id);
              }}
            >
              aaaaaaaaaaaaaa
            </Button>
            <Button>
              <Link to={`/update/${video._id}`}>Edit Course</Link>
            </Button>
          </div>
        ) : null}
      </Col>
    );
  });

  return (
    <div style={{ width: "85%", margin: "3rem auto" }}>
      <Title level={2}>Recomended</Title>
      <Search className="search" setSearch={setSearch} />
      <Row style={{ margin: 50 }}>{renderCards}</Row>
    </div>
  );
}

export default ListCourses;

{
  /*import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getAllCourses, toggleAdd } from "../../JS/actions/lesson";

import Load from "../spinner/Spinner";
import Course from "../course/Course";

import "./CoursesList.css";
const CourseList = ({ search }) => {
//hook
//useState
//useselector

const courseList = useSelector(
(state) => state.courseReducer.courseList.listCourses
);

const loadCourse = useSelector((state) => state.courseReducer.loadCourse);

const professorAuth = useSelector(
(state) => state.professorReducer.isAuthProfessor
);

//usedispatch
const dispatch = useDispatch();
useEffect(() => {
dispatch(getAllCourses());
}, []);

return (
<div className="coursesList">
    {professorAuth ? (
    <Link to="/UploadCourse">
        {" "}
        <button onClick={() => dispatch(toggleAdd())}>Add Course</button>
    </Link>
    ) : null}
    {loadCourse ? (
    <Load />
    ) : (
    courseList &&
    courseList
        .filter(
        (course) =>
            course.name.toLowerCase().includes(search.toLowerCase()) ||
            course.courseFor.toLowerCase().includes(search.toLowerCase())
        )
        .map((el) => (
        <div>{<Course key={el._id} course={el} courseCard={true} />}</div>
        ))
    )}
</div>
);
};

export default CourseList;*/
}
