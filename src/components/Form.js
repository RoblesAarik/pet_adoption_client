import React from "react";
import Input from "./Input.js";

class Form extends React.Component {
  state = {
    animal: "",
    location: "",
    breed: "",
    age: "",
    phone: "",
    email: "",
    gender: "",
    size: "",
    pic: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSubmit(event, {
      animal: this.state.animal,
      location: this.state.location,
      breed: this.state.breed,
      age: this.state.age,
      phone: this.state.phone,
      gender: this.state.gender,
      size: this.state.size,
      email: this.state.email,
      pic: this.state.pic,
    });
  };

  componentWillMount() {
    if (this.props.notice) {
      const {
        animal,
        location,
        breed,
        age,
        phone,
        email,
        gender,
        size,
        pic,
      } = this.props.notice;
      this.setState({
        animal: animal || "",
        location: location || "",
        breed: breed || "",
        age: age || "",
        phone: phone || "",
        email: email || "",
        gender: gender || "",
        size: size || "",
        pic: pic || "",
      });
    }
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>New Pet</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            handleChange={this.handleChange}
            name={"animal"}
            placeholder={"Animal for Adoption"}
            type={"text"}
            value={this.state.animal}
            id={"animal"}
          />
          <Input
            handleChange={this.handleChange}
            name={"gender"}
            placeholder={"Gender"}
            type={"text"}
            value={this.state.gender}
            id={"gender"}
          />
          <Input
            handleChange={this.handleChange}
            name={"size"}
            placeholder={"Size of Animal"}
            type={"text"}
            value={this.state.size}
            id={"size"}
          />
          <Input
            handleChange={this.handleChange}
            name={"location"}
            placeholder={"Location for Animal"}
            type={"text"}
            value={this.state.location}
            id={"location"}
          />
          <Input
            handleChange={this.handleChange}
            name={"breed"}
            placeholder={"Breed of Animal"}
            type={"text"}
            value={this.state.breed}
            id={"breed"}
          />
          <Input
            handleChange={this.handleChange}
            name={"pic"}
            placeholder={"Picture of Animal"}
            type={"text"}
            value={this.state.pic}
            id={"pic"}
          />
          <Input
            handleChange={this.handleChange}
            name={"phone"}
            placeholder={"Contact Phone Number"}
            type={"text"}
            value={this.state.phone}
            id={"phone"}
          />
          <Input
            handleChange={this.handleChange}
            name={"email"}
            placeholder={"Contact Email"}
            type={"text"}
            value={this.state.email}
            id={"email"}
          />

          <input type="submit" value="Add a New Pet" />
        </form>
      </div>
    );
  }
}

export default Form;
