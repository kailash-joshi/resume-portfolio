import Header from "./components/Header/Header";
import "./styles.css";

export default function App() {
  return (
    <div className="container-fluid p-5 bgColor">
      <div className="row border rounded shadow-lg">
        <div className="col-sm-12 p-0">
          <Header />
        </div>
        <div className="col-sm-12">header</div>
        <div className="col-sm-12">header</div>
        <div className="col-sm-12">header</div>
      </div>
    </div>
  );
}