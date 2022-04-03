import Card from "../card/card";

const CardList = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <Card key={user.id} {...user} />
      ))}
    </div>
  );
};

export default CardList;
