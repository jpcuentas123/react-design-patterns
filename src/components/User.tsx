import React from "react";
import UsersContainer from "../components/containersComponents/CurrentUserLoader";
import ResourcesLoader from "../components/containersComponents/ResourcesLoader";
import UserInfoLarge from "./Layouts/Users/UserInfoLarge";
import DEV_API_URL from "../constants";
import { QueryProps } from "../types";

const UserProfile = () => {
  const query: QueryProps = {
    url: DEV_API_URL,
    path: "user",
    params: [
      {
        id: "1",
      },
    ],
  };
  return (
    <ResourcesLoader resourceName="user" query={query}>
      <UserInfoLarge />
    </ResourcesLoader>
  );
};

export default UserProfile;
