const WorkshopBenefits = () => {
  return (
    <section className="py-5" id="benefits">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">✨ Added <span className="pink">Benefits</span> of Attending the Workshop ✨</h2>
        </div>

        <div className="row g-4">
          {/* Students Section */}
          <div className="col-lg-6">
            <div className="card h-100 shadow-lg border-0 rounded-4">
              <div className="card-body p-4">
                <h4 className="fw-bold text-primary mb-4">🎓 For Students</h4>
                <ul className="list-unstyled">
                  <li className="mb-3"><i className="fa fa-check-circle text-success me-2"></i> Get <b>NSQF Aligned Certification</b> – Level 4 (Certified by MESC, India’s Media & Entertainment Skills Council)</li>
                  <li className="mb-3"><i className="fa fa-star text-warning me-2"></i> <b>Celebrity School Access</b> → Workshops & masterclasses by top celebs</li>
                  <li className="mb-3"><i className="fa fa-bolt text-danger me-2"></i> <b>Exclusive Workshops</b> → 5 upcoming sessions by mentors & industry experts at IICS</li>
                  <li className="mb-3"><i className="fa fa-ticket text-info me-2"></i> <b>2 Free Movie Tickets</b> → Because creativity deserves a break!</li>
                  <li className="mb-3"><i className="fa fa-money text-success me-2"></i> <b>Double Your Money</b> → 2X of the workshop fee discounted in your program enrollment</li>
                  <li className="mb-3"><i className="fa fa-users text-primary me-2"></i> <b>Event Opportunities</b> → Be a part of exciting IICS events with MESC participation</li>
                  <li className="mb-3"><i className="fa fa-infinity text-dark me-2"></i> <b>Unlimited Learning</b> → Exclusive access to all content under the Vidyadaan Initiative</li>
                </ul>
                <div className="alert alert-success text-center fw-bold mt-4">
                  🎁 All this worth ₹7,899 — <span className="text-danger">for just ₹2,999!</span>
                </div>
              </div>
            </div>
          </div>

          {/* Trainers Section */}
          <div className="col-lg-6">
            <div className="card h-100 shadow-lg border-0 rounded-4 bg-pink text-white">
              <div className="card-body p-4">
                <h4 className="fw-bold mb-4 text-white">👨‍🏫 For Trainers (TOT Program)</h4>
                <ul className="list-unstyled">
                  <li className="mb-3"><i className="fa fa-certificate me-2"></i> <b>Trainer Certificate</b> – NSQF Level 5 (Industry-recognized credential)</li>
                  <li className="mb-3"><i className="fa fa-briefcase me-2"></i> <b>Job Role Certifications</b> → Animator, Graphic Designer & more (Level 4 & 5)</li>
                  <li className="mb-3"><i className="fa fa-envelope me-2"></i> <b>Job Mailers Access</b> → Stay updated with career opportunities</li>
                  <li className="mb-3"><i className="fa fa-users me-2"></i> <b>Be Part of Student Committees</b> → Network, guide, and grow</li>
                  <li className="mb-3"><i className="fa fa-star me-2"></i> <b>MESC Event Access</b> → Join exclusive industry events & gatherings</li>
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
