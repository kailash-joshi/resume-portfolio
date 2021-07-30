import React from "react";
const allSkills = [
  {
    category: "Languages",
    names: "ReactJS, JavaScript"
  },
  {
    category: "Web Technologies",
    names: "HTML, CSS, Apollo GraphQL, Redux, ES6, Restful API"
  },
  {
    category: "Software/components/SDK/tools",
    names: "Visual Studio Code, TFS, JIRA, SVN, Git, Source-Tree, Putty, WinScp"
  },
  {
    category: "Framework & Environment",
    names:
      "Bootstrap, Material-ui, semantic-ui-react, react-bootstrap,reactstrap, AntD"
  },
  {
    category: "Operating System",
    names: "Windows 7,8,10"
  }
];

export default function AllSkills() {
  return (
    <div className="col-sm-12 mt-3">
      <div className="row border">
        {allSkills.map((skill) => (
          <React.Fragment key={skill.category}>
            <div className="col-sm-6 border py-1 ">{skill.category}</div>
            <div className="col-sm-6  border py-1 textAlignJustify">
              {skill.names}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
