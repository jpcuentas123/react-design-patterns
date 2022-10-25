import React from "react";

const UncontrolledComponent = () => {
  const nameInputRef = React.useRef<HTMLInputElement>(null);
  const emailInputRef = React.useRef<HTMLInputElement>(null);
  const passwordInputRef = React.useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(nameInputRef.current?.value);
    console.log(emailInputRef.current?.value);
    console.log(passwordInputRef.current?.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" ref={nameInputRef} />
        <input type="email" name="email" ref={emailInputRef} />
        <input type="password" name="password" ref={passwordInputRef} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default UncontrolledComponent;
