import React, { useState, useRef } from "react";
import Title from "../Title";
import ContactLeft from "./ContactLeft";
import emailjs from "@emailjs/browser";  // ✅ Import EmailJS
import { BiPhone } from "react-icons/bi";
import { BsGithub, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";

const Contact = () => {
    const [emailCard, setEmailCard] = useState(true);
    const [contactCard, setcontactCard] = useState(false);

    const [username, setUsername] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const formRef = useRef(null);  // ✅ Reference to the form

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
            // ✅ Sending Email via EmailJS
            emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )

                .then((result) => {
                    console.log(result.text);
                    setSuccessMsg(`Thank you ${username}, your message has been sent successfully!`);
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
            className="w-full py-20 border-b-[1px] border-b-black scroll-mt-[100px]"
        >
            <div className="flex justify-center items-center text-center">
                <Title title="CONTACT" des="Contact With Me" />
            </div>
            <div className="w-full">
                <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
                    <div>
                        <ul className="w-48 flex flex-col gap-8">
                            <li onClick={() => { setEmailCard(true); setcontactCard(false); }}
                                className={`${emailCard ? "border-designColor rounded-lg" : "border-transparent"} resumeLi`}>
                                Email
                            </li>
                            <li onClick={() => { setEmailCard(false); setcontactCard(true); }}
                                className={`${contactCard ? "border-designColor rounded-lg" : "border-transparent"} resumeLi`}>
                                Contact me
                            </li>
                        </ul>
                    </div>

                    {emailCard &&
                        <div className="w-full lgl:w-[75%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
                            <form ref={formRef} className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5" onSubmit={handleSend}>
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
                                        <p className="text-sm text-gray-400 uppercase tracking-wide">Your Name</p>
                                        <input
                                            name="from_name"
                                            onChange={(e) => setUsername(e.target.value)}
                                            value={username}
                                            className="contactInput"
                                            type="text"
                                        />
                                    </div>
                                    <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                                        <p className="text-sm text-gray-400 uppercase tracking-wide">Phone Number</p>
                                        <input
                                            name="phone_number"
                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                            value={phoneNumber}
                                            className="contactInput"
                                            type="text"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <p className="text-sm text-gray-400 uppercase tracking-wide">Email</p>
                                    <input
                                        name="from_email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                        className="contactInput"
                                        type="email"
                                    />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <p className="text-sm text-gray-400 uppercase tracking-wide">Subject</p>
                                    <input
                                        name="subject"
                                        onChange={(e) => setSubject(e.target.value)}
                                        value={subject}
                                        className="contactInput"
                                        type="text"
                                    />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <p className="text-sm text-gray-400 uppercase tracking-wide">Message</p>
                                    <textarea
                                        name="message"
                                        onChange={(e) => setMessage(e.target.value)}
                                        value={message}
                                        className="contactTextArea"
                                        cols="30"
                                        rows="8"
                                    ></textarea>
                                </div>
                                <div className="w-full">
                                    <button type="submit"
                                        className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent">
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    }
                    {contactCard && (
                        <div className="w-full lgl:w-[75%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Phone Number */}
                                <div className="flex items-center gap-4 p-4 bg-[#1e2024] rounded-lg">
                                    <span className="text-designColor text-2xl"><BiPhone /></span>
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-300">Phone</h3>
                                        <a href="tel:+1234567890" className="text-gray-400 hover:text-designColor transition-colors">
                                            +1234567890
                                        </a>
                                    </div>
                                </div>

                                {/* WhatsApp */}
                                <div className="flex items-center gap-4 p-4 bg-[#1e2024] rounded-lg">
                                    <span className="text-designColor text-2xl"><BsWhatsapp /></span>
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-300">WhatsApp</h3>
                                        <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-designColor transition-colors">
                                            Chat on WhatsApp
                                        </a>
                                    </div>
                                </div>

                                {/* LinkedIn */}
                                <div className="flex items-center gap-4 p-4 bg-[#1e2024] rounded-lg">
                                    <span className="text-designColor text-2xl"><LiaLinkedin/></span>
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-300">LinkedIn</h3>
                                        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-designColor transition-colors">
                                            Connect on LinkedIn
                                        </a>
                                    </div>
                                </div>

                                {/* GitHub */}
                                <div className="flex items-center gap-4 p-4 bg-[#1e2024] rounded-lg">
                                    <span className="text-designColor text-2xl"><BsGithub/></span>
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-300">GitHub</h3>
                                        <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-designColor transition-colors">
                                            View my GitHub
                                        </a>
                                    </div>
                                </div>

                                {/* Instagram */}
                                <div className="flex items-center gap-4 p-4 bg-[#1e2024] rounded-lg">
                                    <span className="text-designColor text-2xl"><BsInstagram/></span>
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-300">Instagram</h3>
                                        <a href="https://instagram.com/yourusername" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-designColor transition-colors">
                                            Follow on Instagram
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;
