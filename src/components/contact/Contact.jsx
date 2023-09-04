import React, { useRef } from 'react';
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {RiMessengerLine, RiWhatsappLine} from 'react-icons/ri'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_emwsxhw', 'template_coulddx', form.current, 'ofp63s4ED1Q6c1RKr')
    
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>purveshptdr1516@gmail.com</h5>
            <a href="mailto:purveshptdr1516@gmail.com" target="_blank">Send a mail</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Purvesh</h5>
            <a href="https://m.me/purvesh.patidar" target="_blank">Say Hi!</a>
          </article>
          <article className="contact__option">
            <RiWhatsappLine className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>+917772803921</h5>
            <a href="https://wa.me/917772803921" target="_blank">Let's Chat</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}


export default Contact;