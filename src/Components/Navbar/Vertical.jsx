import React from "react";
import { Link } from "react-router-dom";
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
          <Link to="/dashboard"
            className="nav-link text-secondary active"
            aria-current="page"
            href="#"
          >
            <FontAwesomeIcon icon={faTableColumns} />
            <span className="ms-4">Dashboard</span>
          </Link>
          <Link to="/task" className="nav-link text-secondary">
            <FontAwesomeIcon icon={faBarsProgress} />
            <span className="ms-4">Task</span>
          </Link>
          <a className="nav-link text-secondary" href="#">
            <FontAwesomeIcon icon={faUser} />
            <span className="ms-4">&nbsp;User</span>
          </a>
          <Link to="/calender" className="nav-link text-secondary">
            <FontAwesomeIcon icon={faCalendarDays} />{" "}
            <span className="ms-4">Calender</span>
          </Link>
          <Link to="/report" className="nav-link text-secondary">
            <FontAwesomeIcon icon={faFile} />
            <span className="m-4">&nbsp;&nbsp;Reports</span>
          </Link>
          <a className="nav-link text-secondary">
            <FontAwesomeIcon icon={faSuitcase} />
            <span className="ms-4">&nbsp;Jobs</span>
          </a>
          <Link to="/document" className="nav-link text-secondary">
            <FontAwesomeIcon icon={faFolderOpen} />
            <span className="ms-4">Document</span>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Vertical;
