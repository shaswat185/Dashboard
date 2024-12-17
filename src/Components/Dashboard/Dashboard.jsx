import React from 'react';
import './dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
  return (
   <>
    <div className='container'>
      <div className="row">
        <div className="col-md-2 shadow emp ms-5">
          <div className="card rounded-0 border-0 emp">
            <div className="card-body">
              <FontAwesomeIcon icon={faUsers} className='fa-2x text-primary' />
              <div className='my-2 fw-bold'>3000</div>
              <span className='emp-text fw-bold'>Total Employees</span>
            </div>
          </div>
        </div>

        <div className="col-md-2 shadow job ms-5">
          <div className="card rounded-0 border-0 job">
            <div className="card-body">
              <FontAwesomeIcon icon={faSuitcase} className='fa-2x text-primary' />
              <div className='my-2 fw-bold'>23</div>
              <span className='emp-text fw-bold'>Job Openings</span>
            </div>
          </div>
        </div>

        <div className="col-md-2 shadow new-appli ms-5">
          <div className="card rounded-0 border-0 new-appli">
            <div className="card-body">
              <FontAwesomeIcon icon={faUser} className='fa-2x text-primary' />
              <div className='my-2 fw-bold'>123</div>
              <span className='emp-text fw-bold'>New Applicants</span>
            </div>
          </div>
        </div>

        <div className="col-md-3 shadow notifications ms-5">
          <div className="card rounded-0 border-0 notifications">
            <div className="card-body">
              <FontAwesomeIcon icon={faUser} className='fa-2x text-white' />
              <div className='my-2 fw-bold text-white'>123</div>
              <span className='emp-text fw-bold text-white'>New Notifications</span>
            </div>
          </div>
        </div>
      </div>
   
    </div>
   </>
  );
};

export default Dashboard;
