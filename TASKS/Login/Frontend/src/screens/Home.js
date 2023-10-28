import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");

    if (authToken) {
      setAuthenticated(true);
    } else {
      history.push("/login");
    }
  }, [history]);

  return (
    <div className="container">
      {authenticated ? (
        <div>
          <h1>Welcome to the Home Page</h1>
          <p>This is your home page content.</p>
        </div>
      ) : null}
    </div>
  );
};

export default Home;
