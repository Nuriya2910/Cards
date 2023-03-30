function Card({card}){
    let n = 22
    if(card.price<n){
        return(
        <div className="card">
            <img src={card.image} alt="" />
            <h1>{card.title}</h1>
            <h3>{card.price}</h3>
            <p>{card.description}</p>
            <h3>{card.rating.rate}</h3>
        </div>
    )
    }
    else{
        return null
    }
    
}

export default Card