import React, { useEffect, useState } from "react";

export default function WorkshopSection() {
  const [fadeIn, setFadeIn] = useState(false);
  useEffect(() => {
    setTimeout(() => setFadeIn(true), 100);
  }, []);

  const day1 = [
    { time: "10:00 AM", event: "Registration" },
    { time: "10:30 AM", event: "Student Orientation" },
    {
      time: "11:00 AM – 1:30 PM",
      event: (
        <>
          Character Crafting in Animation with <em>Vinoth Kumar V</em>
        </>
      ),
    },
    { time: "1:30 PM", event: "Lunch Break" },
    {
      time: "2:00 PM – 4:30 PM",
      event: (
        <>
          Costume Crafting with <em>Neeta Lulla</em>
        </>
      ),
    },
  ];

  const day2 = [
    { time: "10:00 AM", event: "Registration" },
    { time: "10:30 AM", event: "Orientation" },
    {
      time: "11:00 AM – 1:30 PM",
      event: (
        <>
          Creative Insights in Sound with <em>Resul Pookutty</em>
        </>
      ),
    },
    {
      time: "2:00 PM – 4:30 PM",
      event: (
        <>
          Go Gala with Events with <em>Sushma Gaikwad</em>
        </>
      ),
    },
    { time: "4:30 PM", event: "Closing Ceremony & Certificate Distribution" },
  ];

  const Timeline = ({ day, title }) => (
    <div
      className="card shadow-md border-2 h-100"
      style={{ transition: "transform 0.3s ease, box-shadow 0.3s ease" }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.03)";
        e.currentTarget.classList.add("shadow");
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.classList.remove("shadow");
      }}
    >
      <div className="card-body">
        <h5 className="card-title fw-bold mb-4">{title}</h5>
        <div className="position-relative ms-3">
          {/* vertical line */}
          <div
            className="position-absolute top-0 start-0 translate-middle-x bg-pink"
            style={{
              width: "4px",
              height: "100%",
              left: "0.3rem",
              borderRadius: "2px",
            }}
          ></div>

          {day.map((item, idx) => (
            <div key={idx} className="d-flex mb-4">
              {/* dot */}
              <div
                className="bg-pink rounded-circle me-3 flex-shrink-0"
                style={{
                  width: "14px",
                  height: "14px",
                  marginLeft: "-9px",
                  marginTop: "5px",
                  boxShadow: "0 0 0 3px #fff",
                }}
              ></div>
              {/* content */}
              <div>
                <div className="fw-bold">{item.time}</div>
                <div className="small">{item.event}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section className="container my-0">
      {/* About Section */}
      <div className={`text-center mb-5 fade ${fadeIn ? "show" : ""}`}>
        <h2 className="fw-bold">About the <span className="pink">Workshop</span></h2>
        <p className="mt-3">
          The <strong>Indian Institute of Creative Skills (IICS)</strong> presents{" "}
          <em>LEVEL-UP with LEGENDS</em>, a 2-day career guidance workshop designed
          to inspire the next generation of creators.
        </p>
        <p>
          This unique program brings together{" "}
          <em>
            Academy Award winner Resul Pookutty, National Award-winning designer
            Neeta Lulla, Event visionary Sushma Gaikwad, and VFX leader Vinoth Kumar V
          </em>.
        </p>
        <p>
          Together, these industry pioneers will guide you through hands-on learning,
          insider knowledge, and creative exploration — helping you discover exciting
          career opportunities in <em>sound, fashion, events, and animation</em>.
        </p>
      </div>

      {/* Schedule Timeline */}
      <div className={`row g-4 fade ${fadeIn ? "show" : ""}`}>
        <div className="col-md-6">
          <Timeline day={day1} title="📅 Day 1 – 18th September" />
        </div>
        <div className="col-md-6">
          <Timeline day={day2} title="📅 Day 2 – 19th September" />
        </div>
      </div>
    </section>
  );
}
