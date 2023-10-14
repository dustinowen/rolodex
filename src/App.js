import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      persons: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=100")
      .then((response) => response.json())
      .then((jsonResults) =>
        this.setState(() => {
          return { persons: jsonResults.results };
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
    const { persons, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredPeople = persons.filter((person) => {
      return person.name.first.toLocaleLowerCase().includes(searchField.toLocaleLowerCase());
    });

    return (
      <div className="App">
        <SearchBox
          onChangeHandler={onSearchChange}
          className="monster-search-box"
          placeholder="search people"
        />
        <CardList people={filteredPeople} />
      </div>
    );
  }
}

export default App;
