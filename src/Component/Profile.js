import React, { useEffect, useState } from 'react';

const Profile = ({ user }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (user) {
      const { id } = user;
      fetch(`https://dummyjson.com/users/${id}`)
        .then((res) => res.json())
        .then((userData) => {
          localStorage.setItem('user', JSON.stringify(userData));
          setUserData(userData);
        })
        .catch((error) => {
          console.error('Error fetching user details:', error);
        });
    }
  }, [user]);

  return (
    <div>
      <h1>Profile</h1>
      {userData && (
        <div>
          <p>ID: {userData.id}</p>
          <p>Username: {userData.username}</p>
          {/* Display other user information */}
        </div>
      )}
    </div>
  );
};

export default Profile;
