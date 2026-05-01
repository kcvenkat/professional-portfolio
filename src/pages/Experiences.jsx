import {ExpCard, ExpPage} from "../components"
import useScroll from "../helpers/scroll"
import { experiences } from "../data/experiences"
import { Link } from "react-router-dom"

function Experiences(){
    useScroll();
    return (
      <>
      <div>
      <h1 className = "title item" >Experiences</h1>
      <p className = "supports item">Click on an experience to learn more</p>
      </div>
          {experiences.map((exp) =>(
            <Link
              key={exp.id}
              to={`/experiences/${exp.id}`}
              rel="noopener noreferrer"
            >
              <ExpCard
                title={exp.title}
                company={exp.company}
                date={exp.date}
                desc={exp.overview}
                picture={exp.picture}
              />
            </Link>
          ))}
        </>
    )
}

export default Experiences;

