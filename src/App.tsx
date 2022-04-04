
import { useEffect, useState } from "react";
import './App.css';
import CardList from "./components/card-list/card-list";
import Scroll from "./components/scroll/scroll";
import SearchBox from "./components/search-box/search-box";
import UserForm from "./components/user-form/user-form";
import { IUser } from "./interfaces/User/user";
function App() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [searchField, setSearchField] = useState("");

  const addNewUser = (user: IUser) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  }

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((users) => setUsers(users));
  }, []);


  const onSearchChange = (event) => {
    setSearchField(event.target.value)
  }

  return (
    <div className="App">
      <h1 className="">Users</h1>
      <UserForm addNewUser={addNewUser} />
      <hr />
      <SearchBox value={searchField} searchChange={onSearchChange} />
      <hr />
      <Scroll>
        <CardList users={users} />
      </Scroll>

    </div>
  );
}

export default App;
