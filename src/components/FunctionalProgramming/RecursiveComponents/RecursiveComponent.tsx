import React from "react";

const isObject = (obj: any) => obj !== null && typeof obj === "object";

interface RecursiveComponentProps {
  data: Record<string, any> | string | number;
}

const RecursiveComponent: React.FC<RecursiveComponentProps> = ({ data }) => {
  if (data !== null && typeof data !== "object") {
    return <li>{data}</li>;
  }

  const pairs = Object.entries(data);
  return (
    <ul>
      {pairs.map(([key, value]) => (
        <RecursiveComponent data={value} key={key} />
      ))}
    </ul>
  );
};

export default RecursiveComponent;
