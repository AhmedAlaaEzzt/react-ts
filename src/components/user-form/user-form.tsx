import { useState } from "react"
import { IUser } from "../../interfaces/User/user";
interface IUserForm {
    addNewUser: (user: IUser) => void
}



const UserForm =({addNewUser}:IUserForm)=>{
    const [user, setUser] = useState({ id: -1, name: "", email: "" });

    const addNew = () =>{
        addNewUser(user);
        setUser({ id: -1, name: "", email: "" })
    }

    return <div>
        <label>Name:</label>
        <input value={user.name} onChange={e => setUser(Object.assign({}, user, { name: e.target.value }))} />
        <br />
        <label>Email:</label>
        <input value={user.email} onChange={e => setUser(Object.assign({}, user, { email: e.target.value }))} />
        <br />
        <button onClick={addNew}>Add New</button>
    </div>
}

export default UserForm