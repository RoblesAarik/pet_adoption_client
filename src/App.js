import React from "react";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Modal from "./components/Modal";

class App extends React.Component {
  state = {
    pets: [],
    display: false,
  };

  componentDidMount() {
    this.getPets();
  }

  getPets() {
    fetch("https://pet-adoption-api-aarik.herokuapp.com/pets")
      .then((reponse) => reponse.json())
      .then((json) => this.setState({ pets: json }))
      .catch((error) => console.log(error));
  }

  handleAdd = (event, formInputs) => {
    event.preventDefault();
    fetch("https://pet-adoption-api-aarik.herokuapp.com/pets", {
      body: JSON.stringify(formInputs),
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((createdPet) => createdPet.json())
      .then((jsonedPet) => {
        this.setState({
          pets: [jsonedPet, ...this.state.pets],
        });
      })
      .catch((error) => console.log(error));
  };

  handleDelete = (deletePet) => {
    fetch(`https://pet-adoption-api-aarik.herokuapp.com/pets/${deletePet.id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((json) => {
        const pets = this.state.pets.filter((pet) => pet.id !== deletePet.id);
        this.setState({ pets });
      })
      .catch((error) => console.log(error));
  };

  handleUpdate = (event, formInputs) => {
    event.preventDefault();
    fetch(
      `https://pet-adoption-api-aarik.herokuapp.com/pets/${formInputs.id}`,
      {
        body: JSON.stringify(formInputs),
        method: "PUT",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      }
    )
      .then((updatedPet) => {
        // be naughty
        this.getPets();
      })
      .catch((error) => console.log(error));
  };

  toggleModal = () => {
    this.setState({ display: !this.state.display });
    console.log(this.state.display);
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <Nav toggleModal={this.toggleModal} />
        <div className="container">
          <h1>Adopt A Pet</h1>
          {this.state.display ? (
            <Modal
              handleSubmit={this.handleAdd}
              toggleModal={this.toggleModal}
            />
          ) : null}
          <Main
            pets={this.state.pets}
            handleDelete={this.handleDelete}
            handleUpdate={this.handleUpdate}
          />
        </div>
      </div>
    );
  }
}

export default App;
