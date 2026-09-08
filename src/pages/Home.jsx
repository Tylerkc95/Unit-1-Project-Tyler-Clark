import { Link } from "react-router";
import dwindleScreenshot from "../images/dwindle-screenshot.png";
import "./Home.css";

const Home = () => {
  return (
    <div id="home-page">
      <header>
        <h2>dwindle</h2>
      </header>

      <main id="home-main">
        <div id="home-content">
          <div id="home-left">
            <h1 id="home-title">dwindle</h1>
            <p id="home-intro">Decluttering made easy!</p>
          </div>
          <img
            id="home-right"
            src={dwindleScreenshot}
            alt="Screenshot of the dwindle dashboard."
          />
        </div>
        <div id="home-buttons">
          <Link to="/dashboard">
            <button>Get Started!</button>
          </Link>
          <Link to="/about">
            <button>About</button>
          </Link>
        </div>
      </main>
      <footer id="footer-home">© Tyler Clark 2026</footer>
    </div>
  );
};
export default Home;
