import React from "react";
import "./styles.css";

export default function project2(prop) {
  return (
    <div>
      <div className="container2">
        <div className="con2">
          <img src={prop.img2} alt="project" className="image2" />
        </div>

        <div className="project_name2">
          <h3>{prop.title}</h3>
          <p>{prop.desc}</p>
        </div>
      </div>
    </div>
  );
}
