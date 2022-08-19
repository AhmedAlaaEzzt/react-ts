import { Component } from "react";

import Card from "../card/card";
import SearchBox from "../search-box/search-box";


class FindUser extends Component{

    state = {
        searchField: "",
        user: undefined
    }

    onSearchChange = (event: any) => {

        this.setState(
            { searchField: event.target.value }
        )

    }
    onFindClick = () => {
        const { searchField } = this.state;
        const { users } = this.props
        const foundUser = users.find(user => user.name === searchField);
        this.setState({
            user: foundUser
        })
    }

    render() {
        const { user, searchField } = this.state;
        return <div>
            <h3>Find User</h3>
            <SearchBox value={searchField} searchChange={this.onSearchChange} />
            <button onClick={this.onFindClick}>Find</button>
            <Card  {...user} />
        </div>
    }


}

export default FindUser;