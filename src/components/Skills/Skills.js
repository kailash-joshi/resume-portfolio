import "./styles.css";

export default function Skills() {
  return (
    <div className="col-sm-6">
      <div className="row p-3">
        <div className="col-sm-12 text-primary fs-5 p-3">SKILLS</div>
        <hr />
        <div className="col-sm-12">
          <div className="row">
            <div className="col-sm-6 ">ReactJS</div>
            <div className="col-sm-6">
              <div className="progress">
                <div
                  className="progress-bar w-85"
                  role="progressbar"
                  aria-valuenow="85"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="col-sm-6">JavScript</div>
            <div className="col-sm-6">
              <div className="progress">
                <div
                  className="progress-bar w-80"
                  role="progressbar"
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="col-sm-6">HTML</div>
            <div className="col-sm-6">
              <div className="progress">
                <div
                  className="progress-bar w-75"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="col-sm-6">CSS</div>
            <div className="col-sm-6">
              <div className="progress">
                <div
                  className="progress-bar w-75"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="col-sm-12 ">
              {/* <table class="table border">
                <tbody>
                  <tr>
                    <th scope="row">Languages</th>
                    <td>ReactJS</td>
                    <td>JavScript</td>
                  </tr>
                  <tr>
                    <th scope="row">Web Technologies</th>
                    <td>HTML</td>
                    <td>CSS</td>
                    <td>Apollo GraphQL</td>
                    <td>Redux</td>
                    <td>ES6</td>
                    <td>Restful API</td>
                  </tr>
                  <tr>
                    <th scope="row">Software/components/SDK/tools</th>
                    <td>Visual Studio Code</td>
                    <td>TFS</td>
                    <td>JIRA</td>
                    <td>SVN</td>
                    <td>Git</td>
                    <td>Source-Tree</td>
                    <td>Putty</td>
                    <td>WinScp</td>
                  </tr>
                  <tr>
                    <th scope="row">Databases</th>
                    <td>Sybase SQL</td>
                    <td>MongoDB</td>
                  </tr>
                  <tr>
                    <th scope="row">Framework & Environment</th>
                    <td>Bootstrap</td>
                    <td>Material-ui</td>
                    <td>semantic-ui-react</td>
                    <td>react-bootstrap</td>
                    <td>reactstrap</td>
                    <td>AntD</td>
                  </tr>
                  <tr>
                    <th scope="row">Operating System</th>
                    <td>Windows 7, 8, 10</td>
                  </tr>
                </tbody>
              </table> */}
              <div className="row border">
                <div className="col-sm-6 border-end border-bottom">
                  Languages
                </div>
                <div className="col-sm-6  border-bottom">
                  ReactJS, JavScript
                </div>

                <div className="col-sm-6 border-end  border-bottom">
                  Web Technologies
                </div>
                <div className="col-sm-6 border-bottom">
                  HTML, CSS, Apollo GraphQL, Redux, ES6, Restful API
                </div>
                <div className="col-sm-6 border-end  border-bottom">
                  Software/components/SDK/tools
                </div>
                <div className="col-sm-6 border-bottom">
                  Visual Studio Code, TFS, JIRA, SVN, Git, Source-Tree, Putty,
                  WinScp
                </div>
                <div className="col-sm-6 border-end border-bottom">
                  Framework & Environment
                </div>
                <div className="col-sm-6 border-bottom">
                  Bootstrap, Material-ui, semantic-ui-react, react-bootstrap,
                  reactstrap, AntD
                </div>
                <div className="col-sm-6 border-end ">Operating System</div>
                <div className="col-sm-6 ">Windows 7,8,10</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
