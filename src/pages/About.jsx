import { Routes, Route, Link } from "react-router";
import "./About.css";

const About = () => {
  return (
    <>
      <div id="about-page">
        <header>
          <h2>
            <Link to="/">dwindle </Link>
          </h2>
        </header>
        <h1>About</h1>

        <main id="about-main">
          <div id="about-content">
            <h1 id="about-title">dwindle</h1>
            <p id="about-description">
              The purpose of dwindle is to help organize the disorganized by
              taking inventory of clutter, breaking down large tasks, and
              reducing decision fatigue. This application was created in 2026
              for a unit project as part of the Launchcode curriculum.
            </p>
          </div>

          <div id="about-buttons">
            <Link to="/dashboard">
              <button>Dashbaord</button>
            </Link>
            <Link to="/">
              <button>Home</button>
            </Link>
          </div>
        </main>

        <footer id="footer-about">© Tyler Clark 2026</footer>
      </div>
    </>
  );
};
export default About;
