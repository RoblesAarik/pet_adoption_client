import React from "react";
// import Aside from "./components/Aside";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
import Main from "./components/Main";
// import Nav from "./components/Nav";
// import Pets from "./components/Pets";
import Form from "./components/Form";

class App extends React.Component {
  state = {
    pets: [],
  };

  componentDidMount() {
    this.getPets();
  }

  getPets() {
    fetch("/pets")
      .then((reponse) => reponse.json())
      .then((json) => this.setState({ pets: json }))
      .catch((error) => console.log(error));
  }

  handleAdd = (event, formInputs) => {
    event.preventDefault();
    fetch("/pets", {
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

  render() {
    console.log(this.state);
    return (
      <div>
        <div className="container">
          <h1>Adopt A Pet</h1>
          <Form handleSubmit={this.handleAdd} />
          <Main pets={this.state.pets} />
        </div>
      </div>
    );
  }
}

export default App;
