import React from 'react';
import headshot from "../../assets/cover/headshotCircle.png";

function About() {
  return (
    <section className='my-5'>
        <img src={headshot} className="my-2" style={{ width: "25%" }} alt="headshot" />
        <h1 id="about">Adam Menkes</h1>
        <p>Hi, my name is Adam, and I'm an aspiring full stack web developer! I'm a recent graduate of the UC Berkeley Coding Bootcamp, and I am currently living in San Francisco, CA.</p>
        <p>I was a former Project Engineer with an architecture firm; however I was drawn to the tech industry after living in San Francisco, and decided it was time to make a change with my career.</p>
    </section>
  );
}

export default About;