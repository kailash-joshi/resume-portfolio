import React from "react";

const majorSkills = [
  { name: "ReactJS", rating: "90" },
  { name: "JavaScript", rating: "85" },
  { name: "HMTL", rating: "80" },
  { name: "CSS", rating: "80" }
];
export default function MajorSkills() {
  return (
    <>
      {majorSkills.map((skill) => (
        <React.Fragment key={skill.name}>
          <div className="col-sm-6 my-1">{skill.name}</div>
          <div className="col-sm-6">
            <div className="progress">
              <div
                className={`progress-bar w-${skill.rating}`}
                role="progressbar"
                aria-valuenow={Number(`${skill.rating}`)}
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </React.Fragment>
      ))}
    </>
  );
}
