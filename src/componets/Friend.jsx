import Button from "./Button";

const Friend = ({ friend, onSelection, selectedFriend }) => {
  const isSeleted = selectedFriend?.id === friend.id;
  return (
    <li className={isSeleted ? "selected" : ""}>
      <img src={friend.image} alt="profileImg" />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}

      <Button onClick={() => onSelection(friend)}>
        {isSeleted ? "close" : "select"}
      </Button>
    </li>
  );
};

export default Friend;
