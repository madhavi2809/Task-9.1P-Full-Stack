import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import InputControl from "../InputControl/InputControl";
import { auth } from "../../firebase";
import styles from "./Signup.module.css";
const mailgun = require("mailgun-js")({
  apiKey: "78e4c4a69841e9a147d60893c7800836-ee16bf1a-459569d5",
  domain: "sandboxeb134275d3dd404fadd30160ecb298f6.mailgun.org",
});

function Signup() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
    confirm: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const sendWelcomeEmail = (email) => {
    const data = {
      from: "madhavi4871.be22@chitkara.edu.in", // Sender's email address
      to: email, // Recipient's email address
      subject: "Welcome to Your App", // Email subject
      text: "Welcome to Your App! Thank you for signing up. Hoping to be familiar with you when you Login. :)", // Email text
    };

    mailgun.messages().send(data, (error, body) => {
      if (error) {
        console.error("Error sending welcome email:", error);
      } else {
        console.log("Welcome email sent:", body);
      }
    });
  };

  const handleSubmission = () => {
    if (!values.name || !values.email || !values.pass || !values.confirm) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });

        // Send a welcome email
        sendWelcomeEmail(values.email);

        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Signup</h1>

        <InputControl
          label="Name"
          placeholder="Enter your name"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <InputControl
          label="Email"
          placeholder="Enter email address"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          label="Password"
          placeholder="Enter password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
        />

        <InputControl
          label="Confirm Password"
          placeholder="ReEnter Password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, confirm: event.target.value }))
          }
        />

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={handleSubmission} disabled={submitButtonDisabled}>
            Signup
          </button>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;