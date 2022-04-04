interface ISearchBox {
  value: string,
  searchChange: () => void
}
const SearchBox = ({ value, searchChange }: ISearchBox) => {
  return (
    <div className="">
      <input
        value={value}
        onChange={searchChange}
        type="search"
        placeholder="search users"
      />
    </div>
  );
};

export default SearchBox;
