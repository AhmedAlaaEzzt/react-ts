const SearchBox = (props) => {
    return (
      <div className="pa2">
        <input value={props.value} onChange={props.searchChange}  type="search" placeholder="search users" />
      </div>
    );
  };
  
  export default SearchBox;
  