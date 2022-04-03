
import { useEffect, useState } from "react";
import './App.css';
import CardList from "./components/card-list/card-list";
function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((users) => setUsers(users));
  });

  return (
    <div className="App">
      <h1 className="">Users</h1>
      <CardList users={users} />
    </div>
  );
}

export default App;
