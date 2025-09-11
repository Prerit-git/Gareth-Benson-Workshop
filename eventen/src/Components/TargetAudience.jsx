import React from "react";

const TargetAudience = () => {
  const topics = [
    "Fashion Design",
    "Costume Design (Film & Theatre)",
    "Textile & Handloom",
    "Bridal & Couture Wear",
    "Film & Television Production",
    "Fashion Styling & Image Consulting",
    "Fashion Marketing & Communication",
    "Event & Fashion Show Management",
    "E-commerce & Retail Fashion",
    "Sustainable & Ethical Fashion",
  ];

  return (
    <section className="py-5 bg-light" id="areas">
      <div className="container">
        <div className="row text-center mb-4">
          <div className="col">
            <h2 className="fw-bold">For Students <span className="pink">Passionate</span> About</h2>
            <p className="text-muted">
              (Post-12th Grade Students looking to explore their creativity)
            </p>
          </div>
        </div>

        <div className="row">
          {topics.map((topic, index) => (
            <div key={index} className="col-md-6 col-lg-4 mb-3">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body d-flex align-items-center">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                  <span className="fw-semibold">{topic}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
