const sample = {
  id: 0,
  schoolName: "",
  title: "",
  from: "",
  to: "",
};

function SchoolField({ school, handler }) {
  return (
    <div className="schoolField">
      <div className="form-row">
        <label htmlFor={"schName-" + school.id}>School Name</label>
        <input
          type="text"
          id={"schName-" + school.id}
          name="schoolName"
          value={school.schoolName}
          onChange={(e) => handler(e, school.id, "schoolName")}
        />
      </div>

      <div className="form-row">
        <label htmlFor={"title-" + school.id}>Title</label>
        <input
          type="text"
          id={"title-" + school.id}
          name="title"
          value={school.title}
          onChange={(e) => handler(e, school.id, "title")}
        />
      </div>

      <div className="form-row">
        <label htmlFor={"from-" + school.id}>From</label>
        <input
          type="date"
          id={"from-" + school.id}
          name="from"
          value={school.from}
          onChange={(e) => handler(e, school.id, "from")}
        />
      </div>

      <div className="form-row">
        <label htmlFor={"to-" + school.id}>To</label>
        <input
          type="date"
          id={"to-" + school.id}
          name="to"
          value={school.to}
          onChange={(e) => handler(e, school.id, "to")}
        />
      </div>
    </div>
  );
}

export default function Schools({ data, setData }) {
  const changeSchool = (e, id, toChange) => {
    const nextSchools = [...data].map((sch) => {
      if (sch.id === id) {
        const newSch = { ...sch };
        newSch[toChange] = e.target.value;
        return newSch;
      } else return sch;
    });
    setData(nextSchools);
  };

  const addSchool = () => {
    const nextSchools = [...data];
    nextSchools.push({ ...sample, id: data.length });
    setData(nextSchools);
  };

  const deleteSchool = () => {
    const nextSchools = [...data];
    nextSchools.pop();
    setData(nextSchools);
  };

  return (
    <fieldset className="education">
      <legend>Education</legend>
      {data.map((school) => (
        <SchoolField key={school.id} school={school} handler={changeSchool} />
      ))}
      <button type="button" id="addSchool" onClick={addSchool}>
        Add
      </button>
      {data.length > 1 && (
        <button type="button" id="deleteSchool" onClick={deleteSchool}>
          Delete
        </button>
      )}
    </fieldset>
  );
}
