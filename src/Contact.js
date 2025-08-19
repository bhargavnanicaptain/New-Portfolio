// Contact.js
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d3q1s7v", // Service ID
        "template_yf2qcph", // Template ID
        form.current,
        "DXwopCaIr_rZjjfm3" // Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent Successfully ✅");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to Send ❌ Try again.");
        }
      );
  };

  return (
    <div>
      <style>
        {`
          /* Animations */
          @keyframes slideUp {
            0% { transform: translateY(50px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
          @keyframes zoomPulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.2); }
          }

          /* Container */
          .contact-container {
            font-family: Arial, sans-serif;
            padding: 40px;
            background-color: #f9f9f9;
            min-height: 100vh;
          }

          /* Headings */
          .contact-heading {
            font-size: 30px;
            text-align: center;
            color: #222;
            font-weight: bold;
            margin-bottom: 15px;
          }
          .contact-subheading {
            text-align: center;
            font-size: 16px;
            color: #555;
            margin-bottom: 30px;
          }

          /* Form */
          form {
            max-width: 500px;
            margin: auto;
            background: white;
            padding: 25px;
            border-radius: 8px;
            box-shadow: 0px 4px 15px rgba(0,0,0,0.1);
            animation: slideUp 0.8s ease-out forwards;
          }
          input, textarea {
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 14px;
          }
          button {
            width: 100%;
            padding: 12px;
            background-color: #4cafef;
            color: white;
            font-size: 16px;
            font-weight: bold;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: 0.3s;
          }
          button:hover { background-color: #3b8fd6; }

          /* Resume Section */
          .resume-section {
            text-align: center;
            margin-top: 40px;
            animation: slideUp 0.8s ease-out forwards;
          }
          .resume-heading {
            font-size: 22px;
            font-weight: bold;
            color: #222;
            margin-bottom: 15px;
          }
          .resume-btn {
            padding: 12px 25px;
            background: linear-gradient(45deg, #4cafef, #3b8fd6);
            color: white;
            font-size: 16px;
            font-weight: bold;
            border: none;
            border-radius: 25px;
            cursor: pointer;
            transition: 0.3s ease;
            box-shadow: 0px 4px 10px rgba(0,0,0,0.2);
          }
          .resume-btn:hover {
            transform: translateY(-3px) scale(1.05);
            box-shadow: 0px 6px 15px rgba(0,0,0,0.3);
          }

          /* Social Icons */
          .social-icons {
            display: flex;
            justify-content: center;
            margin-top: 20px;
            gap: 15px;
          }
          .social-icons a {
            font-size: 28px;
            animation: zoomPulse 1.5s infinite ease-in-out;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.3s ease, color 0.3s ease;
          }
          .instagram { color: #E4405F; }
          .linkedin { color: #0A66C2; }
          .github { color: #181717; }
          .whatsapp { color: #25D366; }
          .telegram { color: #0088CC; }
          .social-icons a:hover { transform: scale(1.3); }

          /* Map Section */
          .map-section {
            margin-top: 50px;
            text-align: center;
            animation: slideUp 0.8s ease-out forwards;
          }
          .map-heading {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 20px;
            color: #222;
          }
          .map-container {
            max-width: 800px;
            margin: auto;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0px 6px 20px rgba(0,0,0,0.15);
          }
          iframe {
            width: 100%;
            height: 450px;
            border: 0;
          }
        `}
      </style>

      <div className="contact-container">
        {/* New Heading */}
        <h2 className="contact-heading">Let’s Connect & Collaborate</h2>
        <p className="contact-subheading">
          Have an idea, project, or opportunity? Drop me a message below 👇
        </p>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required />
          <button type="submit">Send Message</button>
        </form>

        {/* Resume Section */}
        <div className="resume-section">
          <h3 className="resume-heading">Download Resume</h3>
          <p>See what I bring to the table.</p>
          <a href="/V.T.Bhargav_Resume.pdf" download>
            <button className="resume-btn">📄 Download Resume</button>
          </a>
        </div>

        {/* Social Icons */}
        <div className="social-icons">
          <a href="https://www.instagram.com/accounts/login/?next=%2Fnani_captainbhargav%2F&source=omni_redirect"
             target="_blank" rel="noreferrer" className="instagram">
            <InstagramIcon />
          </a>
          <a href="https://linkedin.com/in/vtbhargav-tech" target="_blank" rel="noreferrer" className="linkedin">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/bhargavnanicaptain" target="_blank" rel="noreferrer" className="github">
            <GitHubIcon />
          </a>
          <a href="https://api.whatsapp.com/send/?phone=918074588232&text&type=phone_number&app_absent=0"
             target="_blank" rel="noreferrer" className="whatsapp">
            <WhatsAppIcon />
          </a>
          <a href="https://t.me/BHARGAVNANI" target="_blank" rel="noreferrer" className="telegram">
            <TelegramIcon />
          </a>
        </div>

        {/* Map Section */}
        <div className="map-section">
          <h3 className="map-heading">📍 Find Me Here</h3>
          <div className="map-container">
            <iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2265.7042217616904!2d80.17039957844985!3d17.245687306011142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3459e43e637bf3%3A0x56d80e365c999b55!2sRaja%20Rajeshwari%20Ammavari%20Temple!5e0!3m2!1sen!2sin!4v1755580445289!5m2!1sen!2sin"
  width="600"
  height="450"
  style={{ border: 0 }}   // ✅ FIXED
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade">
</iframe>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
