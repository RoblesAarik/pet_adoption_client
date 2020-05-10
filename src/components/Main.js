import React from "react";
import Pets from "./Pets.js";

function Main(props) {
  const { pets, handleDelete, handleUpdate } = props;

  return (
    <main>
      <Pets
        pets={pets}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
    </main>
  );
}

export default Main;
