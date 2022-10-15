import React from "react";

interface ListProps {
  items: any[];
  resourceName: string;
  itemComponent: (item: any) => JSX.Element;
  numbered?: boolean;
}
const RegularList = ({
  items,
  resourceName,
  itemComponent: ItemComponent,
  numbered = false,
}: ListProps) => {
  return (
    <>
      {items.map((item, i) => (
        <>
          {numbered && <h4>{i + 1}</h4>}
          <ItemComponent
            {...{ [resourceName]: item }}
            key={`resourceName-${i}`}
          />
          {i < items.length - 1 && <hr />}
        </>
      ))}
    </>
  );
};

export default RegularList;
