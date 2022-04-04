
import { useEffect, useState } from "react";
import './App.css';
import CardList from "./components/card-list/card-list";
import UserForm from "./components/user-form/user-form";
import { IUser } from "./interfaces/User/user";
function App() {
  const [users, setUsers] = useState<IUser[]>([]);

  const addNewUser = (user: IUser) =>{
    user.id = users.length + 1;
    setUsers([...users, user]);
  }

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((users) => setUsers(users));
  },[]);

  return (
    <div className="App">
      <h1 className="">Users</h1>
      <UserForm addNewUser={addNewUser}/>
      <CardList users={users} />
    </div>
  );
}

export default App;
