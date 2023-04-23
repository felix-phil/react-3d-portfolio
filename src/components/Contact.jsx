import React, { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import Map from "./Map";

const Section = styled.section`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* gap: 50px; */
`;
const Left = styled.div`
  flex: 1;
  align-items: center;
  display: flex;
  justify-content: flex-end;

  @media only screen and (max-width: 768px) {
    justify-content: center;
    padding: 0 20px;
  }
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;

  :focus {
    outline: none;
  }
`;

const TextArea = styled.textarea`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;

  :focus {
    outline: none;
  }
`;

const Button = styled.button`
  /* width: 120px; */
  padding: 20px;
  background-color: #da4ea2;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  height: 100%;
  display: flex;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await emailjs.sendForm(
        "service_94gb3q8",
        "template_1rf2yff",
        form.current,
        "Ym2iABbzyzj5pMQZb"
      );
      setSuccess(true);
      console.log(result.text);
    } catch (error) {
      console.log(error);
      setSuccess(false);
    }
  };
  return (
    <Section>
      <Container>
        <Left>
          <Form ref={form} onSubmit={handleSubmit}>
            <Title>Contact Us</Title>
            <Input name="name" placeholder="Name" type="text" />
            <Input name="email" placeholder="Email" type="email" />
            <TextArea
              name="message"
              rows={10}
              placeholder="Write your message"
            />
            <Button type="submit">Send</Button>
            {success &&
              "Your message has been sent. We'll get back to you soon :)"}
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;
