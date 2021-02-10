import React, { useState } from "react";
import { Button } from "../atoms";
import { Form, Page } from "../containers";
const initialState = { email: "", password: "" };

const LoginPage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [state, setState] = useState(initialState);

  const updateState = (name: string, value: string) => {
    const newState = { ...state, [name]: value };
    setState(newState);
  };

  const trySubmit = () => console.log("trySubmit");

  return (
    <Page
      title="Employees"
      heading="Employees"
      description="If you've finished onboarding and already registered your account, you can go ahead and login with your email and password. Otherwise, you can register for an account."
    >
      <Button
        onClick={(e) => {
          e.preventDefault();
          setShowLogin(!showLogin);
          if (showRegister) {
            setShowRegister(!showRegister);
          }
        }}
      >
        <Button.Label>Login</Button.Label>
      </Button>

      {showLogin && (
        <Page.Section title="Login">
          <Form.Input
            label="Email"
            onChange={updateState}
            value={state.email}
            required
          />
          <Form.Input
            label="Password"
            onChange={updateState}
            value={state.password}
            required
          />
          <Form.Button onClick={trySubmit}>submit</Form.Button>
        </Page.Section>
      )}
      <Button
        title="Register"
        onClick={(e) => {
          e.preventDefault();
          setShowRegister(!showRegister);
          if (showLogin) {
            setShowLogin(!showLogin);
          }
        }}
      >
        <Button.Label>Register</Button.Label>
      </Button>
      {showRegister && (
        <Page.Section title="Register">
          <Form.Input
            label="Email"
            onChange={updateState}
            value={state.email}
            required
          />
          <Form.Input
            label="Password"
            onChange={updateState}
            value={state.password}
            required
          />
          <Form.Input
            label="Confirm password"
            onChange={updateState}
            value={state.password}
            required
          />
          <Form.Button onClick={trySubmit}>submit</Form.Button>
        </Page.Section>
      )}
    </Page>
  );
};

export default LoginPage;
