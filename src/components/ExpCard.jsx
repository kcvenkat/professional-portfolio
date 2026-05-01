import "./ExpCard.css"

function ExpCard({ title, company, date, desc, picture}){
    return(
    <>
    <div className = "expcard item">
        <div className = "expcard-content">
            <h2 className = "expcard-title">{title}</h2>
            <p className = "expcard-company">{company}</p>
            <p className = "expcard-date">{date}</p>
            <p className = "expcard-desc">{desc}</p>
        </div>
        <div className="expcard-image">
            <img src={picture} alt={name} />

            <div className="image-overlay"></div>
        </div>
    </div>
    </>
    )
}

export default ExpCard