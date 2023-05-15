import { styleColor } from "./colorDiv";

const Header = ({ pokemons, setTypeFilter }) => {
  return (
    <header className="p-1 bg-dark text-white sticky-top">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <h2>Pokemon Evolution</h2>
          <p className="display-8 mx-auto mt-2 ">
            Total is shown: {pokemons.length}
          </p>
          <div className="d-flex justify-content-end text-nowrap">
            <h5 className="mt-4 text-center m-auto">Filtering by Type</h5>
            <select
              className="form-select m-3 "
              style={{ width: "11rem" }}
              onChange={(e) => setTypeFilter(e.target.value)}
            >
              <option value={""}>All</option>
              {styleColor
                .sort((a, b) => (a > b ? 1 : -1))
                .map((type, ind) => (
                  <option key={ind}>{type[0]}</option>
                ))}
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
