import { Component } from 'react';

import './App.css';
import { getDefaultNormalizer } from '@testing-library/react';

class App extends Component {

  constructor() {
    super()

    this.state = {
      monsters: [],
    }
    console.log('constructor')
  }

  componentDidMount() {
    console.log('componentDidMount')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState(() => {
        return { monsters: users }
      },
        () => { console.log("state", this.state) }
      ))
  }
  
  render() {
    console.log('render')
    return (
      <div className="App">

        <input className='search-box' type='search' placeholder='search monsters' />

        {
          this.state.monsters.map((monster => {
            return <h1 key={monster.id}>{monster.name}</h1>
        }))
        }

        </div>
      )
    }
}
  
export default App;