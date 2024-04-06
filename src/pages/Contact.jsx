import { motion } from "framer-motion";
import InputText from "../components/InputText";
import { useRef, useState } from "react";

import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_darman69";
const TEMPLATE_ID = "template_2iua8g2";
const PUBLIC_KEY = "9Tm4uU6-fLyu2LnkX";

const Contact = () => {
  const textForm = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSuccess(false);
    setError(false);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, textForm.current, PUBLIC_KEY)
      .then(
        (result) => {
          setSuccess(true);
          textForm.current.reset();
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col lg:flex-row gap-20 min-h-[94vh] items-center justify-center">
        <h2 className="text-3xl font-bold lg:text-6xl">Say Hello ,</h2>
        <form ref={textForm} onSubmit={sendEmail} className="w-[400px]">
          <InputText label="Dear Annang," name="message" isTextArea={true} />
          <InputText
            label="My mail is :"
            type="email"
            name="user_email"
            placeholder="Type here..."
          />
          <InputText
            label="Regards"
            type="text"
            name="user_name"
            placeholder="Type here..."
          />
          <div className="flex flex-col gap-2 justify-end mb-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="btn btn-outline btn-wide
            "
            >
              Send
            </motion.button>
            {success && (
              <p className="text-emerald-400 ">Message sent successfully.</p>
            )}
            {error && <p className="text-red-500">Failed to send message.</p>}
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
