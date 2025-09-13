import React from "react";

const WhyAttend = () => {
  const points = [
    "Learn directly from legends of the media and entertainment industry",
    "Gain real-world insights into creative career paths",
    "Explore new opportunities in animation, design, sound, and event management",
    "Participate in hands-on workshops and interactive sessions",
    "Build confidence and create your own projects",
    "Receive a certificate of participation from IICS",
  ];

  return (
    <section
      className="py-5 bg-black text-light position-relative overflow-hidden"
      id="why-attend"
    >
      {/* Decorative background shapes */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100 opacity-10"
        style={{
          background:
            "radial-gradient(circle at center, #ffffff33 0%, transparent 70%)",
        }}
      ></div>

      <div className="container position-relative">
        <div className="row align-items-center">
          {/* Left Column */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="fw-bold display-5 text-warning">Why Attend?</h2>
            <div
              className="underline mb-4"
              style={{ width: "60px", height: "4px", background: "#ffffff" }}
            ></div>

            <ul className="list-unstyled">
              {points.map((item, idx) => (
                <li
                  key={idx}
                  className="d-flex align-items-start mb-3"
                  style={{ transition: "transform 0.3s ease" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.02)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  <div
                    className="bg-warning rounded-circle me-3 flex-shrink-0 d-flex align-items-center justify-content-center"
                    style={{ width: "28px", height: "28px", color: "#000" }}
                  >
                    ✓
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a href="#home" className="btn btn-warning btn-lg shadow-sm mt-3">
              Join the Experience
            </a>
          </div>

          {/* Right Column */}
          <div className="col-lg-6 text-center">
            <div className="p-4 bg-light text-dark rounded-4 shadow-lg">
              <i className="bi bi-star-fill fs-1 text-warning mb-3"></i>
              <h4 className="fw-bold">Exclusive Insights</h4>
              <p className="mb-0">
                Step into the world of creativity — learn, explore, and craft
                your future with India’s top legends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAttend;
