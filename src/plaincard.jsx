import { useState } from "react";

function PlainCard({ cardName, onDeleteCard, tasks, onAddTask, onDeleteTask }) {
  const [task, setTask] = useState("");

  function handleChange(e) {
    setTask(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== "") {
      onAddTask(task);
      setTask("");
    }
  };

  return (
    <>
      <div className="d-inline-flex">
        <div className="card mt-4 ms-3" style={{ width: "15rem" }}>
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-stat">
              <h5 className="card-title">{cardName}</h5>
              <div>
                <a href="" className="me-2">
                  <i className="fa-solid fa-pencil fs-6 "></i>
                </a>
                <a
                  href="#"
                  className="ms-2"
                  onClick={(e) => {
                    e.preventDefault();
                    onDeleteCard();
                  }}
                >
                  <i className="fa-solid fa-trash text-danger fs-6 "></i>
                </a>
              </div>
            </div>
            <form className="d-flex" role="search" onSubmit={handleSubmit}>
              <input
                type="text"
                className="form-control me-2"
                placeholder="Add todo"
                id="list"
                value={task}
                onChange={handleChange}
              />
              <button
                className="btn btn-outline-primary d-flex justify-content-center align-items-center"
                style={{ width: "30px" }}
                type="submit"
              >
                <i className="fa-solid fa-plus fs-6"></i>
              </button>
            </form>
            {tasks.length > 0 && (
              <ul className="list-group list-group-numbered list-group-flush long-border mt-3">
                {tasks.map((item, index) => (
                  <li
                    key={index}
                    className="list-group-item d-flex align-items-center"
                  >
                    {item}
                    <a
                      href="#"
                      className="ms-auto"
                      onClick={(e) => {
                        e.preventDefault();
                        onDeleteTask(index);
                      }}
                    >
                      <i className="fa-solid fa-pencil fs-6 me-2"></i>
                      <i className="fa-solid fa-trash text-danger fs-6 ms-2"></i>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default PlainCard;
