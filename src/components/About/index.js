import React from 'react';
import headshot from "../../assets/cover/headshotCircle.png";

function About() {
  return (
    <section className='my-5'>
      <h1 id="about">Who am I?</h1>
      <img src={headshot} className="my-2" style={{ width: "50%" }} alt="headshot" />
    </section>
  );
}

export default About;