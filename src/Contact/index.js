import React from 'react';
import './contact.css'

const Contact = ({ contact }) => (
  <li className="contact">
    <img
      alt="thumbnail"
      src={contact.thumbnail}
      role="presentation"
      className="contact-image"
    />
    <span className="contact-name">{contact.name}</span>
  </li>
);

export default Contact;
