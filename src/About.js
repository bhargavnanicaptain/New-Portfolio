import React from "react";
import { Link } from "react-router-dom";
import BookRoundedIcon from '@mui/icons-material/BookRounded';
import MilitaryTechRoundedIcon from '@mui/icons-material/MilitaryTechRounded';
function About(){
    return(
        <div>
            <style>
                {
                    `
                        *{
                            
                            font-family: "Georgia", "Times New Roman", Times, serif;
                         }
                            
                            body{
                            background-color:#f0f4f8;
                            }
                            
                            .wave-button {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 auto 1rem auto;
            animation: fadeInProfile 1.5s ease forwards;
          }

          .Profile {
            width: 220px;
            height: 220px;
            object-fit: cover;
            border-radius: 50%;
            border: 4px solid #00c4ff;
            box-shadow: 0 0 25px rgba(0, 196, 255, 0.5);
            transition: transform 0.4s ease;
            transform: translateZ(0);
            will-change: transform;
          }

          .Profile:hover {
            transform: scale(1.05) rotate(2deg);
          }
            .intro{
                    margin-left:38%;
            }
            .subtitle{
                    margin-left:45%;
            }
            .about{
                    text-align:justify;
            }
                    .about-section {
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(14px) saturate(160%);
  -webkit-backdrop-filter: blur(14px) saturate(160%);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  padding: 2rem 2.5rem;
  margin: 2rem auto;
  max-width: 900px;
  color: #e6f0ff;
  box-shadow: 0 8px 24px rgba(0, 196, 255, 0.25);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.7;
  transition: transform 0.3s ease;
}

.about-section:hover {
  transform: scale(1.01);
  box-shadow: 0 10px 28px rgba(0, 255, 255, 0.4);
}

.about-section h3 {
  color: #00c4ff;
  font-size: 1.8rem;
  margin-bottom: 1rem;
  text-shadow: 0 0 6px rgba(0, 196, 255, 0.5);
}

.about-section p {
  font-size: 1.1rem;
  color: black;
  margin-bottom: 1rem;
}
  .about-section h2{
    color:black;
  }
    .image{
    height:50%;
    width:20%;
    border:0;
    border-radius:25px;
    }
    .image {
  height: 50%;
  width: 20%;
  border: 0;
  border-radius: 25px;
  transform-style: preserve-3d;
  animation: flipIn 1s ease forwards;
  transition: transform 0.6s ease, box-shadow 0.4s ease;
}

.image:hover {
  transform: rotateY(10deg) scale(1.02);
  box-shadow: 0 0 20px rgba(0, 255, 240, 0.5);
}

@keyframes flipIn {
  from {
    transform: rotateX(60deg) scale(0.9);
    opacity: 0;
  }
  to {
    transform: rotateX(0deg) scale(1);
    opacity: 1;
  }
}


    .image1{
    height:90px;
    width:20%;
    border:0;
    border-radius:25px;
    }
    .image1:hover {
  transform: rotateY(10deg) scale(1.02);
  box-shadow: 0 0 20px rgba(0, 255, 240, 0.5);
}

@keyframes flipIn {
  from {
    transform: rotateX(60deg) scale(0.9);
    opacity: 0;
  }
  to {
    transform: rotateX(0deg) scale(1);
    opacity: 1;
  }
}
  .contact-section {
  text-align: center;
  padding: 3rem 2rem;
  margin-top: 4rem;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(12px);
  border-radius: 16px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  color: #e6f0ff;
  box-shadow: 0 8px 20px rgba(0, 196, 255, 0.15);
  animation: fadeInContact 1.2s ease forwards;
  opacity: 0;
}

.contact-text {
  font-size: 1.4rem;
  color: black;
  margin-bottom: 1.5rem;
}

.cntbtn {
  padding: 0.75rem 2rem;
  font-size: 1.1rem;
  border: none;
  border-radius: 25px;
  background: linear-gradient(135deg, #00c4ff, #00f0ff);
  color: #001f33;
  box-shadow: 0 0 12px rgba(0, 255, 240, 0.5);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: pulseGlow 2s infinite alternate;
}

.cntbtn:hover {
  transform: scale(1.05);
  box-shadow: 0 0 18px rgba(0, 255, 240, 0.7);
}

/* Animations */
@keyframes fadeInContact {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulseGlow {
  from {
    box-shadow: 0 0 10px rgba(0, 255, 240, 0.4);
  }
  to {
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.7);
  }
}
  
.certification-section {
  padding: 3rem 1.5rem;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 16px;
  max-width: 1200px;
  margin: 3rem auto;
  box-shadow: 0 12px 36px rgba(0, 255, 255, 0.08);
  text-align: center;
}

.certification-title {
  font-size: 2rem;
  color: #00c4ff;
  margin-bottom: 2rem;
  text-shadow: 0 0 6px rgba(0, 255, 255, 0.4);
}

.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
}

.card {
  width: 280px;
  background-color: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 255, 255, 0.1);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  animation: fadeInCard 1.2s ease forwards;
  opacity: 0;
}

.card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 10px 28px rgba(0, 255, 255, 0.2);
}

.card-img-top {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-bottom: 1px solid #ccc;
}

.card-body {
  padding: 1rem 1.2rem;
  color: #111;
}

.card-title {
  font-size: 1.2rem;
  font-weight: bold;
  color: #000;
}

.card-text {
  font-size: 0.95rem;
  color: #333;
  margin-bottom: 1rem;
}

.btn {
  background: linear-gradient(135deg, #00c4ff, #00f0ff);
  border: none;
  padding: 0.5rem 1.3rem;
  border-radius: 20px;
  color: #001f33;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
  transition: transform 0.3s ease;
}

.btn:hover {
  transform: scale(1.05);
  box-shadow: 0 0 14px rgba(0, 255, 255, 0.45);
}

/* Fade-in animation */
@keyframes fadeInCard {
  0% {
    transform: translateY(40px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
  .blogs-section{
                   padding: 3rem 1.5rem;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 16px;
  max-width: 1200px;
  margin: 3rem auto;
  box-shadow: 0 12px 36px rgba(0, 255, 255, 0.08);
  text-align: center;
  }
  .blogs-title{
       font-size: 2rem;
  color: #00c4ff;
  margin-bottom: 2rem;
  text-shadow: 0 0 6px rgba(0, 255, 255, 0.4);
    }
  .blog-icon {
  color: black;
  font-size: 30px;
  animation: iconPop 1.5s ease-in-out infinite alternate;
  transition: transform 0.3s ease;
  margin-left: 8px;
  vertical-align: middle;
}

.blog-icon:hover {
  transform: scale(1.2) rotate(5deg);
  color: #ff7043;
}

/* Keyframes animation */
@keyframes iconPop {
  0% {
    transform: scale(1) rotate(0deg);
  }
  100% {
    transform: scale(1.1) rotate(-5deg);
  }
}
  /* Media Queries for About Component */

/* Mobile Devices (max-width: 600px) */
@media (max-width: 600px) {
  .intro {
    margin-left: 0;
    text-align: center;
    font-size: 1.5rem;
  }

  .subtitle {
    margin-left: 0;
    text-align: center;
    font-size: 1rem;
  }

  .Profile {
    width: 150px;
    height: 150px;
  }

  .about {
    padding: 0 1rem;
    font-size: 0.95rem;
  }

  .about-section {
    padding: 1.5rem 1rem;
  }

  .image,
  .image1 {
    width: 60%;
    height: auto;
  }

  .certification-section,
  .blogs-section {
    padding: 2rem 1rem;
  }

  .card-grid {
    flex-direction: column;
    align-items: center;
  }

  .card {
    width: 90%;
  }

  .contact-text {
    font-size: 1.1rem;
  }
}

/* Tablets (601px to 992px) */
@media (min-width: 601px) and (max-width: 992px) {
  .intro {
    margin-left: 0;
    text-align: center;
  }

  .subtitle {
    margin-left: 0;
    text-align: center;
  }

  .Profile {
    width: 180px;
    height: 180px;
  }

  .about {
    padding: 0 2rem;
  }

  .card {
    width: 45%;
  }

  .image,
  .image1 {
    width: 40%;
    height: auto;
  }
}

/* Large Screens (993px and above) */
@media (min-width: 993px) {
  .card {
    width: 280px;
  }
}



    


                    `
                }
            </style>
            <div className="hero">
        <div className="wave-button">
          <img src="/Profile.jpg" className="Profile"/>
        </div>
        <h1 className="intro">V.T. BHARGAV</h1>
        <p className="subtitle">- Engineer by craft, innovator by heart.</p>
        </div>
        <h4 className="about">I’m V.T. Bhargav — a frontend and Java developer with a strong focus on automation and cloud technologies. I enjoy creating modern web experiences using React and Java, and I actively work with RPA tools to streamline processes. I’m also exploring AWS to build efficient, scalable systems in the cloud.</h4>

        <section className="about-section">
  <h2>Professional Experience</h2>
  <h3 className="main">
    Sonata Software — July 2024 to Present
    <img src="/Sonata.jpg" className="image1" alt="Sonata Logo" />
  </h3>
  <p>
    I'm currently working as a <strong>Digital Associate Engineer</strong> at <strong>Sonata Software</strong>, with a focus on <strong>Robotic Process Automation (RPA)</strong>. Over the past year, I’ve been part of the <strong>Wellpath Project</strong>, contributing to the development of scalable automation solutions for healthcare workflows.
  </p>
  <p>
    My work includes designing, implementing, and optimizing automation processes using:
    <ul>
      <li>🔹 <strong>Blue Prism</strong> for RPA development and orchestration</li>
      <li>🔹 <strong>Python</strong> scripts for data manipulation and backend logic</li>
      <li>🔹 <strong>PowerShell</strong> for system-level automation and integration</li>
      <li>🔹 <strong>ServiceNow</strong> for ITSM-based process coordination</li>
    </ul>
  </p>
  <p>
    This project has strengthened my ability to work with cross-functional teams and automate high-impact tasks that improve both efficiency and compliance in healthcare operations.
  </p>
</section>


        <section className="about-section">
        <h2>Education</h2>
        <h3 className="main">B.Tech - August, 2019 to July, 2023  <img src="/Siddhartha.jpg" className="image"/></h3>
        <p>
        I completed my Bachelor's degree in, Electronics and Communication Engineering from Siddhartha Institute of Engineering and Technology, where I developed a strong foundation in software development, object-oriented programming, and system design.
        </p>
        </section>
        <section className="about-section">
            <h2>🧠 What I Love Working On</h2>
            <p>
                <ul>
                    <li>⚙️ Automation & RPA with creative workflows</li>
                    <li>🌐 Frontend design using React & animations</li>
                    <li>☁️ Cloud development & future-ready architecture (AWS, Azure, serverless)</li>
                    <li>🎨 UI/UX styling with modern design systems</li>
                </ul>
            </p>
        </section>
        
        <section className="certification-section">
            <h2 className="certification-title">My Certifications <MilitaryTechRoundedIcon className="blog-icon" /></h2>
             <div className="card-grid">
            <div class="card" >
  <img src="/Software.png" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Software Engineering</h5>
    <p class="card-text">Certified by HackerRank</p>
    <a href="https://www.hackerrank.com/certificates/db4ebee6a3f9" class="btn btn-primary">📜 View Certificate</a>
  </div>
</div>
<div class="card" >
  <img src="/SQL.png" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">SQL Basics</h5>
    <p class="card-text">Certified by HackerRank</p>
    <a href="https://www.hackerrank.com/certificates/33d59ca3dbea" class="btn btn-primary">📜 View Certificate</a>
  </div>
</div>
<div class="card" >
  <img src="/Responsive.png" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Responsive Web Design</h5>
    <p class="card-text">Certified by FreeCodeCamp</p>
    <a href="https://freecodecamp.org/certification/fccda73044b-f7ea-45e9-ad84-c27de4fd4dfe/responsive-web-design" class="btn btn-primary">📜 View Certificate</a>
  </div>
</div>
<div class="card" >
  <img src="/Go.png" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Go Basics</h5>
    <p class="card-text">Certified by HackerRank</p>
    <a href="https://www.hackerrank.com/certificates/8ba5e59dd9e5" class="btn btn-primary">📜 View Certificate</a>
  </div>
</div>
<div class="card" >
  <img src="/JS.png" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Java Script for Beginners</h5>
    <p class="card-text">Certified by Simplilearn</p>
    <a href="https://www.simplilearn.com/learn-javascript-basics-free-course-skillup" class="btn btn-primary">📜 View Certificate</a>
  </div>
</div>
  </div>      
</section>
<section className="blogs-section">
  <h2 className="blogs-title"> My Blogs <BookRoundedIcon className="blog-icon" /> </h2>
                <div class="card" >
  <img src="/Hanuman.png" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">The Eternal Devotee:</h5>
    <p class="card-text">Lessons from Lord Hanuman</p>
    <a href="https://blog-on-hanuman.vercel.app/" class="btn btn-primary">🗒️ View Blog</a>
  </div>
</div>
</section>
        <section className="contact-section">
  <p className="contact-text">
   Let’s sync up 🤝 — great ideas 💡 start with the right interaction 🔗
  </p>
  <div className="contact-button">
    <Link to="/contact">
      <button className="cntbtn">Let's Connect</button>
    </Link>
  </div>
</section>
                

        </div>
        
    );
}
export default About;