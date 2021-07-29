import "./styles.css";
import resume_photo from "./resume_photo.png";
export default function Header() {
  return (
    <div className="row headerImg gx-0">
      <div className="col-sm-6 d-flex justify-content-center align-items-center">
        <div className=" row border profilePhotoContainer ">
          <div className="col-sm-12 d-flex justify-content-center align-items-center">
            <img alt="Profile" src={resume_photo} className="profileImage" />
          </div>

          <div className="col-sm-12 d-flex justify-content-center align-items-center">
            <strong>KAILASH JOSHI</strong>
          </div>
          <div className="col-sm-12 d-flex justify-content-center align-items-center ">
            Associate Staff Engineer
          </div>
        </div>
      </div>

      <div className="col-sm-6 d-flex justify-content-center align-items-center">
        <div className="row gx-0">
          <div className="col-sm-12 ">
            <div className="p-3">EXPERIENCE SUMMARY</div>
            <div className="p-3 textAlignJustify">
              Kailash has over <strong>5.8 years</strong> of experience in the
              software industry. He has experience in the development of
              web-based applications using technologies such as{" "}
              <strong>
                ReactJS, JavaScript, Redux, GraphQL, REST Services, Web API
              </strong>
              . He also has experience in requirement gathering, design,
              development, and deployment of software products. He offers
              expertise in agile methodology across financial and banking
              domains
            </div>
          </div>
          <hr />
          <div className="col-sm-12 p-3">
            <div className="row">
              <div className="col-sm-5">Phone</div>
              <div className="col-sm-7">+91 9540003088</div>
              <div className="col-sm-5">Email</div>
              <div className="col-sm-7">joshi.26.kailash@gmail.com</div>
              <div className="col-sm-5">LinkedIn</div>
              <div className="col-sm-7">
                <a
                  href="https://www.linkedin.com/in/joshi-26-kailash"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.linkedin.com/in/joshi-26-kailash
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
