import { Component } from 'react';

import './App.css';
import { getDefaultNormalizer } from '@testing-library/react';

class App extends Component {

  constructor() {
    super()

    this.state = {
      persons: [],
      searchField: '',
    }
    console.log('constructor')
  }

  componentDidMount() {
    console.log('componentDidMount')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState(() => {
        return { persons: users }
      }
      ))
  }
  
  render() {
    console.log('render')


    const filteredPeople = this.state.persons.filter((person) => {
      return person.name.toLocaleLowerCase().includes(this.state.searchField)
    })
   
    return (
      <div className="App">

        <input className='search-box' type='search' placeholder='search monsters' id='search-box' onChange={(event) => {
          const searchValue = event.target.value.toLocaleLowerCase()
          this.setState(
            () => {
              return { searchField: searchValue }
            }
          )
        }}
        />

        {
          filteredPeople.map((person => {
            return <h1 key={person.id}>{person.name}</h1>
        }))
        }

        </div>
      )
    }
}
  
export default App;