// import React from 'react';
// function SignUp() {
//     return (  
//         <h1>SignUp</h1>
//     );
// }

// export default SignUp ;
const userSchema = new mongoose.Schema({
    email: {
      type: String,
      required: [true, "Your email address is required"],
      unique: true,
    },
    username: {
      type: String,
      required: [true, "Your username is required"],
    },
    password: {
      type: String,
      required: [true, "Your password is required"],
    },
    createdAt: {
      type: Date,
      default: new Date(),
    },
  });
  