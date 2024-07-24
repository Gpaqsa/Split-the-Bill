import Friend from "./Friend";

const FriendsList = ({ initialFriends }) => {
  return (
    <ul className="sidebar">
      {initialFriends.map((friend) => (
          <Friend name={friend.name} image={friend.image} key={friend.id} balance={friend.balance} />
      ))}
    </ul>
  );
};

export default FriendsList;
