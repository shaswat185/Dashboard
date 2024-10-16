import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTableColumns } from "@fortawesome/free-solid-svg-icons";
import { faBarsProgress } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { faSuitcase } from "@fortawesome/free-solid-svg-icons";
const Vertical = () => {
  return (
    <>
      <div
        className="card rounded-0 shadow border-0 "
        style={{ width: "240px", height: "100vh" }}
      >
        <nav className="nav flex-column my-4 ms-3 gap-3">
          <a
            className="nav-link text-secondary active"
            aria-current="page"
            href="#"
          >
            <FontAwesomeIcon icon={faTableColumns} />
            <span className="ms-4">Dashboard</span>
          </a>
          <a className="nav-link text-secondary" href="#">
            <FontAwesomeIcon icon={faBarsProgress} />
            <span className="ms-4">Task</span>
          </a>
          <a className="nav-link text-secondary" href="#">
            <FontAwesomeIcon icon={faUser} />
            <span className="ms-4">&nbsp;User</span>
          </a>
          <a className="nav-link text-secondary">
            <FontAwesomeIcon icon={faCalendarDays} />{" "}
            <span className="ms-4">Calender</span>
          </a>
          <a className="nav-link text-secondary">
            <FontAwesomeIcon icon={faFile} />
            <span className="m-4">&nbsp;&nbsp;Reports</span>
          </a>
          <a className="nav-link text-secondary">
            <FontAwesomeIcon icon={faSuitcase} />
            <span className="ms-4">&nbsp;Jobs</span>
          </a>
          <a className="nav-link text-secondary">
            <FontAwesomeIcon icon={faFolderOpen} />
            <span className="ms-4">Document</span>
          </a>
        </nav>
      </div>
    </>
  );
};

export default Vertical;
