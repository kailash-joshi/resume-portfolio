import "./styles.css";

const employment = [
  {
    designation: "Associate Staff Engineer",
    company: "Nagarro",
    startDate: "Jun 2021",
    endDate: "Present"
  },
  {
    designation: "Senior Software Engineer",
    company: "HCL",
    startDate: "Feb 2020",
    endDate: "Jun 2021"
  },
  {
    designation: "Senior Software Engineer",
    company: "Agreeya",
    startDate: "Jun 2018",
    endDate: "Jan 2020"
  },
  {
    designation: "Associate Staff Engineer",
    company: "Sapient",
    startDate: "Oct 2015",
    endDate: "May 2018"
  }
];
export default function Employment() {
  return (
    <div className="row p-3">
      <div className="col-sm-12 text-primary fs-5 p-3">EMPLOYMENT</div>
      <hr />
      {employment.map((e) => (
        <>
          <div className="col-sm-2 ">
            <div className="dot rounded-circle"></div>
            <div className="line"></div>
          </div>
          <div className="col-sm-10 mb-3">
            <div>
              <strong>{e.designation}</strong>
            </div>
            <div>{e.company}</div>
            <div>
              {e.startDate} - {e.endDate}
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
