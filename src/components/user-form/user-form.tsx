import { useState } from "react"

const UserForm =()=>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    return <div>
        <label>Name:</label>
        <input value={name}  onChange={e=> setName(e.target.value)}/>
        <br/>
        <label>Email:</label>
        <input value={email}  onChange={e=> setEmail(e.target.value)}/>
        <br/>
        <button>Add New</button>
    </div>
}

export default UserForm