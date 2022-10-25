import React, { PropsWithChildren, useEffect, useState } from "react";
import Axios from "axios";
import { User } from "../../types";

interface Props {
  userId: string;
  children: React.ReactElement<{ user: User }>;
}
const UsersContainer: React.FC<Props> = ({ userId, children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    // fetch users with axios
    (async () => {
      try {
        const response = await Axios.get(
          `http://localhost:3000/user/${userId}`
        );
        setUser(response.data);
      } catch (e: any) {
        setError(e);
      }
    })();
  }, [userId]);

  if (error) {
    return <div>Something went wrong</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user });
        }
        return child;
      })}
    </>
  );
};

export default UsersContainer;
