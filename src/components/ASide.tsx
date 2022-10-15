import React from "react";
import SplitScreen from "./Layouts/SplitScreen";

const Left = ({ title }: { title: string }) => {
  return <div>{title}</div>;
};

const Right = ({ message }: { message: string }) => {
  return <div>{message}</div>;
};

const ASide = () => {
  return (
    <SplitScreen rightWeight={3}>
      <Left title="A side" />
      <Right message="Welcome!" />
    </SplitScreen>
  );
};

export default ASide;
