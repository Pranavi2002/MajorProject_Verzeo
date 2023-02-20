import React from "react";
import ecommerce from "../images/ecommerce.png";
import ecomlogo from "../images/ecomlogo.jpg";
import "../App.css";

function Home() {
  return (
    <div>
      <h1 className="text-bg-success p-1" style={{ fontSize: "50px" }}>
        Web Development with IBM November Major Project
      </h1>
      <h2>E-Commerce</h2>
      <img src={ecomlogo} alt="E-Commerce" className="ecommerce" />
      <img src={ecommerce} alt="E-Commerce Websites" className="ecommerce" />
      <h3 className="des">
        This sample website provides the detailed information regarding
        ecommerce and various ecommerce websites.
      </h3>
    </div>
  );
}

export default Home;
