function Input({onClick, onChange}){
    return(
        <div className="input">

        <input type="text" placeholder="Enter zipcode" onChange={onChange}/>
        <button type="submit" onClick={onClick} >Search</button>

        </div>
    )
}

export default Input