import React from "react";
import Pet from "./Pet.js";

function Pets(props) {
  const { pets, handleDelete, handleUpdate } = props;
  return (
    <div>
      {pets.map((pet) => (
        <Pet
          key={pet.id}
          pet={pet}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      ))}
    </div>
  );
}

export default Pets;
