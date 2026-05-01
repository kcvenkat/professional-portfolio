import ImageSwitch from "./ImageSwitch"
import useScroll from "../helpers/scroll"
import "./Home.css"
import profilePicture from "../assets/me.jpg"
import ghub from "../assets/github.png"
import lkdin from "../assets/linkedin.png"
import { Link } from "react-router-dom"
import { useEffect, useRef } from "react"
import me1 from "../assets/pixel.png"
import me2 from "../assets/pixel1.png"



function Home(){
    useScroll();

    const fetched = useRef(false);

    useEffect(() => {
      if (fetched.current) return;
      fetched.current = true;
      fetch("api/debug.json");
      fetch("api/logs.json");
      fetch("api/metrics.json");
      fetch("api/cache.json");
      fetch("api/session.json");
    }, []);
    return(
        <>
      <div className = "home">
        <div className = "home-content item">
          <div className = "pixel">
            <ImageSwitch frame1 = {me1} frame2 = {me2}></ImageSwitch>
          </div>
          <div className = "hero">
            <p className = "title">Hi, I'm Kaushik</p>
            <p className = "content">I'm a student who's interested in digital forensics and incident response (DFIR), networking, and AI security. I live by the idea that there's no limit on what to learn and when to learn it. I'm constantly working on certifications and projects that I will be documenting on this page.</p>
            <p className="content">There's also a small capture-the-flag challenge on the Home page that leads somewhere secret. Remember, I like networking. Happy hacking!</p>
            <div className = "icons">
                <a
                href="https://github.com/kcvenkat"
                target="_blank"
                rel="noopener noreferrer"
                ><img src = {ghub}></img></a>
                <a
                href="https://www.linkedin.com/in/kaushikvenkatesh31/"
                target="_blank"
                rel="noopener noreferrer"
                ><img src = {lkdin}></img></a>
            </div>
          </div>
        </div>
        <div className = "about item">
          <div className = "about-content">
            <div className = "about-title">About Me </div>
            <div className = "about-text">As a <strong>freshman studying Computer Science at Arizona State University</strong>, I've spent my first year actively involved with the EPICS program, collaborating with nonprofits to build software solutions that serve their communities. On the certification side, I'm working toward the <strong>ISC2 Certified in Cybersecurity</strong>.</div>
            <div className = "about-text">I like honing my skills by using platforms like TryHackMe and partaking in CTF challenges. As a result, I'm comfortable working with security tools like <strong>SIEMs, packet sniffers, and command-line tools like Nmap</strong> for forensic analysis and incident response work. Long term, I'm looking to break into a SOC role, working in <strong>incident response, fraud analysis, or network security.</strong></div>
          </div>
            <div className="pfp"><img src={profilePicture}></img></div>
          </div>
          <div className = "home-links item">
          <div className = "buttons">
            <Link to = "/projects"><button>View Projects</button></Link>
            <Link to = "/contact"><button>Contact Me</button></Link>
          </div>
        </div>
      </div>
      </>
    )
}

export default Home;