import React, { useEffect, useState } from "react";

const mentors = [
  {
    name: "Resul Pookutty",
    title: "Sound Designer, Academy Award Winner",
    description:
      "Discover the art of sound in cinema and how it can shape storytelling. Learn career insights from one of the most celebrated sound designers in the world.",
    image: "https://iicsindia.org/images/IICS/iics_image/industry-mentors/Padma-Shri-Resul-Pookutty.png"
  },
  {
    name: "Neeta Lulla",
    title: "National Award-Winning Costume Designer",
    description:
      "Step into the glamorous world of fashion and film. Learn how to design costumes, explore fabrics, and create styles inspired by iconic characters.",
    image: "https://iicsindia.org/workshops/Neeta-Lulla/assets/images/team/neeta-lulla-picture.png"
  },
  {
    name: "Sushma Gaikwad",
    title: "Co-Founder of Wizcraft, Event Visionary",
    description:
      "Dive into the exciting field of event management. From ideation to execution, learn how to create, plan, and pitch unforgettable experiences.",
    image: "https://iicsindia.org/images/IICS/iics_image/industry-mentors/sushma.png"
  },
  {
    name: "Vinoth Kumar V",
    title: "VFX Expert, Founder of Phantom FX",
    description:
      "Explore the limitless world of animation and character design. Get hands-on with tools and storytelling to bring your own characters to life.",
    image: "https://iicsindia.org/blog/wp-content/uploads/2025/09/VinothKumarImage.png"
  }
];

export default function MentorsSection() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 100);
  }, []);

  return (
    <section className="container" id="mentors">
      <div className={`text-center mb-5 fade ${fadeIn ? "show" : ""}`}>
        <h2 className="fw-bold">Meet Your <span className="pink">Mentors</span></h2>
      </div>

      <div className="row g-4">
        {mentors.map((mentor, index) => (
          <div
            className={`col-md-6 col-lg-3 fade ${fadeIn ? "show" : ""}`}
            style={{ transition: "opacity 1s ease-in-out" }}
            key={index}
          >
            <div
              className="card h-100 border-0"
              style={{
                transition: "transform 0.3s ease, box-shadow 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.classList.add("shadow");
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.classList.remove("shadow");
              }}
            >
              <img
                src={mentor.image}
                className="card-img-top rounded-circle p-3"
                alt={mentor.name}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold text-center">{mentor.name}</h5>
                <p className="text-muted text-center mb-2">{mentor.title}</p>
                <p className="card-text small flex-grow-1 text-center">{mentor.description}</p>
                {/* <div className="text-center mt-auto">
                  <button className="btn btn-primary btn-sm">Learn More</button>
                </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
