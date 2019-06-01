import React from "react";

function Login({ setIsLogged, setUsername }) {
  function handleOnSubmit(event) {
    event.preventDefault();
    setUsername(event.target.elements.user.value);
    setIsLogged(true);
  }

  return (
    <>
      <div>
        <form name="login" id="login-form" onSubmit={handleOnSubmit}>
          <div>
            <h1>Sign in to Codeable</h1>
            <p>codeable.slack.com</p>
            <p>Enter your username</p>
            <input
              id="my_user"
              name="user"
              type="text"
              placeholder="username"
            />
          </div>
          <button type="submit" value="Continue &#8594;">
            Sign In
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
