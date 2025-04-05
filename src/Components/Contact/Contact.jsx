import React, { useState, useRef, useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import Title from "../Title";
import emailjs from "@emailjs/browser";
import { BiPhone } from "react-icons/bi";
import { BsGithub, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const [emailCard, setEmailCard] = useState(true);
  const [contactCard, setcontactCard] = useState(false);

  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const formRef = useRef(null);

  const emailValidation = () => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = (e) => {
    e.preventDefault();
    setSuccessMsg("");
    setErrMsg("");

    if (username === "") {
      setErrMsg("Username is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (email === "") {
      setErrMsg("Please enter your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Enter a valid Email!");
    } else if (subject === "") {
      setErrMsg("Please enter a Subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          formRef.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then((result) => {
          console.log(result.text);
          setSuccessMsg(
            `Thank you ${username}, your message has been sent successfully!`
          );
          setUsername("");
          setPhoneNumber("");
          setEmail("");
          setSubject("");
          setMessage("");
        })
        .catch((error) => {
          console.log(error.text);
          setErrMsg("Failed to send message. Please try again!");
        });
    }
  };

  return (
    <section
      id="contact"
      className={`w-full py-20 border-b-[1px] ${
        theme === 'dark' ? 'border-b-gray-700' : 'border-b-gray-200'
      } scroll-mt-[100px]`}
    >
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <div>
            <ul className="w-48 flex flex-col gap-8">
              <li
                onClick={() => {
                  setEmailCard(true);
                  setcontactCard(false);
                }}
                className={`${
                  emailCard
                    ? "border-designColor rounded-lg bg-designColor/10"
                    : "border-transparent"
                } resumeLi`}
              >
                Email
              </li>
              <li
                onClick={() => {
                  setEmailCard(false);
                  setcontactCard(true);
                }}
                className={`${
                  contactCard
                    ? "border-designColor rounded-lg"
                    : "border-transparent"
                } resumeLi`}
              >
                Contact me
              </li>
            </ul>
          </div>

          {/* Email Card */}
          {emailCard && (
            <div className={`w-full lgl:w-[75%] h-full py-10 ${
              theme === 'dark' 
                ? 'bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne' 
                : 'bg-white shadow-md'
            } flex flex-col gap-8 p-4 lgl:p-8 rounded-lg`}>
              <form
                ref={formRef}
                className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5"
                onSubmit={handleSend}
              >
                {errMsg && (
                  <p className="py-3 text-center text-orange-500 text-base tracking-wide animate-bounce">
                    {errMsg}
                  </p>
                )}
                {successMsg && (
                  <p className="py-3 text-center text-green-500 text-base tracking-wide animate-bounce">
                    {successMsg}
                  </p>
                )}
                <div className="w-full flex flex-col lgl:flex-row gap-10">
                  <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                <p className={`text-sm uppercase tracking-wide ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-700'
                }`}>
                  Your Name
                </p>
                <input
                  name="from_name"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  className={`${
                    theme === 'dark' 
                      ? 'bg-transparent text-gray-400 border-gray-600' 
                      : 'bg-gray-100 text-gray-700 border-gray-300'
                  } contactInput`}
                      type="text"
                    />
                  </div>
                  <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                <p className={`text-sm uppercase tracking-wide ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-700'
                }`}>
                  Phone Number
                </p>
                <input
                  name="phone_number"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  value={phoneNumber}
                  className={`${
                    theme === 'dark' 
                      ? 'bg-transparent text-gray-400 border-gray-600' 
                      : 'bg-gray-100 text-gray-700 border-gray-300'
                  } contactInput`}
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                <p className={`text-sm uppercase tracking-wide ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-700'
                }`}>
                  Email
                </p>
                <input
                  name="from_email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className={`${
                    theme === 'dark' 
                      ? 'bg-transparent text-gray-400 border-gray-600' 
                      : 'bg-gray-100 text-gray-700 border-gray-300'
                  } contactInput`}
                    type="email"
                  />
                </div>
                <div className="flex flex-col gap-4">
                <p className={`text-sm uppercase tracking-wide ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-700'
                }`}>
                  Subject
                </p>
                <input
                  name="subject"
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  className={`${
                    theme === 'dark' 
                      ? 'bg-transparent text-gray-400 border-gray-600' 
                      : 'bg-gray-100 text-gray-700 border-gray-300'
                  } contactInput`}
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-4">
                <p className={`text-sm uppercase tracking-wide ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-700'
                }`}>
                  Message
                </p>
                <textarea
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className={`${
                    theme === 'dark' 
                      ? 'bg-transparent text-gray-400 border-gray-600' 
                      : 'bg-gray-100 text-gray-700 border-gray-300'
                  } contactTextArea`}
                    cols="30"
                    rows="8"
                  ></textarea>
                </div>
                <div className="w-full">
                  <button
                    type="submit"
                    className={`w-full h-12 rounded-lg text-base tracking-wider uppercase duration-300 hover:border-[1px] hover:border-designColor border-transparent ${
                      theme === 'dark' 
                        ? 'bg-[#141518] text-gray-400 hover:text-white' 
                        : 'bg-gray-200 text-gray-700 hover:text-black'
                    }`}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Contact Info Card */}
          {contactCard && (
            <div className={`w-full lgl:w-[75%] h-full py-10 ${
              theme === 'dark' 
                ? 'bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne' 
                : 'bg-white shadow-md'
            } flex flex-col gap-8 p-4 lgl:p-8 rounded-lg`}>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ContactItem
                  icon={<BiPhone />}
                  title="Phone"
                  link="tel:+1234567890"
                  label="+1234567890"
                />
                <ContactItem
                  icon={<BsWhatsapp />}
                  title="WhatsApp"
                  link="https://wa.me/1234567890"
                  label="Chat on WhatsApp"
                />
                <ContactItem
                  icon={<LiaLinkedin />}
                  title="LinkedIn"
                  link="https://linkedin.com/in/yourprofile"
                  label="Connect on LinkedIn"
                />
                <ContactItem
                  icon={<BsGithub />}
                  title="GitHub"
                  link="https://github.com/yourusername"
                  label="View my GitHub"
                />
                <ContactItem
                  icon={<BsInstagram />}
                  title="Instagram"
                  link="https://instagram.com/yourusername"
                  label="Follow on Instagram"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ icon, title, link, label }) => {
  const { theme } = useContext(ThemeContext);
  
  return (
    <div className={`flex items-center gap-4 p-4 rounded-lg shadow-md transition-shadow ${
      theme === 'dark' ? 'bg-[#1e2024]' : 'bg-gray-100'
    }`}>
      <span className="text-designColor text-2xl">{icon}</span>
      <div>
        <h3 className={`text-lg font-medium ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
        }`}>
          {title}
        </h3>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className={`${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          } hover:text-designColor transition-colors`}
        >
          {label}
        </a>
      </div>
    </div>
  );
};

export default Contact;
