import React, { useEffect, useState } from "react";

export default function WorkshopTakeaways() {
  const [fadeIn, setFadeIn] = useState(false);
  useEffect(() => {
    setTimeout(() => setFadeIn(true), 100);
  }, []);

  const takeaways = [
    "A certificate recognizing your participation",
    "Your own animated character design (Phantom FX workshop)",
    "A costume design sketch (Neeta Lulla workshop)",
    "A mini pitch deck for an event (Sushma Gaikwad workshop)",
    "Creative insights from Resul Pookutty to guide your career path",
  ];

  return (
    <section className="container my-5" id="takeaways">
      {/* Takeaways */}
      <div className={`mb-5 fade ${fadeIn ? "show" : ""}`}>
        <h2 className="fw-bold text-center mb-4 pink"> Takeaways</h2>
        <div className="row row-cols-1 row-cols-md-2 g-3">
          {takeaways.map((item, idx) => (
            <div key={idx} className="col">
              <div
                className="d-flex align-items-start p-3 border rounded-3 shadow-sm h-100"
                style={{ transition: "transform 0.3s ease" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.03)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <div
                  className="bg-primary rounded-circle me-3 flex-shrink-0 d-flex align-items-center justify-content-center"
                  style={{ width: "32px", height: "32px", color: "#fff" }}
                >
                  ✓
                </div>
                <div className="small">{item}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Venue */}
      <div className={`mb-5 fade ${fadeIn ? "show" : ""}`}>
        <h2 className="fw-bold text-center mb-4 pink"> Venue</h2>
        <div
          className="card border-0 shadow-sm mx-auto"
          style={{
            maxWidth: "600px",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.03)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "scale(1)")
          }
        >
          <div className="card-body text-center">
            <h5 className="card-title fw-bold mb-3">
              Jagran Lakecity University
            </h5>
            <p className="card-text small mb-0">
              Near Kaliasot Barrage, 83/2 Chandanpura, Bhopal – 462016
            </p>
          </div>
        </div>
      </div>

      {/* Register Now */}
      <div className={`text-center fade ${fadeIn ? "show" : ""}`}>
        {/* <h2 className="fw-bold mb-3">🚀 Register Now</h2> */}
        <p className="mb-4">
          Seats are limited. Don’t miss this opportunity to be mentored by
          legends and shape your future in the creative industries.
        </p>
        <a
          href="#home"
          className="btn btn-primary btn-lg px-4 py-2"
          style={{ transition: "transform 0.3s ease" }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.05)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "scale(1)")
          }
        >
           Register Now
        </a>
      </div>
    </section>
  );
}
