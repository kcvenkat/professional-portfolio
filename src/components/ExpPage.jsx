import { useParams } from "react-router-dom"
import { experiences } from "../data/experiences"
import "./ExpPage.css"
import useScroll from "../helpers/scroll"

function ExpPage(){
    useScroll()

    const { id } = useParams()

    const experience = experiences.find(p => p.id === id)
    if (!experience) return <h2>Experience not found</h2>

    return (
        <div className = "experience-container">
            <h1 className = "title item" >{experience.title}</h1>
            <div className = "supports item">
                <p>{experience.company}</p>
                <p>{experience.date}</p>
            </div>

            <div className="section-divider item"></div>

            <h3 className = "list-title item">Skills Learned</h3>
            <ul className = "list-elements item">
                {experience.skillsUsed.map(skill => (
                    <li key = {skill}> {skill}</li>
                ))}
            </ul>

            <div className="section-divider item"></div>

            
            <h3 className = "list-title item">Description</h3>
            <p className = "long-desc item">{experience.description}</p>

            <div className="section-divider item"></div>

            <h3 className = "list-title item">Reflection</h3>
            <p className = "long-desc item">{experience.reflection}</p>

            {experience.coursework?.length > 0 && (
            <>
            <div className="section-divider item"></div>

            <h3 className = "list-title item">Related Coursework / Certifications</h3>
            <ul className = "list-elements item">
                {(experience.coursework ?? []).map(item => (
                    <li key = {item}>{item}</li>
                ))}   
            </ul>
            </>
            )}

            {experience.relatedLinks?.length > 0 && ( 
            <>
            <div className="section-divider item"></div>
            
            <h3 className = "list-title item">Links</h3>
            <ul className = "list-elements item">
                {(experience.relatedLinks ?? []).map((link) => (
                    <li key = {link.url}>
                        <a className = "experience-link" href = {link.url} rel = "noopener noreferrer" target = "_blank">
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
            </>
        )}
        </div>
    )
}

export default ExpPage