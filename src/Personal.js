import React from "react";

function Personal() {
  return (
    <div className="personal-wrapper">
      <style>
        {`
          .personal-wrapper {
            background-image: url('/background.png');
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 2rem 1rem;
          }

          .personal-section {
            background: rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(10px) saturate(160%);
            -webkit-backdrop-filter: blur(14px) saturate(160%);
            border-radius: 16px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            padding: 2.5rem 2rem;
            max-width: 850px;
            width: 100%;
            font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
            color: #e6f7ff;
            box-shadow: 0 8px 32px rgba(0, 196, 255, 0.25);
            text-align: center;
          }

          .personal-section h2 {
            font-size: 2.2rem;
            margin-bottom: 1.5rem;
            color: #00c4ff;
            text-shadow: 0 0 8px rgba(0, 196, 255, 0.6);
          }

          .personal-section p {
            font-size: 1.1rem;
            margin-bottom: 1.3rem;
            max-width: 700px;
            margin-left: auto;
            margin-right: auto;
            text-shadow: 0 1px 2px #000;
          }

          /* Tablet View */
          @media (max-width: 1024px) {
            .personal-section {
              padding: 2rem 1.5rem;
            }
            .personal-section h2 {
              font-size: 2rem;
            }
            .personal-section p {
              font-size: 1rem;
            }
          }

          /* Mobile View */
          @media (max-width: 768px) {
            .personal-wrapper {
              padding: 1.5rem 1rem;
            }
            .personal-section {
              padding: 1.8rem 1.2rem;
            }
            .personal-section h2 {
              font-size: 1.6rem;
            }
            .personal-section p {
              font-size: 0.95rem;
            }
          }

          /* Small Mobile View */
          @media (max-width: 480px) {
            .personal-wrapper {
              padding: 1rem 0.5rem;
            }
            .personal-section {
              padding: 1.5rem 1rem;
            }
            .personal-section h2 {
              font-size: 1.4rem;
            }
            .personal-section p {
              font-size: 0.9rem;
            }
          }
        `}
      </style>

      <div className="personal-section">
        <h2>My Tech Journey</h2>
        <p>
          I began my journey as a passionate Core Java learner — diving deep into object-oriented principles and backend logic.
        </p>
        <p>
          Soon, I expanded into full-stack development, mastering Spring Boot and building dynamic web solutions from the ground up.
        </p>
        <p>
          Along the way, I explored HTML and CSS, which opened the door to frontend design — leading me to React and modern UI frameworks where I truly found my creative edge.
        </p>
        <p>
          Today, I work as a Digital Associate Engineer in the RPA domain at Sonata Software, combining backend expertise, frontend finesse, and automation engineering to build smart solutions.
        </p>
      </div>
    </div>
  );
}

export default Personal;
