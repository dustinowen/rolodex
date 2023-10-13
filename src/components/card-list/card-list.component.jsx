import { Component } from "react";

class CardList extends Component {
    render() {
      console.log('render from card-list')
    const { people } = this.props;

    return (
      <div>
        {people.map((person) => {
          return <h1 key={person.id}>{person.name}</h1>;
        })}
      </div>
    );
  }
}

export default CardList;
