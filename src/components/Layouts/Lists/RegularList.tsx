import React from "react";

interface ListProps {
  items: any[];
  resourceName: string;
  itemComponent: (item: any) => JSX.Element;
}
const RegularList = ({
  items,
  resourceName,
  itemComponent: ItemComponent,
}: ListProps) => {
  return (
    <>
      {items.map((item, i) => (
        <>
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
