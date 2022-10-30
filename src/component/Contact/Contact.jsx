import React from "react";
import {
  LinkedIn,
  GitHub,
  Hashnode,
  Codewars,
  Twitter,
} from "../../assets/index";

const Contact = () => {
  let contactIcons = [Twitter, LinkedIn, GitHub, Hashnode, Codewars];
  return (
    <section className="contact">
      {contactIcons.map((icon) => (
        <div className="contact-icon">
          <img src={icon} />
        </div>
      ))}
    </section>
  );
};

export default Contact;
