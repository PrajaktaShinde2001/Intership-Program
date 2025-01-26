import React from 'react';
import "./JobDetail.css"

const JobDetail = ({ job }) => {
  const { jobTitle, companyName, location, salary, description, companyLogo } = job;

  return (
    <div className="container mt-5">
      <h2>Job Details</h2>
      <div className="job-detail">
        <div className="mb-3">
          <h4>{jobTitle}</h4>
          <p><strong>Company:</strong> {companyName}</p>
          <p><strong>Location:</strong> {location}</p>
          <p><strong>Salary:</strong> {salary}</p>
        </div>
        <div className="mb-3">
          <p><strong>Description:</strong></p>
          <p>{description}</p>
        </div>
        {companyLogo && (
          <div className="mb-3">
            <img src={companyLogo} alt="Company Logo" className="company-logo" width="100" />
          </div>
        )}
      </div>
    </div>
  );
};

export default JobDetail;
