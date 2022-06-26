import React from "react";
import "./styles.css";

export default function project1(prop) {
  return (
    <div>
      <div className="container1">
        <div className="con1">
          <img src={prop.img1} alt="project" className="image1" />
        </div>
        <div className="project_name1">
          <h3>{prop.title}</h3>
          <p>{prop.desc}</p>
        </div>
      </div>
    </div>
  );
}
