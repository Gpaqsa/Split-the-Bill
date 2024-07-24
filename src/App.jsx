
import Button from './componets/Button';
import FriendsList from './componets/FriendsList';
import FormAddFriend from "./componets/FormAddFriend"
import FormSplitBill from './componets/FormSplitBill';
import { useState } from 'react';
function App() {
  const initialFriends = [
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=499476",
      balance: 0,
    },
  ];


  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friendsData, setFriendsData] = useState(initialFriends);

  const handleShowAddFriend = () => {
    setShowAddFriend((show) => !show);
  };

  const handleAddFriend = (newFriend) => {
    setFriendsData((friendsData) => [...friendsData, newFriend]);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList initialFriends={friendsData} />

        {showAddFriend && (
          <FormAddFriend
            setFriendsData={setFriendsData}
            onAddFriend={handleAddFriend}
          />
        )}
        <Button onClick={handleShowAddFriend}>
          {!showAddFriend ? `Add Friend` : `close`}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

export default App
