import React from "react";
import contact from "../images/contact.png";
import "../App.css";

function Contact() {
  return (
    <div>
      <h1 className="text-bg-success p-1" style={{ fontSize: "50px" }}>
        Web Development with IBM November Major Project
      </h1>
      <h3>
        To know more about our website, fill the following we will reach you
        soon:
      </h3>
      <div className="contact">
        <img src={contact} alt="Contact US" className="pcontact" />
        <br />
        <h4>Name:</h4>
        <input type="text" name="Name" placeholder="James Williams" />
        <br />
        <br />
        <h4>Phone Number:</h4>
        <input type="number" name="Phone" placeholder="9999999999" />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </div>
    </div>
  );
}

export default Contact;
