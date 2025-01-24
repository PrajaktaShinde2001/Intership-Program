import React, { useState } from 'react';
import "./ApplyJob.css";

const ApplyJob = ({ job }) => {
  const { jobTitle, companyName, location, salary, companyLogo } = job;
  
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantMessage, setApplicantMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement the form submission logic (e.g., send data to an API)
    setIsSubmitted(true);
  };

  return (
    <div className="container mt-5">
      <h2>Apply for Job</h2>
      <div className="apply-job">
        <div className="mb-3">
          <h4>{jobTitle}</h4>
          <p><strong>Company:</strong> {companyName}</p>
          <p><strong>Location:</strong> {location}</p>
          <p><strong>Salary:</strong> {salary}</p>
        </div>

        {companyLogo && (
          <div className="mb-3">
            <img src={companyLogo} alt="Company Logo" className="company-logo" width="100" />
          </div>
        )}

        {!isSubmitted ? (
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={applicantName}
                onChange={(e) => setApplicantName(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Your Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={applicantEmail}
                onChange={(e) => setApplicantEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                className="form-control"
                id="message"
                rows="3"
                value={applicantMessage}
                onChange={(e) => setApplicantMessage(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">Submit Application</button>
          </form>
        ) : (
          <div className="mt-3">
            <h5>Thank you for applying!</h5>
            <p>Your application for the {jobTitle} position has been submitted.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplyJob;
