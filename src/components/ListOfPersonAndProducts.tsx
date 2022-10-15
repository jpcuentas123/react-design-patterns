import React from "react";
import RegularList from "./Layouts/Lists/RegularList";
import PersonList from "./Layouts/People";
import people from "./data/People.json";
const ListOfPersonAndProducts = () => {
  return (
    <>
      <h2>Persons Small data</h2>
      <RegularList
        items={people}
        resourceName="person"
        itemComponent={PersonList.Small}
      />
      <h2>Persons Full data</h2>
      <RegularList
        items={people}
        resourceName="person"
        itemComponent={PersonList.Large}
      />
    </>
  );
};

export default ListOfPersonAndProducts;
