import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  //State management
  const [gitUsers, setGitUsers] = useState([]);

  const getGitUsers = async () => {
    const response = await axios.get("https://api.github.com/users?since=XXXX");
    console.log(response.data);
    setGitUsers(response.data);
    return response.data;
  };

  useEffect(() => {
    getGitUsers().catch((e) => console.error(e));
  }, []);
  return (
    <div style={{ marginTop: "50px" }}>
      {" "}
      <div className="users-cont">
        {gitUsers.map((user) => (
          <div className="user-card-cont" key={user.id}>
            <img
              src={user.avatar_url}
              alt="userAvatar"
              className="user-avatar"
            />
            <span className="username">{user.login}</span>
            <Link to={`/users/user/${user.login}`}>
              <button className="view-btn">View User</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
