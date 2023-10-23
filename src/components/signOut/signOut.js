import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

function SignOut() {
  const navigate = useNavigate();

  useEffect(() => {
    // Sign the user out
    auth
      .signOut()
      .then(() => {
        // Redirect to the login page or any other page after successful sign-out
        navigate("/");
      })
      .catch((error) => {
        // Handle sign-out error, if any
        console.error("Sign-out error: ", error);
      });
  }, [navigate]);

  return (
    <div>
      <p>Signing out...</p>
    </div>
  );
}

export default SignOut;
