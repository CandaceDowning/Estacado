import React from "react";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram-draw-logo.png";
import bandcamp from "../../assets/musical-note.png";
import gmail from "../../assets/post-envelope.png";

function Contact() {
  return (
    <div id='contact-main'>
      <div className='contact-background' />
      <h1>Look, Listen, Like</h1>
      <h3>#EstacadoTheBand</h3>
      <div className='social-icons'>
        <a
          href='https://www.facebook.com/estacadotheband/'
          target='_blank'
          rel='noopener noreferrer'>
          <div>
            <img src={facebook} alt='Facebook link.' />
          </div>
        </a>
        <a
          href='https://estacado.bandcamp.com/releases'
          target='_blank'
          rel='noopener noreferrer'>
          <div>
            <img src={bandcamp} alt='Bandcamp link.' />
          </div>
        </a>
        <a
          href='https://www.instagram.com/estacadotheband/'
          target='_blank'
          rel='noopener noreferrer'>
          <div>
            <img src={instagram} alt='instagram link.' />
          </div>
        </a>
        <a
          href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=someone@gmail.com'
          target='_blank'
          rel='noopener noreferrer'>
          <div>
            <img src={gmail} alt='gmail link.' />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Contact;
