
import "./ContactStyle.css"
import { SiGmail, SiLinkedin } from "react-icons/si";

const ContactLeft = () => {
    
        const sendEmail = () => {
            window.location.href = "mailto:your-email@example.com?subject=Hello&body=This%20is%20a%20test%20email";
        };
    const linkedIn = () => {
        href = "https://www.linkedin.com/in/kabileshwaranB/"
    }
    return (
        <>
                <div className="flex flex-col">
                    <img className="h-[317px] w-[317px] prof-img" src="giphy.webp" alt="profile img" />
                    {/* <div className="prof-img"></div> */}

                    <div className="prof-section p-5">
                        <h2 className="tit-1">Kabileshwaran B</h2>
                        <h6 className="tit-2">React Developer</h6>
                        <div className="btn-section">
                            <button id="mail-btn" onClick={sendEmail}><SiGmail/> Email</button>
                            <a href="https://www.linkedin.com/in/kabileshwaranB/"
                                target="_blank" ><button id="lin-btn" onClick={linkedIn}><SiLinkedin/>LinkedIn</button>
                            </a>
                        </div>
                        <h4 className="about">About</h4>
                        <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                        <h4 className="interests">Interest</h4>
                        <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                    </div>

                    <div className="footer-section">
                        <img className="soc-icons" src="/Twitter Icon.png" alt="twitter" />
                        <a href="https://www.facebook.com/kabileshwaran.kabileshwaran.50" target="_blank">
                            <img className="soc-icons" src="/Facebook Icon.png" alt="facebook" />
                        </a>
                        <a href="https://www.instagram.com/kabileshwaran183/" target="_blank">
                            <img className="soc-icons" src="/Instagram Icon.png" alt="instagram" />
                        </a>
                        <a href="https://github.com/Kabileshwaran183" target="_blank"><img className="soc-icons" src="GitHub Icon.png" alt="github" />
                        </a>
                    </div>
                </div>
        </>
    )
}
export default ContactLeft