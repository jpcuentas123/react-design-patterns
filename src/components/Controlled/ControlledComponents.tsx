import React from "react";

const ControlledComponents = () => {
  const [formValues, setValue] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <>
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formValues.name}
          onChange={(e) => setValue({ ...formValues, name: e.target.value })}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formValues.email}
          onChange={(e) => setValue({ ...formValues, email: e.target.value })}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={formValues.password}
          onChange={(e) =>
            setValue({ ...formValues, password: e.target.value })
          }
        />

        <button onClick={handleSubmit}>Submit</button>
      </form>
    </>
  );
};

export default ControlledComponents;
