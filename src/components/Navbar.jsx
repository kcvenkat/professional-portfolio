import "./Navbar.css"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";

function Navbar(){
    const [showMisc, setShowMisc] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("visitedMisc") === "true") {
            setShowMisc(true);
        }
    }, []);

    return (
        <div className = "navbar">
            <div className = "links">
                <Link to="/">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/experiences">Experience</Link>
                <Link to="/contact">Contact</Link>

                {showMisc && <Link to="/knWlxLz131TWOYuv">Misc</Link>}
            </div>
        </div>
    )
}

export default Navbar;