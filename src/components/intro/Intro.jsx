import React from "react";
import { Link } from "react-router-dom";

function Intro() {
  return (
    <div className="intro">
      <div className="introparents">
        <div className="introtext">
          <h1 className="introh1">
            Divi Yoga Studio <br />
            <strong>Balance, Mind & Body</strong>
          </h1>
          <p className="introp">
            Welcome to our website dedicated to the practice of yoga, a holistic
            discipline that combines physical postures, breath control,
            meditation, and ethical principles to promote overall well-being and
            harmony. Whether you are a beginner or an experienced practitioner.
          </p>
          <div className="intobtn">
            <Link to="/register">
              <input className="btn1" type="button" value="GET STARTED" />
            </Link>
          </div>
        </div>
        <img className="introimage" src="./yoga1.png" alt="yoga1" />
      </div>
    </div>
  );
}

export default Intro;
