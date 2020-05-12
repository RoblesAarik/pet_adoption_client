import React from "react";
import Form from "./Form";

class Pet extends React.Component {
  state = {
    formVisible: false,
  };

  toggleForm = () => {
    this.setState({ formVisible: !this.state.formVisible });
  };

  handleUpdate = (event, pet) => {
    this.props.handleUpdate(event, pet);
    this.toggleForm();
  };

  render() {
    const { pet, handleDelete } = this.props;
    return (
      <>
        {this.state.formVisible ? (
          <Form pet={pet} handleSubmit={this.handleUpdate} />
        ) : (
          <div className="petInfo">
            <h3>{pet.animal}</h3>
            <img src={pet.pic} alt="Pic unavailble" width="250" height="250" />
            <h4>{pet.breed}</h4>
            <h4>{pet.age}</h4>
            <h4>{pet.size}</h4>
            <h4>{pet.gender}</h4>
            <p>
              If intrested call {pet.phone} or email {pet.email}
            </p>
            <button onClick={() => handleDelete(pet)}>X</button>
            <button onClick={this.toggleForm}>Edit Pet</button>
          </div>
        )}
      </>
    );
  }
}

export default Pet;
