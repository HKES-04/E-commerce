import PropTypes from "prop-types";
import { IoSearch } from "react-icons/io5";
import "./SearchBar.css";

function SearchBar({ setSearchTerm }) {
  return (
    <section>
      <div className="search-input">
        <IoSearch className="search-icon" />
        <input
          type="search"
          placeholder="Search here..."
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>
    </section>
  );
}

SearchBar.propTypes = {
  setSearchTerm: PropTypes.func.isRequired,
};

export default SearchBar;
