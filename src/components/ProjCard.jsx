import "./ProjCard.css"

function ProjCard({ name, date, desc, picture}){
    return(
    <>
    <div className = "projcard item">
        <div className = "projcard-content">
            <h2 className = "projcard-title">{name}</h2>
            <p className = "projcard-date">{date}</p>
            <p className = "projcard-desc">{desc}</p>
        </div>
        <div className="projcard-image">
            <img src={picture} alt={name} />

            <div className="image-overlay"></div>
        </div>
    </div>
    </>
    )
}

export default ProjCard