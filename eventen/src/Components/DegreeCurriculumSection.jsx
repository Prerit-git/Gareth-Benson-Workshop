import React from "react";
import DegreeHighlights from "./DegreeHighlights";

const DegreeCurriculumSection = () => {
  return (
    <section className="py-5" id="about">
      <div className="container">
        {/* Headline */}
        <div className="text-center mb-4">
          <h3 className="fw-bold">
            <span className="pink">Degree Curriculum </span><br /> 3-Year Programme in Costume Design
          </h3>
          <p className="">
            Our curriculum blends theory, hands-on practice, and real-world
            industry experience. Over three years, you’ll master every aspect of
            costume design for film, theatre, and live productions.
          </p>
        </div>

        {/* Year-wise breakdown */}
        <div className="row g-4">
          {/* Year 1 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm hover-card">
              <div className="card-body">
                <h4 className="fw-bold mb-3">Year 1 – Foundations</h4>
                <ul className="mb-3">
                  <li>Basics of Costume & Fashion History</li>
                  <li>Fabric and Textile Studies</li>
                  <li>Illustration & Sketching Techniques</li>
                  <li>Color Theory & Material Sourcing</li>
                  <li>Introduction to Sewing & Pattern Making</li>
                </ul>
                <p className="small mb-0">
                  Build a strong foundation in costume design and understand how
                  clothes tell stories.
                </p>
              </div>
            </div>
          </div>

          {/* Year 2 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm hover-card">
              <div className="card-body">
                <h4 className="fw-bold mb-3">
                  Year 2 – Techniques & Character Building
                </h4>
                <ul className="mb-3">
                  <li>Costume Construction & Draping</li>
                  <li>Surface Development & Embellishment</li>
                  <li>Character Analysis for Screen & Stage</li>
                  <li>Digital Design Tools (Photoshop, CAD, etc.)</li>
                  <li>Research Methods for Historical & Fantasy Costumes</li>
                </ul>
                <p className="small mb-0">
                  Start creating complete looks and learn to translate scripts
                  into costumes.
                </p>
              </div>
            </div>
          </div>

          {/* Year 3 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm hover-card">
              <div className="card-body">
                <h4 className="fw-bold mb-3">
                  Year 3 – Advanced Practice & Industry Exposure
                </h4>
                <ul className="mb-3">
                  <li>Advanced Costume Design for Film, TV & Theatre</li>
                  <li>Wardrobe Management & Styling for Productions</li>
                  <li>Brand & Portfolio Development</li>
                  <li>Internship with Production Houses / Costume Studios</li>
                  <li>Final Costume Design Project & Runway/Showcase</li>
                </ul>
                <p className="small mb-0">
                  Work on live projects and graduate with a portfolio ready for
                  the industry.
                </p>
              </div>
            </div>
          </div>
        </div>


        {/* Call to action */}
        <div className="text-center mt-5 col-lg-6 row justify-content-center mx-auto">
        <DegreeHighlights/>
          {/* <a href="/curriculum.pdf" className="btn btn-outline-primary btn-lg me-3">
            Download Detailed Curriculum PDF
          </a> */}
          <a href="#home" className="btn btn-primary col-lg-4">
            Join Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default DegreeCurriculumSection;
