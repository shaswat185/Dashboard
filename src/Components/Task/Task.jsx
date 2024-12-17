import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "./task.css";

const Task = () => {
  const tasks = Array.from({ length: 10 }, (_, i) => `Task ${i + 1}`); // Generate 10 tasks

  return (
    <>
      <div className="container-fluid">
        <div className="task">
          <div className="card">
            <div className="card-body">
              <ul className="list-group">
                <div className="h3 ms-3 p-3 fw-bold">
                  Welcome back
                  <br />
                  <span className="fw-normal fs-6">
                    Here's a list of your tasks for this month!
                  </span>
                </div>

                {tasks.map((task, index) => (
                  <li className="list-group-item" key={index}>
                    <input
                      className="form-check-input me-1 out"
                      type="checkbox"
                      value=""
                      id={`checkbox${index}`}
                    />
                    <label className="form-check-label" htmlFor={`checkbox${index}`}>
                      {task}
                    </label>
                  </li>
                ))}
              </ul>
             <button type="submit " className="btn btn-primary float-end m-3 p-2">Save</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Task;
