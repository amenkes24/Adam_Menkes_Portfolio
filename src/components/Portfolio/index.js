import React from "react";
import bookSearch from "../../assets/projects/bookSearch.jpg";
import budgetTracker from "../../assets/projects/budgetTracker.JPG";
import employeeTracker from "../../assets/projects/employeeTracker.JPG";
import fwitter from "../../assets/projects/fwitter.JPG";
import movieChat from "../../assets/projects/movieChat.JPG";
import noteTaker from "../../assets/projects/noteTaker.JPG";

function Portfolio() {
  return (
    <section className="my-5">
      <h1 id="about">Portfolio</h1>
      <div className="container">
        <div className="row">
          <div className="col">
            <a
              href="https://radiant-harbor-90326.herokuapp.com/"
              target="_blank"
            >
              <img
                src={movieChat}
                className="my-2 projectimage"
                style={{ width: "100%" }}
                alt="movie chat"
              />
            </a>
          </div>

          <div className="col">
            <a href="https://stark-basin-36744.herokuapp.com/" target="_blank">
              <img
                src={bookSearch}
                className="my-2"
                style={{ width: "100%" }}
                alt="book search engine"
              />
            </a>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <h4>Movie Chat</h4>
            <p>
              An application that allows users to write reviews about movies and
              interact with other users.
            </p>
          </div>

          <div className="col">
            <h4>Book Search Engine</h4>
            <p>
              An application set up to allow users to save book searches to the
              back end by using a fully functioning Google Books API search
              engine.{" "}
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <a href="https://quiet-basin-49239.herokuapp.com/" target="_blank">
              <img
                src={fwitter}
                className="my-2"
                style={{ width: "100%" }}
                alt="fwitter"
              />
            </a>
          </div>

          <div className="col">
            <a href="https://budgettracker-am.herokuapp.com/" target="_blank">
              <img
                src={budgetTracker}
                className="my-2"
                style={{ width: "100%" }}
                alt="budget tracker"
              />
            </a>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <h4>Fwitter</h4>
            <p>
              A social media application that allows users to post unfiltered
              thoughts on a public forum.
            </p>
          </div>

          <div className="col">
            <h4>Budget Tracker</h4>
            <p>
            An application that allows for offline access and functionality. The user will be able to add expenses and deposits to their budget with or without a connection.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <a href="https://safe-ocean-54462.herokuapp.com/" target="_blank">
              <img
                src={noteTaker}
                className="my-2"
                style={{ width: "100%" }}
                alt="note taker"
              />
            </a>
          </div>
          <div className="col">
            <a
              href="https://watch.screencastify.com/v/hISOHm1rOa9sd8TgCGK6"
              target="_blank"
            >
              <img
                src={employeeTracker}
                className="my-2"
                style={{ width: "100%" }}
                alt="employee tracker"
              />
            </a>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <h4>Note Taker</h4>
            <p>
            An application that can be used to write and save notes. This application uses an Express.js back end and will save and retrieve note data from a JSON file.
            </p>
          </div>

          <div className="col">
            <h4>Employee Tracker</h4>
            <p>
            A command-line application to manage a company's employee database, using Node.js, Inquirer, and MySQL.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
