import React from "react";
import RegularList from "./Layouts/Lists/RegularList";
import UserList from "./Layouts/Users";
import people from "./data/People.json";
import products from "./data/Products.json";
import ProductList from "./Layouts/Products";
const ListOfPersonAndProducts = () => {
  return (
    <>
      <h2>Persons Small data</h2>
      <RegularList
        items={people}
        resourceName="person"
        itemComponent={UserList.Small}
      />
      <h2>Persons Full data</h2>
      <RegularList
        items={people}
        resourceName="person"
        itemComponent={UserList.Large}
      />
      <h2>Product small data</h2>
      <RegularList
        items={products}
        resourceName="product"
        itemComponent={ProductList.Small}
        numbered
      />
      <h2>Product full data</h2>
      <RegularList
        items={products}
        resourceName="product"
        itemComponent={ProductList.Large}
        numbered
      />
    </>
  );
};

export default ListOfPersonAndProducts;
