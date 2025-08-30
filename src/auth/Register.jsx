import React from "react";

const Register = () => {
  return (
    <div>
      <form action="" method="post">
        <label htmlFor="email">
            Email
        </label>
            <input type="email" name="email" id="email" />
        <label htmlFor="pass">
            Password
        </label>
            <input type="password" name="pass" id="pass" />
      </form>
    </div>
  );
};

export default Register;
