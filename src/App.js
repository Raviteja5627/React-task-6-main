import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="header bg-primary text-white py-5 text-center">
        <h1 className="name">Ravi Teja</h1>
        <p className="job-title">APP Developer</p>
      </header>

      <section className="about py-5">
        <div className="container">
          <h2 className="section-title">About Myself</h2>
          <p>
            I'm a app Developer with expertise in JavaScript, React, Node.js. i want to learn and explore more about technology.
          </p>
        </div>
      </section>

      <section className="contact py-5 bg-primary text-white">
        <div className="container">
          <h2 className="section-title text-white">Contact Me</h2>
          <p>Email: kilaparthiraviteja@gmail.com</p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/ravi-teja-1b70b2250" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
          <p>GitHub: <a href="https://github.com/Raviteja5627" target="_blank" rel="noopener noreferrer">GitHub Profile</a></p>
        </div>
      </section>
    </div>
  );
}

export default App;
