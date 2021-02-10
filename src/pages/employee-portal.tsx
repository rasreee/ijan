import React, { useState } from "react";
import { Button, Spacing } from "@atoms";
import { Form, Page } from "@containers";
import { Row, RowCentered } from "@basics";
import { ToggleButton } from "@molecules";
const initialState = { email: "", password: "" };

const LoginPage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [state, setState] = useState(initialState);

  const updateState = (name: string, value: string) => {
    const newState = { ...state, [name]: value };
    setState(newState);
  };

  const trySubmit = () => console.log("trySubmit");

  const toggle = () => setShowLogin(!showLogin);

  return (
    <Page
      title="Portal"
      heading="Portal (Employees Only)"
      description="If you've finished onboarding and already registered your account, you can go ahead and login with your email and password. Otherwise, you can register for an account."
    >
      <RowCentered>
        <ToggleButton label="Login" onToggle={toggle} disabled={!showLogin} />
        <Spacing width={24} />
        <ToggleButton label="Register" onToggle={toggle} disabled={showLogin} />
      </RowCentered>

      {showLogin && (
        <Page.Section>
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
        <Page.Section>
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
