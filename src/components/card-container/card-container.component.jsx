import { Component } from "react"
import './card-container.styles.css'

class Card extends Component {

    render() {
        const { person } = this.props 

        return (
            <div className="card-container" id={person.location.number}>
            <img alt={`person ${person.name.first}`}
              src={person.picture.large} style={{ border: 'solid black 5px' }}
            />
            <h2>
              {person.name.first} {person.name.last}
            </h2>
            <h4>email: {person.email}<br />
            cell: {person.cell}</h4>
          </div>
        )
    }

}

export default Card;