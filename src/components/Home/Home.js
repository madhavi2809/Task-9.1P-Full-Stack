import React from "react";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";

function Home(props) {

  const navigate = useNavigate();

  const handleLoginButtonClick = () => {
    navigate("/login");
  };

  const handleOutButtonClick = () => {
    navigate("/signOut");
  };

  return (
    <div className={styles.home}>
      <br />
      <div>
        <h1>
        <button className={styles.btn} onClick={handleLoginButtonClick}>Login</button>
        </h1>
      </div>
      <br />
      <h2>{props.name ? `Welcome - ${props.name}` : "Please Login to your account using the above link"}</h2>
      <br />
      <div>
        <h1>
        <button className={styles.OutBtn} onClick={handleOutButtonClick}>Sign Out</button>
        </h1>
      </div>
      <br />
    </div>
  );
}

export default Home;