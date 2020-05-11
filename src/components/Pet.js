import React from "react";

class Pet extends React.Component {
  render() {
    const { pet, handleDelete } = this.props;
    return (
      <>
        <div>
          <h3>{pet.animal}</h3>
          <img src={pet.pic} alt="Pic unavailble" />
          <h4>{pet.breed}</h4>
          <h4>{pet.age}</h4>
          <h4>{pet.size}</h4>
          <h4>{pet.gender}</h4>
          <p>
            If intrested call {pet.phone} or email {pet.email}
          </p>
          <button onClick={() => handleDelete(pet)}>X</button>
        </div>
      </>
    );
  }
}

export default Pet;
