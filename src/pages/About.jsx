import { Routes, Route, Link } from "react-router";

const About = () => {
  return (
    <>
      <header>
        <h2>
          <Link to="/">dwindle </Link>
        </h2>
      </header>
      <h1>About</h1>
      <Link to="/">Home</Link>
      <Link to="/dashboard">Dashboard</Link>
      <footer>© Tyler Clark 2026</footer>
    </>
  );
};
export default About;
