import React from "react";

function Projects() {
  return (
    <div>
      <style>
        {`
          .projects-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
            padding: 20px;
          }

          .card {
            border: none;
            border-radius: 12px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            overflow: hidden;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
            background-color: #fff;
          }

          .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 15px rgba(0,0,0,0.15);
          }

          .card img {
            height: 200px;
            object-fit: cover;
            width: 100%;
          }

          .card-body {
            padding: 15px;
          }

          .card-title {
            font-size: 1.2rem;
            font-weight: bold;
            margin-bottom: 8px;
          }

          .card-text {
            font-size: 0.95rem;
            color: #555;
            margin-bottom: 12px;
          }

          .btn {
            background-color: #007bff;
            border: none;
            padding: 8px 14px;
            border-radius: 8px;
            font-size: 0.9rem;
            text-decoration: none;
            color: white;
            display: block;
            margin: 0 auto;
            text-align: center;
            transition: background-color 0.3s ease;
          }

          .btn:hover {
            background-color: #0056b3;
          }

          /* Responsive tweaks */
          @media (max-width: 768px) {
            .projects-container {
              grid-template-columns: 1fr 1fr;
              gap: 15px;
              padding: 15px;
            }
            .card img {
              height: 180px;
            }
            .card-title {
              font-size: 1.1rem;
            }
            .card-text {
              font-size: 0.9rem;
            }
            .btn {
              font-size: 0.85rem;
              padding: 7px 12px;
            }
          }

          @media (max-width: 576px) {
            .projects-container {
              grid-template-columns: 1fr;
              gap: 15px;
              padding: 10px;
            }
            .card img {
              height: 160px;
            }
            .card-title {
              font-size: 1rem;
            }
            .card-text {
              font-size: 0.85rem;
            }
            .btn {
              font-size: 0.8rem;
              padding: 6px 10px;
            }
          }

          @media (max-width: 400px) {
            .card-body {
              padding: 10px;
            }
            .card img {
              height: 140px;
            }
            .card-title {
              font-size: 0.95rem;
            }
            .card-text {
              font-size: 0.8rem;
            }
            .btn {
              font-size: 0.75rem;
              padding: 5px 8px;
            }
          }
        `}
      </style>

      <h1 style={{ textAlign: "center", marginTop: "20px" }}>My Projects:</h1>

      <div className="projects-container">
        
        {/* Card 1 */}
        <div className="card">
          <img src="/HMS.png" alt="Hospital Management System" />
          <div className="card-body">
            <h5 className="card-title">Hospital Management System</h5>
            <p className="card-text">
              A full-stack Hospital Management System with React frontend, Spring Boot backend, and MySQL database.
            </p>
            <p className="card-text"><b>Tech Stack:</b>
              <ul>
                <li><b>Java (JDK):</b> Core programming language for application logic</li>
                <li><b>Java Swing (javax.swing):</b> GUI components for building the desktop interface</li>
                <li><b>AWT (java.awt):</b> Event handling and basic UI layout</li>
                <li><b>Java Event Handling (java.awt.event):</b> Capturing button clicks and user interactions</li>
                <li><b>JDBC:</b> For connecting and performing operations on the database</li>
                <li><b>MySQL:</b> Relational database for storing hospital records</li>
              </ul>
            </p>
            <a href="https://hosptal-management-system.vercel.app/" className="btn">Go Live</a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card">
          <img src="/Java-Quiz.png" alt="Java Quiz" />
          <div className="card-body">
            <h5 className="card-title">Java Quiz</h5>
            <p className="card-text">
              A Java Swing-based quiz app with multiple-choice questions, timer, and score tracking.
            </p>
            <p className="card-text"><b>Tech Stack:</b>
              <ul>
                <li><b>Java (JDK):</b> Core programming language for quiz logic</li>
                <li><b>Java Swing:</b> For creating GUI quiz interface</li>
                <li><b>AWT:</b> Event handling for user actions</li>
                <li><b>Timer:</b> Countdown for each question</li>
                <li><b>OOP Principles:</b> Structured code</li>
              </ul>
            </p>
            <a href="https://github.com/bhargavnanicaptain/JAVA-QUIZ.git" className="btn">🔗 View Source Code</a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card">
          <img src="/Codegnan.png" alt="Codegnan Clone" />
          <div className="card-body">
            <h5 className="card-title">Codegnan Clone</h5>
            <p className="card-text">
              A responsive web clone of Codegnan Training website built with React, Material UI, and Bootstrap.
            </p>
            <p className="card-text"><b>Tech Stack:</b>
              <ul>
                <li><b>React JS:</b> Frontend library</li>
                <li><b>React Router DOM:</b> Navigation</li>
                <li><b>Bootstrap:</b> Responsive design</li>
                <li><b>JavaScript (ES6):</b> Dynamic functionality</li>
                <li><b>CSS3:</b> Styling</li>
              </ul>
            </p>
            <a href="https://codegnan-website.vercel.app/" className="btn">Go Live</a>
          </div>
        </div>

        {/* Card 4 */}
        <div className="card">
          <img src="/Paytm-Clone.png" alt="Paytm Clone" />
          <div className="card-body">
            <h5 className="card-title">Paytm Clone</h5>
            <p className="card-text">
              A Paytm UI clone made with React, React Router DOM, and Bootstrap for learning purposes.
            </p>
            <p className="card-text"><b>Tech Stack:</b>
              <ul>
                <li><b>React JS:</b> Interactive UI</li>
                <li><b>React Router DOM:</b> Navigation</li>
                <li><b>Material UI:</b> Modern components</li>
                <li><b>Bootstrap:</b> Responsive layouts</li>
                <li><b>Slick Carousel:</b> Sliders</li>
              </ul>
            </p>
            <a href="https://paytm-clone.vercel.app/" className="btn">Go Live</a>
          </div>
        </div>

        {/* Card 5 */}
        <div className="card">
          <img src="/Organic.png" alt="Organic Products" />
          <div className="card-body">
            <h5 className="card-title">Organic Products Website</h5>
            <p className="card-text">
              A clean and responsive static website showcasing organic products.
            </p>
            <p className="card-text"><b>Tech Stack:</b>
              <ul>
                <li><b>HTML5:</b> Structure</li>
                <li><b>CSS3:</b> Styling</li>
                <li><b>Bootstrap 5:</b> Layout</li>
              </ul>
            </p>
            <a href="https://organic-products-dun.vercel.app/#" className="btn">Go Live</a>
          </div>
        </div>

        {/* Card 6 */}
        <div className="card">
          <img src="/Finance.png" alt="Portfolio" />
          <div className="card-body">
            <h5 className="card-title">Personal Finance Tracker Using React</h5>
            <p className="card-text">
              A single-page Finance Tracker built using React.
            </p>
            <p className="card-text"><b>Tech Stack:</b>
              <ul>
                <li><b>React JS:</b> Frontend</li>
                <li><b>JavaScript (ES6):</b> Logic</li>
                <li><b>Local State:</b> Transactions</li>
                <li><b>CSS3 / Bootstrap:</b> Styling</li>
              </ul>
            </p>
            <a href="https://finance-tracker-using-react.vercel.app/" className="btn">Go Live</a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Projects;
