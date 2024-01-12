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
            Email:  almurtuzatours@yahoo.com
            <br />
            Mohamed Rafik Kuresh - 9624245031
            <br />
            Mohamed Fahad Kuresh - 9737991017
            <br />
            Address : 301 3rd Floor Moin Complex Opp Riyaz Hotel Jamalpur Chakla Ahmedabad 380001
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
