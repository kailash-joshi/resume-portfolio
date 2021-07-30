import AllSkills from "./AllSkills";
import MajorSkills from "./MajorSkills";
import "./styles.css";

export default function Skills() {
  return (
    <div className="row p-3">
      <div className="col-sm-12 text-primary fs-5 p-3">SKILLS</div>
      <hr />
      <div className="col-sm-12">
        <div className="row">
          <MajorSkills />
          <AllSkills />
        </div>
      </div>
    </div>
  );
}
