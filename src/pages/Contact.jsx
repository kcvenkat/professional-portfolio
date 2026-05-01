import useScroll from "../helpers/scroll"
import sendEmail from "../helpers/emailHandler"
import "./Contact.css"
import { useState } from "react";

function Contact(){
    useScroll();

    const [status, setStatus] = useState("");
    return (
    <>
        <h1 className = "title item">Contact Me</h1> 
        <p className = "supports item">Send me an email and I'll reply at my earliest convenience.</p>
        <div className = "form-container item">
            <form className = "contact-form" onSubmit={(e) => sendEmail(e, setStatus)}>
                <label htmlFor="name" className="text-label">Name</label>
                <input className="form-input" name="name" type="text" placeholder="ex. John Doe" required/>

                <label htmlFor="email" className="text-label">Email</label>
                <input className="form-input" name="email" type="text" placeholder="ex. johndoe@gmail.com" required/>

                <input type="text" name="company" style={{display:"none"}}/>

                <label htmlFor="messgae" className="text-label">Message</label>
                <textarea className="form-input message-input" name="message" type="text" placeholder="What would you like to talk about?" required/>

                <button type="submit" className="submit-button">
                    {status === "sending" ? "Sending..." : "Send"}
                </button>
                {status === "sent" && <p className="supports">Message sent</p>}
                {status === "error" && <p className="supports">Something went wrong</p>}
                {status.startsWith("wait-")
                && 
                <p className="supports">Wait {status.split("-")[1]} seconds before sending again</p>}
                </form>
        </div>
       
    </>
    )
}

export default Contact