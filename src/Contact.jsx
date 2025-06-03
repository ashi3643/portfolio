import React, { useEffect, useRef, useState } from 'react';
import './Contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from 'emailjs-com';
import Confetti from 'react-confetti';
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const SERVICE_ID = 'service_l6wv2u9';
const TEMPLATE_ID = 'template_cy6bsh9'; // Updated with your EmailJS template ID
const USER_ID = 'p6NtxAc1I7wYMKZ7S'; // Your EmailJS public key

const socials = [
  { icon: <FaEnvelope />, label: 'Email', link: 'mailto:ashishthyadi@gmail.com' },
  { icon: <FaGithub />, label: 'GitHub', link: 'https://github.com/ashi3643' },
  { icon: <FaLinkedin />, label: 'LinkedIn', link: 'https://www.linkedin.com/in/ashish-kumar-thyadi-30b9b0267/' },
  { icon: <FaInstagram />, label: 'Instagram', link: 'https://www.instagram.com/ashish.thyadi/' }
];

const Contact = ({ darkMode }) => {
  useEffect(() => { AOS.init({ once: true, duration: 900, offset: 60 }); }, []);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const formRef = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    setError('');
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, USER_ID)
      .then(() => {
        setSent(true);
        setLoading(false);
        setTimeout(() => setSent(false), 3000);
        formRef.current.reset();
      })
      .catch(() => {
        setError('Failed to send. Please try again.');
        setLoading(false);
      });
  };

  return (
    <section className={`contact-section${darkMode ? ' dark' : ' light'}`} id="contact" data-aos="fade-up" style={{display:'flex',flexDirection:'row',alignItems:'flex-start',gap:'3rem',flexWrap:'wrap',justifyContent:'center'}}>
      <div style={{flex:1,minWidth:320}}>
        <h2>Contact</h2>
        <form className="contact-form floating-label-form" ref={formRef} onSubmit={handleSubmit} autoComplete="off" data-aos="fade-up" data-aos-delay="200">
          <div className="form-group">
            <input type="text" name="name" id="contact-name" required autoComplete="off" />
            <label htmlFor="contact-name">Your Name</label>
          </div>
          <div className="form-group">
            <input type="email" name="email" id="contact-email" required autoComplete="off" />
            <label htmlFor="contact-email">Your Email</label>
          </div>
          <div className="form-group">
            <textarea name="message" id="contact-message" required autoComplete="off" />
            <label htmlFor="contact-message">Your Message</label>
          </div>
          <button type="submit" disabled={loading} className="submit-btn">{loading ? 'Sending...' : 'Send Message'}</button>
          {sent && <div className="confetti-success"><Confetti numberOfPieces={120} recycle={false} /><span className="checkmark">✔</span> Thank you! Your message has been sent.</div>}
          {error && <div className="form-error">{error}</div>}
        </form>
        <div style={{marginTop: '1.5rem', color: darkMode ? '#bae6fd' : '#0ea5e9', fontWeight: 500}} data-aos="fade-up" data-aos-delay="600">
          Or email me directly at <a href="mailto:ashishthyadi@gmail.com" style={{color: 'inherit', textDecoration: 'underline'}}>ashishthyadi@gmail.com</a>
        </div>
      </div>
      <div style={{flex:1,minWidth:260,maxWidth:420,display:'flex',flexDirection:'column',alignItems:'center',gap:'2.5rem'}}>
        {/* Talk to Me Section */}
        <div style={{height:'1.5rem'}}></div> {/* Spacer above Talk to Me section */}
        <div className="talk-to-me" data-aos="fade-up" data-aos-delay="500" style={{padding:'2rem',borderRadius:'18px',background:darkMode?'#23272f':'#f8fafc',boxShadow:'0 4px 24px #38bdf822',width:'100%',textAlign:'center'}}>
          <h3 style={{color:darkMode?'#38bdf8':'#0ea5e9',marginBottom:'1rem',fontWeight:700,fontSize:'1.3rem'}}>Want to talk to me directly?</h3>
          <p style={{color:darkMode?'#cbd5e1':'#334155',marginBottom:'1.2rem'}}>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Let's connect!</p>
          <a href="https://wa.me/9347460365" className="btn" style={{fontSize:'1.1rem',padding:'0.7em 2em',borderRadius:'30px',fontWeight:'bold',background:'linear-gradient(90deg,#25d366,#128c7e)',color:'#fff',boxShadow:'0 2px 8pxrgba(37, 118, 211, 0.27)',textDecoration:'none',transition:'background 0.2s',marginLeft:'1rem',display:'inline-block'}} target="_blank" rel="noopener noreferrer">Send Message</a>
        </div>
        <div className="contact-socials" data-aos="fade-up" data-aos-delay="600" style={{marginTop:'1rem',display:'flex',justifyContent:'center',gap:'1.2rem',flexWrap:'wrap'}}>
          {socials.map(s => (
            <a href={s.link} key={s.label} className="contact-social-icon" target="_blank" rel="noopener noreferrer" title={s.label} aria-label={s.label} tabIndex={0}>
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
