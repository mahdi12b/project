import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Typography, Button, Form, message, Input, Icon } from "antd";
import Dropzone from "react-dropzone";
import { useHistory } from "react-router-dom";
import axios from "axios";

const { Title } = Typography;
const { TextArea } = Input;

const Private = [
  { value: 0, label: "Private" },
  { value: 1, label: "Public" },
];

const Catogory = [
  { value: 0, label: "Film & Animation" },
  { value: 0, label: "Autos & Vehicles" },
  { value: 0, label: "Music" },
  { value: 0, label: "Pets & Animals" },
  { value: 0, label: "Sports" },
];

const UploadVideo = (props) => {
  const [title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [privacy, setPrivacy] = useState(0);
  const [Categories, setCategories] = useState("Any");
  const [FilePath, setFilePath] = useState("");
  const [Duration, setDuration] = useState("");
  const [Thumbnail, setThumbnail] = useState("");
  console.log(Thumbnail);

  let history = useHistory();

  const professor = useSelector((state) => state.professorReducer);
  console.log(professor);
  const student = useSelector((state) => state.studentReducer);
  console.log(professor);
  const handleChangeTitle = (event) => {
    setTitle(event.currentTarget.value);
  };
  //////
  const handleChangeDecsription = (event) => {
    console.log(event.currentTarget.value);

    setDescription(event.currentTarget.value);
  };
  ////
  const handleChangeOne = (event) => {
    setPrivacy(event.currentTarget.value);
  };
  /////
  const handleChangeTwo = (event) => {
    setCategories(event.currentTarget.value);
  };

  //////
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(professor.isAuthProfessor);

    if (professor.isAuthProfessor === false) {
      return alert("Please Log in First");
    }
    if (
      title === "" ||
      Description === "" ||
      Categories === "" ||
      FilePath === ""
      //|| Duration === ""
    ) {
      alert("Please first fill all the fields");
    }

    const variables = {
      professor_id: professor.professor._id,
      title: title,
      description: Description,
      privacy: privacy,
      filePath: FilePath,
      category: Categories,
      // duration: Duration,
    };

    axios.post("/api/video/UploadCourse", variables).then((response) => {
      if (response.data.success) {
        alert("video Uploaded successfully");
        props.history.push("/coursesList");
      } else {
        alert("Failed to upload video");
      }
    });
  };

  ///

  const onDrop = (files) => {
    let formData = new FormData();
    const config = {
      header: { "content-type": "multipart/form-data" },
    };
    console.log(files);
    formData.append("file", files[0]);

    axios
      .post("/api/video/uploadfiles", formData, config)

      .then((response) => {
        if (response.data.success) {
          let variable = {
            filePath: response.data.filePath,
            fileName: response.data.fileName,
          };
          setFilePath(response.data.filePath);
          setDuration(response.data.fileDuration);
          setThumbnail(response.data.thumbsFilePath);
          // generate thumbnail with this file path
        } else {
          alert("failed to save the video in server");
        }
      });
  };

  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <Title level={2}> Upload Video</Title>
      </div>

      <Form onSubmit={onSubmit}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {
            <Dropzone onDrop={onDrop} multiple={false} maxSize={800000000}>
              {({ getRootProps, getInputProps }) => (
                <div
                  style={{
                    width: "300px",
                    height: "240px",
                    border: "1px solid lightgray",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  {...getRootProps()}
                >
                  <input {...getInputProps()} />
                  <span type="plus" style={{ fontSize: "3rem" }}>
                    +
                  </span>
                </div>
              )}
            </Dropzone>
          }

          {Thumbnail !== "" && (
            <div>
              <img src={`http://localhost:4000/${Thumbnail}`} alt="haha" />
            </div>
          )}
        </div>

        <br />
        <br />
        <label>Title</label>
        <br />
        <Input onChange={handleChangeTitle} value={title} />
        <br />
        <br />
        <label>Description</label>
        <br />
        <TextArea onChange={handleChangeDecsription} value={Description} />
        <br />
        <br />

        <select onChange={handleChangeOne}>
          {Private.map((item, index) => (
            <option key={index} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        <br />
        <br />

        <select onChange={handleChangeTwo}>
          {Catogory.map((item, index) => (
            <option key={index} value={item.label}>
              {item.label}
            </option>
          ))}
        </select>
        <br />
        <br />

        <Button type="primary" size="large" onClick={onSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default UploadVideo;