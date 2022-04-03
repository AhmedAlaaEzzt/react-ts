
import { useEffect, useState } from "react";
import './App.css';
import CardList from "./components/card-list/card-list";
import SearchBox from "./components/search-box/search-box";

function App() {
  const [users, setUsers] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((users) => setUsers(users));
  });

  const onSearchChange = (event) => {
    setSearchField(event.target.value) 
  };

  return (
    <div className="App">
      <h1 className="">Users</h1>
      <SearchBox value={searchField} searchChange={onSearchChange}/>
      <CardList users={users} />
    </div>
  );
}

export default App;
