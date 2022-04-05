import { useState } from "react";
import { IUser } from "../../interfaces/User/user";
import Card from "../card/card";
import SearchBox from "../search-box/search-box";

interface IFindUser {
    users: IUser[]
}

const FindUser = ({users}: IFindUser) => {
    const [searchField, setSearchField] = useState("");
    const [user, setUser] = useState();
    const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchField(event.target.value)
    }
    const onFindClick=()=>{
        const foundUser = users.find(user => user.name === searchField);
        setUser(foundUser);
    }
    return <div>
        <h3>Find User</h3>
        <SearchBox value={searchField} searchChange={onSearchChange} />
        <button onClick={onFindClick}>Find</button>
        <Card  {...user} />
    </div>

}

export default FindUser;