import { Component } from "react";
import "./card-container.styles.css";

class Card extends Component {
  render() {
    const { person } = this.props;

    return (
      <div className="card-container" id={person.location.number}>
        <img
          className="container-img"
          alt={`person ${person.name.first}`}
          src={person.picture.large}
        />
        <h2>
          {person.name.first} {person.name.last}
        </h2>
        <h4>
          email:
          <br /> {person.email}
          <p />
          cell: {person.cell}
        </h4>
      </div>
    );
  }
}

export default Card;
