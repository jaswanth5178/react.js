import React from "react";

function Contact() {
  return (
    <>
      <section className="contact section" id="contact">
        <div className="section-title">
          <p>Get In Touch</p>
          <h2>
            Contact <span>Me</span>
          </h2>
        </div>

        <div className="contact-container">
          <div className="contact-info">
            <h3>Let's Work Together</h3>
            <p>
              If you have a project or want to discuss something, feel free to contact me.
            </p>
            
            <div className="contact-item">
              <strong>Location</strong>
              <p>India</p>
            </div>
          </div>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message" rows="6"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
