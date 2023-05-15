import { styleColor } from "./colorDiv";

const Wrapper = ({ setIsClicked, pokemons, pokeId, color }) => {
  return pokemons.map((pokemon, ind) => {
    if (pokeId === pokemon.id) {
      return (
        <div className="lightbox" key={ind}>
          <div className="wrapper">
            <div className="preview-img">
              <div className="img w-100">
                <div
                  className="colorFloor"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, #ffffff 80%, ${color} 35%)`,
                  }}
                >
                  <i
                    className="bi bi-stars ms-5 position-absolute display-2"
                    style={{
                      color: color,
                    }}
                  ></i>
                  <p className="pokName text-center fs-3 fw-bold">
                    {pokemon.name}
                  </p>
                  <img
                    src={
                      pokemon.sprites.other.dream_world.front_default
                        ? pokemon.sprites.other.dream_world.front_default
                        : pokemon.sprites.other.home.front_default
                    }
                    alt="preview-img"
                  />
                </div>
              </div>
            </div>

            <div
              className="info"
              style={{
                backgroundColor: color,
              }}
            >
              <div className="d-flex align-items-center text-center justify-content-center">
                <p className="pokName1 fs-3 fw-bold">{pokemon.name}</p>
                <p className="pokN mt-2 ms-2">(info)</p>
              </div>
              <div className="dataInfo">
                <div className="tableStat" style={{ width: "fit-content" }}>
                  <table className="table table-bordered border-dark table-sm">
                    <thead>
                      <tr className="text-center">
                        <th>Stats:</th>
                        <th>Values</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pokemon.stats.map((elem, ind) => {
                        return (
                          <tr key={ind}>
                            <td>{elem.stat.name}</td>
                            <td className="text-center fw-bold">
                              {elem.base_stat}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <div className="tableStat3" style={{ width: "fit-content" }}>
                  <table className="table table-bordered border-dark table-sm">
                    <thead>
                      <tr className="text-center">
                        <th>Normal version:</th>
                        <th>Shiny version:</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <img
                            className="normalV"
                            src={
                              pokemon.sprites.other.dream_world.front_default
                                ? pokemon.sprites.other.dream_world
                                    .front_default
                                : pokemon.sprites.other.home.front_default
                            }
                            alt="preview-img"
                          />
                        </td>
                        <td>
                          <img
                            className="normalVshiny"
                            src={pokemon.sprites.other.home.front_shiny}
                            alt="preview-img"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table className="table table-bordered border-dark table-sm">
                    <thead>
                      <tr className="text-center">
                        <th>Normal version:</th>
                        <th>Shiny version:</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <img
                            className="normalVBack"
                            src={pokemon.sprites.other.home.front_default}
                            alt="preview-img"
                          />
                        </td>
                        <td>
                          <img
                            className="normalVshinyBack"
                            src={pokemon.sprites.other.home.front_shiny}
                            alt="preview-img"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="tableStat5" style={{ width: "fit-content" }}>
                  <table className="table table-bordered border-dark table-sm">
                    <thead>
                      <tr className="text-center">
                        <th>Normal version:</th>
                        <th>Shiny version:</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          {pokemon.sprites.back_default ? (
                            <img
                              className="normalV"
                              src={pokemon.sprites.back_default}
                              alt="preview-img"
                            />
                          ) : (
                            "No photo"
                          )}
                        </td>
                        <td>
                          {pokemon.sprites.back_shiny ? (
                            <img
                              className="normalVshiny"
                              src={pokemon.sprites.back_shiny}
                              alt="preview-img"
                            />
                          ) : (
                            "No Photo"
                          )}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div>
                    <div className="typePokemon">
                      <h3 className="text-center">Type:</h3>
                      {pokemon.types.map((elem) => {
                        return styleColor.map((el, ind) => {
                          if (el[0] === elem.type.name) {
                            return (
                              <p
                                key={ind}
                                style={{
                                  background: el[1],
                                  color:
                                    (elem.type.name === "poison") |
                                    (elem.type.name === "fighting")
                                      ? "white"
                                      : "black",
                                }}
                              >
                                {elem.type.name}
                              </p>
                            );
                          }
                          return null;
                        });
                      })}
                    </div>
                  </div>
                </div>
                <div
                  className="tableStat1 me-2 ms-2 fs-6"
                  style={{ width: "fit-content" }}
                >
                  <table className="table table-bordered border-dark table-sm">
                    <thead>
                      <tr className="text-center">
                        <th>Ability:</th>
                        <th>Slot</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pokemon.abilities.map((elem, ind) => {
                        return (
                          <tr key={ind}>
                            <td>{elem.ability.name}</td>
                            <td className="text-center">{elem.slot}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  <div className="info2 lh-1 p-1 border border-2 border-dark rounded-2">
                    <div className="d-flex justify-content-between mt-1 ms-1">
                      <p>ID: </p>
                      <p className="fw-bold">{pokemon.id}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p>Weight: </p>
                      <p className="fw-bold">{pokemon.weight}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p>Height: </p>
                      <p className="fw-bold"> {pokemon.height}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p>Experience: </p>
                      <p className="fw-bold">{pokemon.base_experience}</p>
                    </div>
                  </div>
                </div>

                <div className="tableStat4" style={{ width: "fit-content" }}>
                  <table className="table table-bordered border-dark table-sm">
                    <thead>
                      <tr className="text-center">
                        <th>Game indices:</th>
                        <th>Version:</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pokemon.game_indices.map((elem, ind) => {
                        return (
                          <tr key={ind}>
                            <td className="text-center">{elem.game_index}</td>
                            <td className="text-center">{elem.version.name}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              <button
                className="close position-absolute sticky-sm-top"
                onClick={() => setIsClicked(false)}
              >
                <i className="bi bi-x fs-2"></i>
              </button>
            </div>
          </div>
        </div>
      );
    }
    return null;
  });
};

export default Wrapper;
