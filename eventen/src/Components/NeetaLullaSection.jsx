import React from "react";

const NeetaLullaSection = () => {
  const movies = [
    {
      title: "Lamhe",
      img: "https://iicsindia.org/blog/wp-content/uploads/2025/09/Lamhe_poster.jpg",
    },
    {
      title: "Devdas",
      img: "https://iicsindia.org/blog/wp-content/uploads/2025/09/Devdas_2002_Hindi_film.jpg",
    },
    {
      title: "Jodhaa Akbar",
      img: "https://iicsindia.org/blog/wp-content/uploads/2025/09/50870572.jpg",
    },
    {
      title: "Manikarnika",
      img: "https://iicsindia.org/blog/wp-content/uploads/2025/09/manikarnika-scaled.jpg",
    },
    {
      title: "Balgandharva",
      img: "https://iicsindia.org/blog/wp-content/uploads/2025/09/unnamed.webp",
    },
    {
      title: "Shaakuntalam",
      img: "https://iicsindia.org/blog/wp-content/uploads/2025/09/samantha_ruth_prabhu_1645417513887_1645417522208.jpg",
    },
  ];

  return (
    <section className="py-5 bg-light" id="neeta-lulla">
      <div className="container">
        <div className="row align-items-center mb-4">
          <div className="col-lg-5">
            <h2 className="fw-bold display-6">
              Neeta Lulla – Legacy in <span className="pink"> Films & Costumes</span>
            </h2>
            <div className="underline mb-3" style={{width:"70px",height:"4px",background:"#e91e63"}}></div>
            <p>
              With a career spanning over 400 films, Neeta Lulla has redefined
              costume design in Indian cinema. From the romantic splendor of{" "}
              <strong>Lamhe</strong> to the historical grandeur of{" "}
              <strong>Jodhaa Akbar</strong>, her creations are cinematic stories
              in themselves.
            </p>
            <p>
              She is a <strong>4-time National Film Award winner</strong> for
              Best Costume Design — Lamhe (1991), Devdas (2002), Jodhaa Akbar
              (2008), and Balgandharva (2011).
            </p>
            <p>
              Her film credits include visual landmarks like Devdas, Jodhaa
              Akbar, Manikarnika: The Queen of Jhansi, Balgandharva, and the
              mythological <strong>Shaakuntalam</strong>, for which she also
              earned recognition at Cannes.
            </p>
            <p>
              Beyond accolades, she has been invited to join the Oscars’
              Academy Voting Body, and continues to revive India's textile
              heritage through her immersive costume design.
            </p>
          </div>

          <div className="col-lg-7">
            <div className="row g-3">
              {movies.map((movie, index) => (
                <div key={index} className="col-6 col-md-4">
                  <div className="card border-0 shadow-sm h-100">
                    <img
                      src={movie.img}
                      alt={movie.title}
                      className="card-img-top"
                      style={{objectFit: "fill", height: "150px"}}
                    />
                    <div className="card-body py-2 text-center">
                      <small className="fw-semibold">{movie.title}</small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeetaLullaSection;
