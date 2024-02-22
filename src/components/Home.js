import React from "react";

const Home = (props) => {
  const pageStyle = {
    height: "100vh",
    backgroundColor: "#9cc3c9git ", // Add this line for beige background color
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div className="page" style={pageStyle}>
      <div className="container text-center">
        <h1>Welcome to Home page</h1>
        <div className="info">
          <h3>Name: {props.data.name}</h3>
          <h3>Email: {props.data.email} </h3>
          <h3>Age: {props.data.age} </h3>
          <h3>Address: {props.data.address}</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
