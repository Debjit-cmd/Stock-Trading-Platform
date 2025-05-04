// import React from 'react';
// function SignUp() {
//     return (  
//         <h1>SignUp</h1>
//     );
// }

// export default SignUp ;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Zerodha() {
  const [showSignIn, setShowSignIn] = useState(false);
  const navigate = useNavigate(); // For redirection

  const handleSignIn = () => {
    // Add validation or auth logic here if needed
    navigate("/"); // Redirect to home route
  };

  return (
    <div style={styles.container}>
      <button onClick={() => setShowSignIn(true)} style={styles.signupBtn}>
        Sign Up
      </button>

      {showSignIn && (
        <div style={styles.signinForm}>
          <h2>Sign In</h2>
          <input type="email" placeholder="Email" style={styles.input} />
          <input type="password" placeholder="Password" style={styles.input} />
          <button onClick={handleSignIn} style={styles.signinBtn}>Sign In</button>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    margin: "50px auto",
    textAlign: "center",
    maxWidth: "300px",
  },
  signupBtn: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
  signinForm: {
    marginTop: "20px",
    border: "1px solid #ccc",
    padding: "20px",
    borderRadius: "8px",
  },
  input: {
    display: "block",
    width: "100%",
    padding: "8px",
    marginBottom: "10px",
    borderRadius: "4px",
    border: "1px solid #aaa",
  },
  signinBtn: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#387ed1",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    borderRadius: "4px",
  },
};

export default Zerodha;
