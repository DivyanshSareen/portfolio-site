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
        <div key={icon} className="contact-icon">
          <object type="image/svg+xml" data={icon}></object>
        </div>
      ))}
    </section>
  );
};

export default Contact;
