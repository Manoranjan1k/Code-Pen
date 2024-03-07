import { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import styles from "./ContactF.module.css";


export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v3xtblt",
        "template_h1lzbso",
        form.current,
        "o18mw1GmWBT3GaqX0"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          // console.log(result.text);
          window.alert("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <StyledContactForm>
      <div className={styles.container}>
        <div>
        <h1>CONTACT ME</h1>
        <p>
          Fill out the form below to send me an email. I will get back to
          you as soon as possible.
        </p>
        </div>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="Email_Id" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" /> 
      </form>
      </div>
    </StyledContactForm>
  );
};



// Styles
const StyledContactForm = styled.div`
  // max-width:50%;
 
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 40%;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
      color: #fff;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;