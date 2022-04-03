import Card from "../card/card";
import { IUser } from "../../interfaces/User/user";

interface ICardLIst{
  users: IUser[]
}
const CardList = ({ users }:ICardLIst) => {
  return (
    <div>
      {users.map((user) => (
        <Card key={user.id} {...user} />
      ))}
    </div>
  );
};

export default CardList;
