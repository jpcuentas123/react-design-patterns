import React from "react";

interface Person {
  name: string;
  age: number;
  hairColor: string;
  hobbies: string[];
}

interface PersonProps {
  person: Person;
}

const PersonListLarge = ({ person }: PersonProps) => {
  const { name, age, hairColor, hobbies } = person;
  return (
    <>
      <p>
        <b>Name:</b> {name}
      </p>
      <p>
        <b>Age:</b> {age}
      </p>
      <p>
        <b>Hair Color:</b> {hairColor}
      </p>
      <p>
        <b>Hobbies:</b> {hobbies.join(", ")}
      </p>
    </>
  );
};

export default PersonListLarge;
