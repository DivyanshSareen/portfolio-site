import React from "react";
import {
  LinkedIn,
  GitHub,
  Hashnode,
  Codewars,
  Twitter,
} from "../../assets/index";

const Contact = () => {
  let contactIcons = [
    { id: 1, icon: Twitter, url: "https://twitter.com/divyanshsareen" },
    {
      id: 2,
      icon: LinkedIn,
      url: "https://www.linkedin.com/in/divyansh-sareen-55302b195/",
    },
    { id: 3, icon: GitHub, url: "https://github.com/DivyanshSareen" },
    { id: 4, icon: Hashnode, url: "https://divyanshsareen.hashnode.dev/" },
    {
      id: 5,
      icon: Codewars,
      url: "https://www.codewars.com/users/DivyanshSareen",
    },
  ];
  return (
    <section className="contact">
      {contactIcons.map((icon) => (
        <div key={icon.id} className="contact-icon">
          <a href={icon.url} target="_blank">
            <img src={icon.icon} width="30vw"></img>
          </a>
        </div>
      ))}
    </section>
  );
};

export default Contact;
