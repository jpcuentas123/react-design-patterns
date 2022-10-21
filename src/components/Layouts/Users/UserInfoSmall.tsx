import React from "react";

interface Person {
  name: string;
  age: number;
}

interface PersonListLargeProps {
  user: Person;
}

const UserInfoSmall = ({ user }: PersonListLargeProps) => {
  const { name, age } = user;
  return (
    <>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </>
  );
};

export default UserInfoSmall;
