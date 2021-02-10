import React, { useState } from "react";
import { Button } from "../ui/atoms";
import { Form, Page } from "@containers";
const initialState = { email: "", password: "" };

const LoginPage = () => {
  const [showLogin, setShowLogin] = useState(false);
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
          if (!showLogin) {
            setShowLogin(!showLogin);
          }
        }}
        disabled={!showLogin}
        primary
      >
        <Button.Label>Login</Button.Label>
      </Button>

      <Button
        title="Register"
        onClick={(e) => {
          e.preventDefault();
          if (showLogin) {
            ``;
            setShowLogin(!showLogin);
          }
        }}
        disabled={showLogin}
        primary
      >
        <Button.Label>Register</Button.Label>
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
      {!showLogin && (
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
