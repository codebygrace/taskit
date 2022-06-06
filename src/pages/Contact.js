import React from 'react';
import Navbar from '../components/Navbar';
import '../App.css';

function Contact() {
  return (
    <div className="contact">
      <Navbar/>
      <h1 className="title">Contact Me</h1>
      <p className="email"><a href="mailto: gracemillswebdev@gmail.com">Email Me</a></p>
      <p className="github">Github: <a href>grace-mills</a></p>
      <p className="linkedin">LinkedIn: <a href="https://linkedin.com/in/codebygrace">Grace Mills</a></p>
    </div>
  )
}

export default Contact;