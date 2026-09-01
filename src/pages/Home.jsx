import { Routes, Route, Link } from "react-router";

const Home = () => {
  return (
    <>
      <header>
        <h2>dwindle</h2>
      </header>
      <h1>dwindle</h1>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/about">
        <div>About</div>
      </Link>
      <footer>© Tyler Clark 2026</footer>
    </>
  );
};
export default Home;
