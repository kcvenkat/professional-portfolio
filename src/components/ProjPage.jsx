import { useParams } from "react-router-dom"
import { projects } from "../data/projects"
import "./ProjPage.css"
import useScroll from "../helpers/scroll"

function ProjPage(){
    useScroll()

    const { id } = useParams()

    const project = projects.find(p => p.id === id)
    if (!project) return <h2>Project not found</h2>

    return (
        <div className = "project-container">
            <h1 className = "title item" >{project.name}</h1>
            <div className = "supports item">
                <p>{project.desc}</p>
                <p>{project.date}</p>
            </div>
            <img className = "project-image item" src = {project.picture}></img>
            <p className = "img-desc item">{project.imageDesc}</p>

            <div className="section-divider item"></div>

            <h3 className = "list-title item">Skills Learned</h3>
            <ul className = "list-elements item">
                {project.skillsUsed.map(skill => (
                    <li key = {skill}> {skill}</li>
                ))}
            </ul>

            <div className="section-divider item"></div>

            
            <h3 className = "list-title item">Inspiration</h3>
            <p className = "long-desc item">{project.inspiration}</p>

            <div className="section-divider item"></div>

            <h3 className = "list-title item">Process</h3>
            <p className = "long-desc item">{project.process}</p>

            {project.coursework?.length > 0 && (
            <>
            <div className="section-divider item"></div>

            <h3 className = "list-title item">Related Coursework / Certifications</h3>
            <ul className = "list-elements item">
                {(project.coursework ?? []).map(item => (
                    <li key = {item}>{item}</li>
                ))}   
            </ul>
            </>
            )}

            {project.relatedLinks?.length > 0 && ( 
            <>
            <div className="section-divider item"></div>
            
            <h3 className = "list-title item">Links</h3>
            <ul className = "list-elements item">
                {(project.relatedLinks ?? []).map((link) => (
                    <li key = {link.url}>
                        <a class = "project-link" href = {link.url} target = "_blank" rel = "noopener noreferrer">
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

export default ProjPage