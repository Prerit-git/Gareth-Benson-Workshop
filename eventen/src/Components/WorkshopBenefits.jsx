const WorkshopBenefits = () => {
  return (
    <section className="py-5" id="benefits">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold"> Added <span className="pink">Benefits</span> of Attending the Workshop </h2>
        </div>

        <div className="row g-4">
          {/* Students Section */}
          <div className="col-lg-6">
            <div className="card h-100 shadow-lg border-0 rounded-4">
              <div className="card-body p-4">
                <h4 className="fw-bold text-primary mb-4"> For Students</h4>
                <ul className="list-unstyled">
                  <li className="mb-3"> Get <b>NSQF Aligned Certification</b> – Level 4 (Certified by MESC, India’s Media & Entertainment Skills Council)</li>
                  <li className="mb-3"><b>Celebrity School Access</b> → Workshops & masterclasses by top celebs</li>
                  <li className="mb-3"> <b>Exclusive Workshops</b> → 5 upcoming sessions by mentors & industry experts at IICS</li>
                  <li className="mb-3"> <b>Double Your Money</b> → 2X of the workshop fee discounted in your program enrollment</li>
                  <li className="mb-3"> <b>Event Opportunities</b> → Be a part of exciting IICS events with MESC participation</li>
                  <li className="mb-3"> <b>Unlimited Learning</b> → Exclusive access to all content under the Vidyadaan Initiative</li>
                </ul>
                <div className="alert alert-success text-center fw-bold mt-4">
                   All this worth ₹7,899 — <span className="text-danger">for just ₹2,999!</span>
                </div>
              </div>
            </div>
          </div>

          {/* Trainers Section */}
          <div className="col-lg-6">
            <div className="card h-100 shadow-lg border-0 rounded-4 bg-pink text-white">
              <div className="card-body p-4">
                <h4 className="fw-bold mb-4 text-white"> For Trainers (TOT Program)</h4>
                <ul className="list-unstyled">
                  <li className="mb-3"> <b>Trainer Certificate</b> – NSQF Level 5 (Industry-recognized credential)</li>
                  <li className="mb-3"><b>Job Role Certifications</b> → Animator, Graphic Designer & more (Level 4 & 5)</li>
                  <li className="mb-3"> <b>Job Mailers Access</b> → Stay updated with career opportunities</li>
                  <li className="mb-3"> <b>Be Part of Student Committees</b> → Network, guide, and grow</li>
                  <li className="mb-3"> <b>MESC Event Access</b> → Join exclusive industry events & gatherings</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopBenefits;
