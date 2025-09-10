import React from "react";

const ThankYou = () => {
  return (
    <div className="container py-5 text-center">
      <h1 className="mb-3 text-success">Thank You!</h1>
      <p className="lead">
        Your registration has been received successfully.
      </p>
      <p>
        We’ll get back to you shortly with more details.
      </p>
      <a href="/" className="btn btn-primary mt-3">
        Go Back to Home
      </a>
    </div>
  );
};

export default ThankYou;
