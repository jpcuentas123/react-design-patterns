import React from "react";
import UsersContainer from "../containersComponents/CurrentUserLoader";
import UserInfoLarge from "./Layouts/Users/UserIInfoLarge";

const UserProfile = () => {
  return (
    <UsersContainer userId={"2"}>
      <UserInfoLarge />
    </UsersContainer>
  );
};

export default UserProfile;
