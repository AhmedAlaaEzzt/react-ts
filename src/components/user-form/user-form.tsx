import { useState } from "react"

const UserForm =()=>{
    const [user, setUser] = useState({ id: -1, name: "", email: "" });

    return <div>
        <label>Name:</label>
        <input value={user.name} onChange={e => setUser(Object.assign({}, user, { name: e.target.value }))} />
        <br />
        <label>Email:</label>
        <input value={user.email} onChange={e => setUser(Object.assign({}, user, { email: e.target.value }))} />
        <br />
        <button >Add New</button>
    </div>
}

export default UserForm