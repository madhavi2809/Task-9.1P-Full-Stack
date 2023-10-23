import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function SignOut(props) {
  return (
    <div className={styles.home}>
      <h2>{props.name ? `Welcome - ${props.name}` : "Please Login to your account using the above link"}</h2>
      <br />

      <div className="signout">
        <h1>
          <Link to="/signout">Sign Out</Link>
        </h1>
      </div>
    </div>
  );
}

export default SignOut;