import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <style>
        {`
          * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #f0f8ff;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}


          .home {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            padding: 1rem;
          }

          .hero {
            text-align: center;
            animation: slideIn 1s ease forwards;
            max-width: 800px;
          }

          .wave-button {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 auto 1rem auto;
            animation: fadeInProfile 1.5s ease forwards;
          }

          .profile-video {
            width: 220px;
            height: 220px;
            object-fit: cover;
            border-radius: 50%;
            border: 4px solid #00c4ff;
            box-shadow: 0 0 25px rgba(0, 196, 255, 0.5);
            transition: transform 0.4s ease;
          }

          .profile-video:hover {
            transform: scale(1.05) rotate(2deg);
          }

          h1.glow {
            font-size: 2.5rem;
            color: #0a192f;
            animation: glow 2s ease-in-out infinite alternate;
            margin-top: 1rem;
          }

          .fade-in {
            opacity: 0;
            animation: fadeIn 2s ease 0.5s forwards;
            font-size: 1.2rem;
            color: #555;
            margin-top: 0.5rem;
          }

          .logo {
            height: 24px;
            margin-left: 8px;
            vertical-align: middle;
            border-radius: 4px;
            display: inline-block;
            box-shadow: 0 0 6px rgba(0, 196, 255, 0.3);
            opacity: 0;
            transform: scale(0.95);
            animation: logoFadeIn 1.5s ease forwards;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .logo:hover {
            transform: scale(1.05);
            box-shadow: 0 0 10px rgba(0, 196, 255, 0.6);
          }

          .corner-avatar {
            position: fixed;
            top: 20px;
            right: 20px;
            width: 160px;
            height: 160px;
            z-index: 999;
            animation: floatUp 1.2s ease-out forwards;
            opacity: 0;
          }

          .flip-container {
            width: 100%;
            height: 100%;
            perspective: 1000px;
            border-radius: 50%;
            overflow: hidden;
          }

          .flipper {
            width: 100%;
            height: 100%;
            position: relative;
            transform-style: preserve-3d;
            transition: transform 0.8s ease;
          }

          .flip-container:hover .flipper {
            transform: rotateY(180deg);
          }

          .front,
          .back {
            position: absolute;
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 50%;
            border: 3px solid #00c4ff;
            box-shadow: 0 0 12px rgba(0, 196, 255, 0.5);
            backface-visibility: hidden;
          }

          .back {
            transform: rotateY(180deg);
          }

          /* Animations */
          @keyframes fadeInProfile {
            from { opacity: 0; transform: scale(0.9) translateY(10px); }
            to { opacity: 1; transform: scale(1) translateY(0); }
          }

          @keyframes slideIn {
            from { transform: translateY(-20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }

          @keyframes glow {
            from { text-shadow: 0 0 10px #00c4ff, 0 0 20px #00c4ff; }
            to { text-shadow: 0 0 20px #00f0ff, 0 0 40px #00f0ff; }
          }

          @keyframes fadeIn { to { opacity: 1; } }

          @keyframes logoFadeIn {
            to { opacity: 1; transform: scale(1); }
          }

          @keyframes floatUp {
            0% { transform: translateY(60px) scale(0.9); opacity: 0; }
            100% { transform: translateY(0) scale(1); opacity: 1; }
          }

          /* Responsive Design */
          @media (max-width: 1024px) {
            .corner-avatar {
              width: 130px;
              height: 130px;
              top: 15px;
              right: 15px;
            }
            h1.glow {
              font-size: 2rem;
            }
          }

          @media (max-width: 768px) {
            .corner-avatar {
              display: none; /* Hide floating avatar on smaller tablets */
            }
            .profile-video {
              width: 180px;
              height: 180px;
            }
            h1.glow {
              font-size: 1.8rem;
            }
            .fade-in {
              font-size: 1rem;
            }
          }

          @media (max-width: 480px) {
            .hero {
              padding: 1rem;
            }
            .profile-video {
              width: 150px;
              height: 150px;
            }
            h1.glow {
              font-size: 1.5rem;
            }
            .fade-in {
              font-size: 0.9rem;
            }
          }
        `}
      </style>

      {/* Floating Avatar */}
      <div className="corner-avatar">
        <Link to="/about">
          <div className="flip-container">
            <div className="flipper">
              <img src="/Profile.jpg" alt="Front" className="front" />
              <img src="/avatar-back.png" alt="Back Info" className="back" />
            </div>
          </div>
        </Link>
      </div>

      {/* Hero Section */}
      <div className="hero">
        <div className="wave-button">
          <Link to="/personal">
            <video
              src="/intro.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="profile-video"
            />
          </Link>
        </div>
        <h1 className="glow">Hi, I'm V.T. BHARGAV</h1>
        <p className="fade-in">
          Cloud Explorer • Frontend Developer • RPA Engineer • Java Developer
        </p>
        <p className="fade-in">
          Working as Digital Associate Engineer in RPA domain at Sonata Software
          <a
            href="https://www.sonata-software.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/Sonata.jpg" className="logo" alt="Sonata Logo" />
          </a>
        </p>
      </div>
    </div>
  );
}

export default Home;
