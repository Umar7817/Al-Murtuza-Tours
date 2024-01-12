import React from "react";
import "./Global.css";

function Footer() {
  return (
    <div>
      <footer>
        <section className="contact-us">
          <h2>Contact Us</h2>
          <p>
            Have questions or ready to book your Hajj tour? Reach out to us:
          </p>
          <address>
            Email: info@yourorganization.com
            <br />
            Phone: +1 123-456-7890
          </address>
        </section>
        <p>
          &copy; {new Date().getFullYear()} Al-Murtuza. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
