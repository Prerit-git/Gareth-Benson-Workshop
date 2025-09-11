import React from "react";

const WhyAttend = () => {
  return (
    <section className="py-5 bg-black text-light position-relative overflow-hidden" id="why-attend">
      {/* Decorative background shapes */}
      <div className="position-absolute top-0 start-0 w-100 h-100 opacity-10" style={{background: 'radial-gradient(circle at center, #ffffff33 0%, transparent 70%)'}}></div>

      <div className="container position-relative">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="fw-bold display-5 pink">Why Attend</h2>
            <div className="underline mb-3" style={{width:"60px",height:"4px",background:"#ffffff"}}></div>
            <p className="lead">
              Embark on a transformative learning experience with 
              <span className="fw-bold pink"> Neeta Lulla</span>, 
              whose artistry has shaped Indian fashion and cinema.
            </p>
            <p className="mb-4">
              Gain rare access to her craft, legacy, and mentorship—tools that 
              refine both vision and expertise.
            </p>
            <a href="#home" className="btn btn-warning btn-lg shadow-sm">
              Join the Experience
            </a>
          </div>

          <div className="col-lg-6 text-center">
            <div className="p-4 bg-light text-dark rounded-4 shadow-lg">
              <i className="bi bi-star-fill fs-1 text-warning mb-3"></i>
              <h4 className="fw-bold">Exclusive Insights</h4>
              <p>Step into the world of costume design with Neeta Lulla — from concept to screen.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAttend;
