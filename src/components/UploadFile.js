import React, { Component } from "react";
// import axios from "axios";
import firebase from "firebase";

export class UploadFile extends Component {
  constructor() {
    super();
    this.state = {
      uploadValue: 0,
      picture: "https://img.icons8.com/all/500/upload.png",
      dlFile: {},
    };
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleUpload = (event) => {
    const file = event.target.files[0];
    const storageRef = firebase.storage().ref(`${file.name}`);
    const task = storageRef.put(file);

    task.on(
      "state_changed",
      (snapshot) => {
        let percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        this.setState({
          uploadValue: percentage,
        });
      },
      (error) => {
        console.log(error.message);
      },
      () => {
        this.setState({
          uploadValue: 100,
          picture:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Microsoft_Excel_2013_logo.svg/1200px-Microsoft_Excel_2013_logo.svg.png",
        });
      }
    );
  };
  handleSubmit = (event) => {
    const fileName = event.target.files[0].name;
    const url = `http://localhost:8000/file/${fileName}`;
    fetch(url);
  };
  render() {
    return (
      <>
        <div
          style={{
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            height: "450px",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            WebkitAlignItems: "center",
          }}
          className="col-md-8"
        >
          <div
            className="card-header"
            style={{ width: "100%", background: "none", textAlign: "center" }}
          >
            Upload a .xlsx, .csv or a .json file
          </div>
          <img
            src={require("../csv.png")}
            alt="Preview"
            style={{
              display: "flex",
              marginTop: "20px",
              width: "200px",
            }}
          />
          <br />
          <input
            className="btn btn-success btn-block"
            type="file"
            id="file"
            handleSubmit
            onChange={this.handleUpload}
            style={{
              outline: "none",
              border: "none",
            }}
            required
          />
          <br />
          <input
            style={{ height: "40px" }}
            className="btn btn-primary btn-block"
            type="submit"
          />
          <p>{Math.floor(this.state.uploadValue)}%</p>
          <br />
        </div>
      </>
    );
  }
}
