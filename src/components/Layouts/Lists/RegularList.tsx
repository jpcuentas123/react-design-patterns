import React, { ReactElement, ReactNode } from "react";
import VoidStatelessComponent from "../../constants/types";
import { Divisor } from "../../Ui/Divisor";

interface ListProps {
  items: any[];
  resourceName: string;
  itemComponent: (item: any) => JSX.Element;
  numbered?: boolean;
}

const NumberedHeader: VoidStatelessComponent<{
  display: boolean;
  position: number;
}> = ({ display, position }) => (display ? <h4>{position}</h4> : null);

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
          <NumberedHeader display={numbered} position={i + 1} />
          <ItemComponent
            {...{ [resourceName]: item }}
            key={`resourceName-${i}`}
          />
          <Divisor display={i !== items.length - 1} />
        </>
      ))}
    </>
  );
};

export default RegularList;
