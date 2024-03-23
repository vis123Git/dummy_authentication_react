import React, { useEffect, useState } from "react";

const Profile = ({ user }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (user) {
      const { id } = user;
      fetch(`https://dummyjson.com/users/${id}`)
        .then((res) => res.json())
        .then((userData) => {
          localStorage.setItem("user", JSON.stringify(userData));
          setUserData(userData);
        })
        .catch((error) => {
          console.error("Error fetching user details:", error);
        });
    }
  }, [user]);

  return (
    <div>
      <h1>Profile</h1>
      {userData && (
        <div>
          <p>ID : {userData.id}</p>
          <p>Username : {userData.username}</p>
          <p>Age : {userData.age}</p>
          <p>Address : {userData.address.address + ", " + userData.address.city}</p>
          <p>Postal Code: {userData.address.postalCode}</p>
          <p>State: {userData.address.state}</p>
          <p>Lat : {userData.address.coordinates.lat}</p>
          <p>Long : {userData.address.coordinates.lat}</p>
          <p>DOB: {userData.birthDate}</p>
          <p>Blood Group : {userData.bloodGroup}</p>
          <div>
            <p>Company Details : </p>
            <ul style={{ listStyleType: "none" }}>
              <li> Company Address : {userData.company.address.address}</li>
              <li> Company city : {userData.company.address.city}</li>
              <li> Company Postal Code : {userData.company.address.postalCode}</li>
              <li> Company State : {userData.company.address.state}</li>
              <li> Department : {userData.company.department}</li>
              <li> Name : {userData.company.name}</li>
              <li> Title : {userData.company.title}</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
