import { useState } from "react";
import "./App.css";
import General from "./components/General";
import Schools from "./components/Schools";
import Works from "./components/Work";

function App() {
  // Initial Objects
  const initialGen = {
    name: "",
    email: "",
    phone: "",
  };
  const initialSch = [
    {
      id: 0,
      schoolName: "",
      title: "",
      from: "",
      to: "",
    },
  ];
  const initialWork = [
    {
      id: 0,
      company: "",
      position: "",
      duty: "",
      from: "",
      to: "",
    },
  ];

  // States
  const [status, setStatus] = useState("typing");

  const [gen, setGen] = useState(initialGen);
  const [schools, setSchools] = useState(initialSch);
  const [works, setWorks] = useState(initialWork);

  const cv = { ...gen, schools: schools, works: works };

  const submitHandler = (e) => {
    e.preventDefault();
    setStatus("preview");
  };

  if (status === "typing") {
    return (
      <form onSubmit={submitHandler}>
        <General data={gen} setData={setGen} />
        <Schools data={schools} setData={setSchools} />
        <Works data={works} setData={setWorks} />
        <button id="btn">Preview</button>
      </form>
    );
  }

  if (status === "preview") {
    return (
      <div className="previewDiv">
        <h1>CV Preview</h1>
        <div className="previewRow">
          <h2>Name</h2>
          <h3>{cv.name}</h3>
        </div>
        <div className="previewRow">
          <h2>Email</h2>
          <h3>{cv.email}</h3>
        </div>
        {cv.phone !== "" && (
          <div className="previewRow">
            <h2>Phone</h2>
            <h3>{cv.phone}</h3>
          </div>
        )}

        {cv.schools[0].schoolName !== "" && (
          <>
            {cv.schools.map((school) => (
              <div key={school.id} className="previewField">
                <div className="previewRow">
                  <h2>School</h2>
                  <h3>{school.schoolName}</h3>
                </div>
                <div className="previewRow">
                  <h2>Title</h2>
                  <h3>{school.title}</h3>
                </div>
                <div className="previewRow">
                  <h2>From</h2>
                  <h3>{school.from}</h3>
                </div>
                <div className="previewRow">
                  <h2>To</h2>
                  <h3>{school.to}</h3>
                </div>
              </div>
            ))}
          </>
        )}

        {cv.works[0].company !== "" && (
          <>
            {cv.works.map((work) => (
              <div key={work.id} className="previewField">
                <div className="previewRow">
                  <h2>Company</h2>
                  <h3>{work.company}</h3>
                </div>
                <div className="previewRow">
                  <h2>Position</h2>
                  <h3>{work.position}</h3>
                </div>
                <div className="previewRow">
                  <h2>Duty</h2>
                  <h3>{work.duty}</h3>
                </div>
                <div className="previewRow">
                  <h2>From</h2>
                  <h3>{work.from}</h3>
                </div>
                <div className="previewRow">
                  <h2>To</h2>
                  <h3>{work.to}</h3>
                </div>
              </div>
            ))}
          </>
        )}

        <button type="button" onClick={() => setStatus("submit")}>
          Submit
        </button>
        <button type="button" onClick={() => setStatus("typing")}>
          Edit
        </button>
      </div>
    );
  }

  if (status === "submit") {
    return (
      <div className="submitDiv">
        <h1>Thank You for your submission!</h1>
      </div>
    );
  }
}

export default App;
