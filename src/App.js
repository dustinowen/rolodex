import { Component } from "react";

import "./App.css";
import { getDefaultNormalizer } from "@testing-library/react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      persons: [],
      searchField: "",
    };
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { persons: users };
        })
      );
  }

  onSearchChange = (event) => {
    const searchValue = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField: searchValue };
    });
  };

  render() {
    console.log("render from app.js");

    const { persons, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredPeople = persons.filter((person) => {
      return person.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <SearchBox
          onChangeHandler={onSearchChange}
          className='search-box'
          placeholder='search people'
        />
        <CardList people={filteredPeople} />
      </div>
    );
  }
}

export default App;
