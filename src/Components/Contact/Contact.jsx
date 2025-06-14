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
      className={`w-full   border-b-[1px] pad ${theme === 'dark' ? 'border-b-bodyColor-dark/50' : 'border-b-bodyColor-light/50'
        } scroll-mt-[100px]`}
    >
      <div className="flex  justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>

      <div className=" h-auto flex flex-col  lgl:flex-row gap-10 w-[50%] mx-auto">
        <div className={`w-full  p-8 ${theme === 'dark'
          ? 'bg-bodyColor-dark/90 shadow-shadowOne'
          : 'bg-bodyColor-light shadow-md'
          } flex flex-col gap-8  rounded-3xl `}>

          <div className="flex flex-row items-start p-[2px] bg-[#ebebec] rounded-lg mt-2.5 mx-5 relative">
            <button
              className="w-4/5 h-10 relative z-[99] bg-transparent border-0 outline-none cursor-pointer font-medium"
              onClick={() => {
                setEmailCard(true);
                setcontactCard(false);
              }}
            >
              Email
            </button>
            <button
              className="w-4/5 h-10 relative z-[99] bg-transparent border-0 outline-none cursor-pointer font-medium"
              onClick={() => {
                setEmailCard(false);
                setcontactCard(true);
              }}
            >
              Contact Me
            </button>
            <div
              className="w-1/2 h-10 bg-yellow-500 absolute top-[2px] z-9 border border-[rgba(0,0,0,0.04)] shadow-[0px_3px_8px_rgba(0,0,0,0.12),_0px_3px_1px_rgba(0,0,0,0.04)] rounded-lg transition-all duration-200 ease-out"
              style={{
                left: emailCard ? "2px" : "calc(50% - 2px)",
              }}
            ></div>
          </div>



          {/* Email Card */}
          {emailCard && (

            <form
              ref={formRef}
              className="w-full flex flex-col gap-4 lgl:gap-6 py-2"
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
              <div className="w-full flex flex-col lgl:flex-row gap-6">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className={`text-sm uppercase tracking-wide ${theme === 'dark' ? 'text-fontColor-dark/80' : 'text-fontColor-light/80'
                    }`}>
                    Your Name
                  </p>
                  <input
                    name="from_name"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    className={`${theme === 'dark' ? 'bg-bodyColor-dark/90 text-fontColor-dark border-2 border-designColor-dark/30 hover:border-designColor-dark/70' : 'bg-bodyColor-light/90 text-fontColor-light border-2 border-designColor-light/30 hover:border-designColor-light/70'} contactInput transition-colors duration-300`}
                    type="text"
                  />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className={`text-sm uppercase tracking-wide ${theme === 'dark' ? 'text-fontColor-dark/80' : 'text-fontColor-light/80'
                    }`}>
                    Phone Number
                  </p>
                  <input
                    name="phone_number"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    className={`${theme === 'dark'
                      ? 'bg-bodyColor-dark/90 text-fontColor-dark border-2 border-designColor-dark/30 hover:border-designColor-dark/70'
                      : 'bg-bodyColor-light/90 text-fontColor-light border-2 border-designColor-light/30 hover:border-designColor-light/70'
                      } contactInput transition-colors duration-300`}
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className={`text-sm uppercase tracking-wide ${theme === 'dark' ? 'text-fontColor-dark/80' : 'text-fontColor-light/80'
                  }`}>
                  Email
                </p>
                <input
                  name="from_email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className={`${theme === 'dark'
                    ? 'bg-bodyColor-dark/90 text-fontColor-dark border-2 border-designColor-dark/30 hover:border-designColor-dark/70'
                    : 'bg-bodyColor-light/90 text-fontColor-light border-2 border-designColor-light/30 hover:border-designColor-light/70'
                    } contactInput transition-colors duration-300`}
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className={`text-sm uppercase tracking-wide ${theme === 'dark' ? 'text-fontColor-dark/80' : 'text-fontColor-light/80'
                  }`}>
                  Subject
                </p>
                <input
                  name="subject"
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  className={`${theme === 'dark'
                    ? 'bg-bodyColor-dark/90 text-fontColor-dark border-2 border-designColor-dark/30 hover:border-designColor-dark/70'
                    : 'bg-bodyColor-light/90 text-fontColor-light border-2 border-designColor-light/30 hover:border-designColor-light/70'
                    } contactInput transition-colors duration-300`}
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className={`text-sm uppercase tracking-wide ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'
                  }`}>
                  Message
                </p>
                <textarea
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className={`${theme === 'dark'
                    ? 'bg-bodyColor-dark/90 text-fontColor-dark border-2 border-designColor-dark/30 hover:border-designColor-dark/70'
                    : 'bg-bodyColor-light/90 text-fontColor-light border-2 border-designColor-light/30 hover:border-designColor-light/70'
                    } contactTextArea h-12 transition-colors duration-300`}
                  cols="30"
                  rows="8"
                ></textarea>
              </div>
              <div className="w-full text-center">
                <button
                  type="submit"
                  className="relative w-1/3  cursor-pointer rounded-[34px]  border-2 border-designColor-light/70 bg-designColor-light/50 px-6 py-2.5 text-lg font-semibold text-white overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] group"
                >
                  <span
                    className="absolute inset-0 m-auto h-12 w-12 scale-0 rounded-full bg-designColor-light/70 transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] -z-10 group-hover:scale-150"
                    style={{ transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)' }}
                  ></span>
                  <span className="relative z-10 group-hover:text-[#212121] group-hover:scale-110 group-active:scale-100 transition-all duration-[300ms] ease-[cubic-bezier(0.23,1,0.32,1)]">
                    Send Message
                  </span>
                </button>
              </div>
            </form>

          )}
          {/* Contact Info Card */}
          {contactCard && (

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
          )}

        </div>


      </div>
    </section>
  );
};

const ContactItem = ({ icon, title, link, label }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`flex items-center gap-4 p-4 rounded-lg shadow-md transition-shadow ${theme === 'dark' ? 'bg-bodyColor-dark/80' : 'bg-bodyColor-light/80'
      }`}>
      <span className={`text-2xl ${theme === 'dark'
        ? 'text-designColor-dark hover:text-designColor-dark/90'
        : 'text-designColor-light hover:text-designColor-light/90'
        } transition-colors duration-300`}>{icon}</span>
      <div>
        <h3 className={`text-lg font-medium ${theme === 'dark' ? 'text-fontColor-dark' : 'text-fontColor-light'
          }`}>
          {title}
        </h3>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className={`${theme === 'dark' ? 'text-fontColor-dark/80' : 'text-fontColor-light/80'
            } hover:text-designColor transition-colors`}
        >
          {label}
        </a>
      </div>
    </div>
  );
};

export default Contact;
