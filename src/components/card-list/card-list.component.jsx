import { Component } from "react";
import Card from "../card-container/card-container.component";
import './card-list.styles.css'

class CardList extends Component {
  render() {
    const { people } = this.props;

    return (
        <div className="card-list">
        {people.map((person) => {
            return <Card person={person} />;
        })}
      </div>
    );
  }
}

export default CardList;
