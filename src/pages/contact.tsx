import React, { useState } from "react";
import { Form, Page } from "../containers";

const initialState = { name: "", email: "", message: "" };

const ContactPage = () => {
  const [state, setState] = useState(initialState);

  const updateState = (name: string, value: string) => {
    const newState = { ...state, [name]: value };
    setState(newState);
  };

  const trySubmit = () => console.log("trySubmit");

  return (
    <Page
      title="Contact Us"
      heading="Got questions?"
      description="For any inquiries, such as quotes, please fill out the form below, and we will try our best get back to you within 24 hours. Otherwise, feel free to leave us a voicemail at (470) 266-7770."
    >
      <Form>
        <Form.Input
          label="name"
          onChange={updateState}
          value={state.name}
          required
        />
        <Form.Input
          label="email"
          onChange={updateState}
          value={state.email}
          required
        />
        <Form.Input
          label="message"
          onChange={updateState}
          value={state.message}
          required
        />
        <Form.Button onClick={trySubmit}>submit</Form.Button>
      </Form>
    </Page>
  );
};

export default ContactPage;
