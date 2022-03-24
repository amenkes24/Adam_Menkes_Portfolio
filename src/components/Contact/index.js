import React from "react";
import { VscChevronDown } from "react-icons/vsc";
import { VscChevronRight } from "react-icons/vsc";

function Skills() {
  return (
    <section className="my-5">
      <h1 id="about">Skills</h1>
      <h3>
        <VscChevronDown /> Technical Skills
      </h3>
      <div className="container">
        <ul>
          <div className="row">
            <div className="col">
              <li>
                <VscChevronRight /> HTML
              </li>
            </div>
            <div className="col">
              <li>
                <VscChevronRight /> CSS
              </li>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <li>
                <VscChevronRight /> JavaScript
              </li>
            </div>
            <div className="col">
              <li>
                <VscChevronRight /> MongoDB
              </li>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <li>
                <VscChevronRight /> Express.js
              </li>
            </div>
            <div className="col">
              <li>
                <VscChevronRight /> React
              </li>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <li>
                <VscChevronRight /> Node.js
              </li>
            </div>
            <div className="col">
              <li>
                <VscChevronRight /> MySQL
              </li>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <li>
                <VscChevronRight /> NoSQL
              </li>
            </div>
            <div className="col">
              <li>
                <VscChevronRight /> GraphQL
              </li>
            </div>
          </div>
        </ul>
      </div>
      <h3>
        <VscChevronDown /> Resume
      </h3>
      <div className="container">
        <ul>
          <div className="row">
            <div className="col"> <VscChevronRight />
                <a href="https://docs.google.com/document/d/1aWq4QEx3bipeaXc2NoXrvQ96g6qRS8WK/edit?usp=sharing&ouid=113500844249455127382&rtpof=true&sd=true" target="_blank">
                &nbsp;Click Here to Open
              </a>
            </div>
          </div>
        </ul>
      </div>
    </section>
  );
}

export default Skills;
