import React from "react";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram-draw-logo.png";
import bandcamp from "../../assets/musical-note.png";

function Contact() {
  return (
    <div id='contact-main'>
      <h1>Look, Listen, Like</h1>
      <h3>#EstacadoTheBand</h3>
      <div className='social-icons'>
        <a
          href='https://www.facebook.com/estacadotheband/'
          target='_blank'
          rel='noopener'>
          <div>
            <img src={facebook} />
          </div>
        </a>
        <a
          href='https://estacado.bandcamp.com/releases'
          target='_blank'
          rel='noopener'>
          <div>
            <img src={bandcamp} />
          </div>
        </a>
        <a
          href='https://www.instagram.com/estacadotheband/'
          target='_blank'
          rel='noopener'>
          <div>
            <img src={instagram} />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Contact;
