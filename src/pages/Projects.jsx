import {ProjCard} from "../components"
import useScroll from "../helpers/scroll"
import { projects } from "../data/projects"
import { Link } from "react-router-dom"

function Projects(){
    useScroll();
    return (
      <>
      <div>
      <h1 className = "title item" >Projects</h1>
      <p className = "supports item">Click on a project to learn more</p>
      </div>
          {projects.map((proj) =>(
            <Link
              key={proj.id}
              to={`/projects/${proj.id}`}
              rel="noopener noreferrer"
            >
            <ProjCard
                key = {proj.id}
                name = {proj.name}
                date = {proj.date}
                desc = {proj.desc}
                picture = {proj.picture}
                />
            </Link>
          ))}
        </>
    )
}

export default Projects;

