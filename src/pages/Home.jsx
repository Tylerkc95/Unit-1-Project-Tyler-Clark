import { Routes, Route, Link } from "react-router";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Link to="/dashboard">Dashboard</Link>
    </>
  );
};
export default Home;
