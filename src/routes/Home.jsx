import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="frontImage" style={{ display: "flex" }}>
        <Link to="/animals">
          <img
            src={`https://source.unsplash.com/400x400/?fox`}
            style={{ height: "100vh" }}
          />
        </Link>
        <Link to="/birds">
          <img
            src={`https://source.unsplash.com/400x400/?parrot`}
            style={{ height: "100vh" }}
          />
        </Link>
      </div>
    </>
  );
};

export default Home;
