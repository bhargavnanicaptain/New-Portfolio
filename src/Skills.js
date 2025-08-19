import React from "react";

function Skills() {
  return (
    <div>
      <style>
        {`
          body {
            background-color: #f0f4f8;
          }

          h3 {
            text-align: justify;
          }

          .skills-section {
            padding: 4rem 2rem;
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            max-width: 1200px;
            margin: 4rem auto;
            box-shadow: 0 12px 30px rgba(0, 255, 255, 0.08);
          }

          .skills-title {
            font-size: 2.2rem;
            color: #00c4ff;
            margin-bottom: 2.5rem;
            text-align: center;
            text-shadow: 0 0 8px rgba(0, 255, 255, 0.3);
          }

          .card-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
            gap: 1.8rem;
            justify-content: center;
            align-items: stretch;
          }

          .card {
            background-color: #fff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 6px 20px rgba(0, 255, 255, 0.15);
            transition: transform 0.35s ease, box-shadow 0.35s ease;
            animation: fadeInCard 1s ease forwards;
            opacity: 0;
          }

          .card:hover {
            transform: translateY(-6px) scale(1.03);
            box-shadow: 0 10px 25px rgba(0, 255, 255, 0.25);
          }

          .card-img-top {
            height: 140px;
            object-fit: contain;
            padding: 1rem;
            background: #f9f9f9;
          }

          .card-body {
            padding: 1rem 1.4rem;
            text-align: center;
            color: #000;
          }

          .card-title {
            font-size: 1.2rem;
            font-weight: 600;
          }

          .skill-bar {
            width: 100%;
            height: 10px;
            background: #e0e0e0;
            border-radius: 5px;
            margin-top: 10px;
            overflow: hidden;
            position: relative;
          }

          .skill-fill {
            height: 100%;
            background: linear-gradient(90deg, #00c4ff, #00f0ff);
            border-radius: 5px;
            animation: fillSkill 1.5s ease-out forwards;
            width: var(--progress);
          }

          .skill-label {
            font-size: 0.9rem;
            color: #444;
            margin-top: 6px;
          }

          @keyframes fillSkill {
            from {
              width: 0;
            }
            to {
              width: var(--progress);
            }
          }

          @keyframes fadeInCard {
            from {
              transform: translateY(30px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }

          .head {
            text-align: center;
            margin-top: 2rem;
          }

          /* ---------- MEDIA QUERIES ---------- */

          /* Large Desktops (1200px and up) */
          @media (min-width: 1200px) {
            .skills-title {
              font-size: 2.5rem;
            }
          }

          /* Tablets & Small Laptops (768px - 1199px) */
          @media (max-width: 1199px) and (min-width: 768px) {
            .skills-section {
              padding: 3rem 1.5rem;
            }
            .skills-title {
              font-size: 2rem;
            }
            .card-title {
              font-size: 1.1rem;
            }
          }

          /* Mobiles (Up to 767px) */
          @media (max-width: 767px) {
            .skills-section {
              padding: 2rem 1rem;
              margin: 2rem auto;
            }
            h3 {
              font-size: 1rem;
              text-align: center;
            }
            .skills-title {
              font-size: 1.6rem;
              margin-bottom: 1.5rem;
            }
            .card-grid {
              grid-template-columns: 1fr;
              gap: 1rem;
            }
            .card-img-top {
              height: 100px;
              padding: 0.5rem;
            }
            .card-title {
              font-size: 1rem;
            }
            .skill-label {
              font-size: 0.8rem;
            }
          }

          /* Extra Small Devices (Under 480px) */
          @media (max-width: 480px) {
            .skills-title {
              font-size: 1.4rem;
            }
            h3 {
              font-size: 0.95rem;
            }
            .card {
              border-radius: 8px;
            }
          }
        `}
      </style>

      <section className="skills-section">
        <h2 className="skills-title">Tech Stack ⚙️</h2>
        <h3>
          These are the tools in my tech arsenal — sharpened through hands-on experience,
          late-night debugging, and relentless curiosity.
        </h3><br />

        {/* Programming Languages */}
        <h3 className="head">Programming Languages:</h3>
        <div className="card-grid">
          <div className="card">
            <img src="/java.png" className="card-img-top" alt="Java Logo" />
            <div className="card-body">
              <h5 className="card-title">Java</h5>
              <div className="skill-bar">
                <div className="skill-fill" style={{ "--progress": "90%" }}></div>
              </div>
              <p className="skill-label">Proficiency: 90%</p>
            </div>
          </div>

          <div className="card">
            <img src="/python.png" className="card-img-top" alt="Python Logo" />
            <div className="card-body">
              <h5 className="card-title">Python</h5>
              <div className="skill-bar">
                <div className="skill-fill" style={{ "--progress": "80%" }}></div>
              </div>
              <p className="skill-label">Proficiency: 80%</p>
            </div>
          </div>

          <div className="card">
            <img src="https://www.techasoft.com/blog/2019/12/1576592374.png" className="card-img-top" alt="Go Logo" />
            <div className="card-body">
              <h5 className="card-title">Go</h5>
              <div className="skill-bar">
                <div className="skill-fill" style={{ "--progress": "85%" }}></div>
              </div>
              <p className="skill-label">Proficiency: 85%</p>
            </div>
          </div>

          <div className="card">
            <img src="/HTML.png" className="card-img-top" alt="HTML Logo" />
            <div className="card-body">
              <h5 className="card-title">HTML</h5>
              <div className="skill-bar">
                <div className="skill-fill" style={{ "--progress": "100%" }}></div>
              </div>
              <p className="skill-label">Proficiency: 100%</p>
            </div>
          </div>

          <div className="card">
            <img src="/CSS.png" className="card-img-top" alt="CSS Logo" />
            <div className="card-body">
              <h5 className="card-title">CSS</h5>
              <div className="skill-bar">
                <div className="skill-fill" style={{ "--progress": "95%" }}></div>
              </div>
              <p className="skill-label">Proficiency: 95%</p>
            </div>
          </div>

          <div className="card">
            <img src="/JavaScript.jpg" className="card-img-top" alt="JavaScript Logo" />
            <div className="card-body">
              <h5 className="card-title">JavaScript</h5>
              <div className="skill-bar">
                <div className="skill-fill" style={{ "--progress": "90%" }}></div>
              </div>
              <p className="skill-label">Proficiency: 90%</p>
            </div>
          </div>
        </div>

        {/* Frameworks & Libraries */}
        <h3 className="head">Frameworks & Libraries:</h3>
        <div className="card-grid">
          <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDDeFWiJwV70GxgegCr1OR-cnD1ZsrrH4-vg&s" className="card-img-top" alt="Bootstrap Logo" />
            <div className="card-body">
              <h5 className="card-title">Bootstrap</h5>
              <div className="skill-bar">
                <div className="skill-fill" style={{ "--progress": "90%" }}></div>
              </div>
              <p className="skill-label">Proficiency: 90%</p>
            </div>
          </div>

          <div className="card">
            <img src="/react.png" className="card-img-top" alt="React Logo" />
            <div className="card-body">
              <h5 className="card-title">React JS</h5>
              <div className="skill-bar">
                <div className="skill-fill" style={{ "--progress": "85%" }}></div>
              </div>
              <p className="skill-label">Proficiency: 85%</p>
            </div>
          </div>

          <div className="card">
            <img src="https://pbs.twimg.com/profile_images/1235868806079057921/fTL08u_H_400x400.png" className="card-img-top" alt="Spring Boot Logo" />
            <div className="card-body">
              <h5 className="card-title">Spring Boot</h5>
              <div className="skill-bar">
                <div className="skill-fill" style={{ "--progress": "80%" }}></div>
              </div>
              <p className="skill-label">Proficiency: 80%</p>
            </div>
          </div>
          <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS0M98G8iuqqOV0QAUSjcxce42DsFO2RzmKQD8gB575BI8XasSkJetwHgfn_hKP7OnPyo&usqp=CAU" className="card-img-top" alt="Spring Boot Logo" />
            <div className="card-body">
              <h5 className="card-title">Java Database Connectivity (JDBC)</h5>
              <div className="skill-bar">
                <div className="skill-fill" style={{ "--progress": "90%" }}></div>
              </div>
              <p className="skill-label">Proficiency: 90%</p>
            </div>
          </div>
        </div>
        {/* {Data Bases } */}
        <h3 className="head">Databases</h3>
        <div className="card-grid">
          <div className="card">
            <img src="https://media.licdn.com/dms/image/v2/D4E12AQFZk_BOEXMuxw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1711355118921?e=2147483647&v=beta&t=0dn89z7vhHg_yojXucqZc86hRlZl6fXb2gUTPaCZSNY" className="card-img-top" alt="Spring Boot Logo" />
            <div className="card-body">
              <h5 className="card-title">MySQL</h5>
              <div className="skill-bar">
                <div className="skill-fill" style={{ "--progress": "90%" }}></div>
              </div>
              <p className="skill-label">Proficiency: 90%</p>
            </div>
          </div>
          <div className="card">
            <img src="https://www.media3.net/img/m3/mssql.jpg" className="card-img-top" alt="Spring Boot Logo" />
            <div className="card-body">
              <h5 className="card-title">Microsoft SQL Server</h5>
              <div className="skill-bar">
                <div className="skill-fill" style={{ "--progress": "90%" }}></div>
              </div>
              <p className="skill-label">Proficiency: 90%</p>
            </div>
          </div>
        </div>
        {/* {Tools and Platforms} */}
        <h3 className="head">Tools & Platforms</h3>
        <div className="card-grid">
          <div className="card">
            <img src="https://i0.wp.com/www.frenchweb.fr/wp-content/uploads/2020/10/logo-blue-prism-rpa.jpg?resize=650%2C400&ssl=1" className="card-img-top" alt="Spring Boot Logo" />
            <div className="card-body">
              <h5 className="card-title">Blue Prism (RPA Platform)</h5>
              <div className="skill-bar">
                <div className="skill-fill" style={{ "--progress": "90%" }}></div>
              </div>
              <p className="skill-label">Proficiency: 90%</p>
            </div>
          </div>
          <div className="card">
            <img src="https://www.aviator.co/blog/wp-content/uploads/2023/03/gitsubmodule.jpeg" className="card-img-top" alt="Spring Boot Logo" />
            <div className="card-body">
              <h5 className="card-title">Git (Version Control)</h5>
              <div className="skill-bar">
                <div className="skill-fill" style={{ "--progress": "90%" }}></div>
              </div>
              <p className="skill-label">Proficiency: 90%</p>
            </div>
          </div>
          <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDKpW9TCCEG-ROLzgN9vfq39eZy2bZwQ-Z4OGR4vUWvSYBcNo2sHCIux7mCVqkb3ZQirc&usqp=CAU" className="card-img-top" alt="Spring Boot Logo" />
            <div className="card-body">
              <h5 className="card-title">Servicenow (ITSM / Workflow automation)</h5>
              <div className="skill-bar">
                <div className="skill-fill" style={{ "--progress": "90%" }}></div>
              </div>
              <p className="skill-label">Proficiency: 90%</p>
            </div>
          </div>

          <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdZ7bKbm3ERJE1kRDBndCZLGr7nCIgTYaMxA&s" className="card-img-top" alt="Spring Boot Logo" />
            <div className="card-body">
              <h5 className="card-title">Eclipse</h5>
              <div className="skill-bar">
                <div className="skill-fill" style={{ "--progress": "100%" }}></div>
              </div>
              <p className="skill-label">Proficiency: 100%</p>
            </div>
          </div>
          <div className="card">
            <img src="https://blog.cloudanalogy.com/wp-content/uploads/2020/03/vsc-01.jpg" className="card-img-top" alt="Spring Boot Logo" />
            <div className="card-body">
              <h5 className="card-title">VS Code</h5>
              <div className="skill-bar">
                <div className="skill-fill" style={{ "--progress": "100%" }}></div>
              </div>
              <p className="skill-label">Proficiency: 100%</p>
            </div>
          </div>
          <div className="card">
            <img src="https://dl.flathub.org/media/com/jetbrains/IntelliJ-IDEA-Ultimate/abf65e4438699ed3a3072695caa0db9f/icons/128x128@2/com.jetbrains.IntelliJ-IDEA-Ultimate.png" className="card-img-top" alt="Spring Boot Logo" />
            <div className="card-body">
              <h5 className="card-title">IntelliJ Idea</h5>
              <div className="skill-bar">
                <div className="skill-fill" style={{ "--progress": "100%" }}></div>
              </div>
              <p className="skill-label">Proficiency: 100%</p>
            </div>
          </div>
          </div>
          {/* {Observability & Performance} */}
          <h3 className="head">Observability & Performance</h3>
          <div className="card-grid">
            
          <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRa41XgGM1sjr0t0C3SniP6UWlfLUncUfK-qgxkZDU9s0sf7zFHo5x-rFrD1sIRhLPG9s&usqp=CAU" className="card-img-top" alt="Spring Boot Logo" />
            <div className="card-body">
              <h5 className="card-title">Solarwinds</h5>
              <div className="skill-bar">
                <div className="skill-fill" style={{ "--progress": "80%" }}></div>
              </div>
              <p className="skill-label">Proficiency: 80%</p>
            </div>
          </div>
          <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrtqkI75ttDqm3YCpMpZ_1EVTYYyGzvyhItg&s" className="card-img-top" alt="Spring Boot Logo" />
            <div className="card-body">
              <h5 className="card-title">Stackify</h5>
              <div className="skill-bar">
                <div className="skill-fill" style={{ "--progress": "80%" }}></div>
              </div>
              <p className="skill-label">Proficiency: 80%</p>
            </div>
          </div>
          </div>
          {/* {Cloud & Container Technologies } */}
          <h3 className="head">Cloud & Container Technologies</h3>
          <div className="card-grid">
            <div className="card">
            <img src="https://pendulum-it.com/wp-content/uploads/2020/05/AWS-logo.png" className="card-img-top" alt="Spring Boot Logo" />
            <div className="card-body">
              <h5 className="card-title">Amazon Web Services</h5>
              <div className="skill-bar">
                <div className="skill-fill" style={{ "--progress": "75%" }}></div>
              </div>
              <p className="skill-label">Proficiency: 75%</p>
            </div>
          </div>
          <div className="card">
            <img src="https://pendulum-it.com/wp-content/uploads/2020/05/Azure-logo-blue.jpg" className="card-img-top" alt="Spring Boot Logo" />
            <div className="card-body">
              <h5 className="card-title">Azure</h5>
              <div className="skill-bar">
                <div className="skill-fill" style={{ "--progress": "60%" }}></div>
              </div>
              <p className="skill-label">Proficiency: 60%</p>
            </div>
          </div>
          <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjte1snoB_G6qFlA3xcTNAF4-fiTfQF0iyqg&s" className="card-img-top" alt="Spring Boot Logo" />
            <div className="card-body">
              <h5 className="card-title">Kubernetes</h5>
              <div className="skill-bar">
                <div className="skill-fill" style={{ "--progress": "50%" }}></div>
              </div>
              <p className="skill-label">Proficiency: 50%</p>
            </div>
          </div>
          </div>
          {/* {Operating Systems} */}
          <h3 className="head">Operating Systems</h3>
          <div className="card-grid">
            <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsa5XwKTzJEJqYg5A_CMz0XbmcfxgWcPrw9R-sApRHbqf5moigVpbWynsrTDIuMHcmS6Y&usqp=CAU" className="card-img-top" alt="Spring Boot Logo" />
            <div className="card-body">
              <h5 className="card-title">Windows</h5>
              <div className="skill-bar">
                <div className="skill-fill" style={{ "--progress": "90%" }}></div>
              </div>
              <p className="skill-label">Proficiency: 90%</p>
            </div>
          </div>
          <div className="card">
            <img src="https://miro.medium.com/v2/resize:fit:1400/0*Qqqd7UsfFDPL7WXh.jpeg" className="card-img-top" alt="Spring Boot Logo" />
            <div className="card-body">
              <h5 className="card-title">Linux (Ubuntu)</h5>
              <div className="skill-bar">
                <div className="skill-fill" style={{ "--progress": "80%" }}></div>
              </div>
              <p className="skill-label">Proficiency: 80%</p>
            </div>
          </div>
          </div>
      </section>
    </div>
  );
}

export default Skills;
