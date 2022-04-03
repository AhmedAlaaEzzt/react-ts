const Card =({id, name, email})=>{
    return(
        <div className="">
            <img width={125} height={125} alt='user' src={`https://robohash.org/${id}?set=set5`}/>
            
            <div className="">
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;