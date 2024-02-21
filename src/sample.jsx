const sample = {
  id: 0,
  company: "",
  position: "",
  duty: "",
  from: "",
  to: "",
};

function WorkField({ work, handler }) {
  return (
    <div className="workField">
      <div className="form-row">
        <label htmlFor={"company-" + work.id}>Company</label>
        <input
          type="text"
          id={"company-" + work.id}
          name="company"
          value={work.company}
          onChange={(e) => handler(e, work.id, "company")}
        />
      </div>
      <div className="form-row">
        <label htmlFor={"position-" + work.id}>Position</label>
        <input
          type="text"
          id={"position-" + work.id}
          name="position"
          value={work.position}
          onChange={(e) => handler(e, work.id, "position")}
        />
      </div>
      <div className="form-row">
        <label htmlFor={"duty-" + work.id}>Duty</label>
        <input
          type="text"
          id={"duty-" + work.id}
          name="duty"
          value={work.duty}
          onChange={(e) => handler(e, work.id, "duty")}
        />
      </div>
      <div className="form-row">
        <label htmlFor={"from-" + work.id}>From</label>
        <input
          type="date"
          id={"from-" + work.id}
          name="from"
          value={work.from}
          onChange={(e) => handler(e, work.id, "from")}
        />
      </div>
      <div className="form-row">
        <label htmlFor={"to-" + work.id}>To</label>
        <input
          type="date"
          id={"to-" + work.id}
          name="to"
          value={work.to}
          onChange={(e) => handler(e, work.id, "to")}
        />
      </div>
    </div>
  );
}

export default function Works({ data, setData }) {
  const changeWork = (e, id, toChange) => {
    const nextWorks = [...data].map((work) => {
      if (work.id === id) {
        const newWork = { ...work };
        newWork[toChange] = e.target.value;
        return { newWork };
      } else return work;
    });
    setData(nextWorks);
  };

  const addWork = () => {
    const nextWorks = [...data];
    nextWorks.push({ ...sample, id: data.length });
    setData(nextWorks);
  };

  const deleteWork = () => {
    const nextWorks = [...data];
    nextWorks.pop();
    setData(nextWorks);
  };

  return (
    <fieldset className="education">
      <legend>Education</legend>
      {data.map((work) => (
        <WorkField key={work.id} work={work} handler={changeWork} />
      ))}
      <button type="button" id="addWork" onClick={addWork}>
        Add
      </button>
      {data.length > 1 && (
        <button type="button" id="deleteWork" onClick={deleteWork}>
          Delete
        </button>
      )}
    </fieldset>
  );
}
