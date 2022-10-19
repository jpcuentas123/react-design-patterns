import React from "react";

interface Person {
  name: string;
  age: number;
}

interface PersonListLargeProps {
  person: Person;
}

const UserListSmall = ({ person }: PersonListLargeProps) => {
  const { name, age } = person;
  return (
    <>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </>
  );
};

export default UserListSmall;