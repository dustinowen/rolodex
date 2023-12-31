import { Component } from "react";
import './search-box.styles.css'

class SearchBox extends Component {
  render() {
    const { onChangeHandler, placeholder } = this.props;

    return (
      <input
        className={`search-box ${this.props.className}`}
        type="search"
        placeholder={placeholder}
        id="search-box"
        onChange={onChangeHandler}
      />
    );
  }
}

export default SearchBox;
