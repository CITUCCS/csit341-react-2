import { React } from "react";

const Search = (props) => {
  
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input type="text" id="search" onChange={props.onSearchTermChange} />
      {props.searchTerm && props.searchTerm.trim() !== "" && (
        <p>
          Searching for : <strong>{props.searchTerm}</strong>
        </p>
      )}
    </div>
  );
};

export default Search;
