import React, { useState } from "react";

import { Section, SectionDivider, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { person } from "../../constants/profile";
import {
  FieldGroup,
  Form,
  FormRow,
  Input,
  Label,
  SubmitButtonWrapper,
  Textarea,
} from "./ContactStyles";

const initialState = { name: "", email: "", message: "" };

const Contact = () => {
  const [fields, setFields] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = `Portfolio contact from ${fields.name}`;
    const body = `${fields.message}\n\n— ${fields.name} (${fields.email})`;
    const mailto = `mailto:${person.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <Section id="contact" fullHeight>
      <SectionDivider></SectionDivider>
      <SectionTitle main>Contact</SectionTitle>
      <SectionText>
        Open to new opportunities — send a message and it'll open straight in your email client.
      </SectionText>
      <Form onSubmit={handleSubmit}>
        <FormRow>
          <FieldGroup>
            <Label htmlFor="contact-name">Name</Label>
            <Input
              id="contact-name"
              name="name"
              type="text"
              required
              value={fields.name}
              onChange={handleChange}
              placeholder="Your name"
            />
          </FieldGroup>
          <FieldGroup>
            <Label htmlFor="contact-email">Email</Label>
            <Input
              id="contact-email"
              name="email"
              type="email"
              required
              value={fields.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
          </FieldGroup>
        </FormRow>
        <FieldGroup>
          <Label htmlFor="contact-message">Message</Label>
          <Textarea
            id="contact-message"
            name="message"
            required
            value={fields.message}
            onChange={handleChange}
            placeholder="What would you like to talk about?"
          />
        </FieldGroup>
        <SubmitButtonWrapper>
          <Button form>Send Message</Button>
        </SubmitButtonWrapper>
      </Form>
    </Section>
  );
};

export default Contact;
