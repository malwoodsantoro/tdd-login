import React from "react";

export interface LoginProps {
  onSubmit: Function;
}

const Login = ({ onSubmit }: LoginProps) => {
  return (
    <div>
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          const form = e.target as HTMLFormElement
          //@ts-ignore
          const { username, password } = form.elements
          onSubmit({ username: username.value, password: password.value });
        }}
      >
        <label htmlFor="username">
          Username
          <input id="username" />
        </label>
        <label htmlFor="password">
          Password
          <input id="password" />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
