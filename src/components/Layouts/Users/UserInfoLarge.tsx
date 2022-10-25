import { User } from "../../../types";

interface PersonProps {
  user?: User;
}

const UserInfoLarge = ({ user }: PersonProps) => {
  if (!user) {
    return null;
  }
  const { name, age, hairColor, hobbies } = user;
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

export default UserInfoLarge;
