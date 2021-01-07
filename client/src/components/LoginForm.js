import React from "react";

function LoginForm() {
  return (
    <div class="login-form">
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
      </form>
      <button type="submit" id="login">
        Login
      </button>
    </div>
  );
}

export default LoginForm;
