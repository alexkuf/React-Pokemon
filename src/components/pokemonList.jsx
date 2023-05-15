import { useEffect, useState } from "react";
import PokemonItem from "./pokemonItem";
import Wrapper from "./wrapper";
import Header from "./header";

const PokemonList = () => {
  const [pokNames, setPokNames] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextPageUrl, setNextPageUrl] = useState();
  const [isClicked, setIsClicked] = useState(false);
  const [pokeId, setPokeId] = useState();
  const [color, setColor] = useState();
  const [typeFilter, setTypeFilter] = useState("");

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPokNames(data.results.map((p) => p.name));
        setNextPageUrl(data.next);
      });
  }, [url]);

  useEffect(() => {
    const promises = pokNames.map(async (pokemon) => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`);
      return await res.json();
    });

    Promise.all(promises).then((pokemones) => {
      setPokemons((currentList) => [...currentList, ...pokemones]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nextPageUrl]);

  // useEffect(() => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setPokNames(data.results.map((p) => p.name));
  //       setNextPageUrl(data.next);
  //     });
  // }, [url]);

  // useEffect(() => {
  //   pokNames.map((result) => {
  //     fetch(`https://pokeapi.co/api/v2/pokemon/${result}/`)
  //       .then((res) => res.json())
  //       .then((data) => setPokemons((currentList) => [...currentList, data]));
  //     return pokNames;
  //   });
  // }, [nextPageUrl]);

  const handleClikLoad = () => {
    setUrl(nextPageUrl);
  };

  return (
    <>
      <Header pokemons={pokemons} setTypeFilter={setTypeFilter} />
      <div className="container pt-5">
        <div className="row justify-content-center">
          {pokemons &&
            pokemons
              .filter((reg) => reg.types[0].type.name.includes(typeFilter))
              .map((pokemon, ind) => (
                <PokemonItem
                  key={ind}
                  id={pokemon.id}
                  power={pokemon.stats[0].base_stat}
                  name={pokemon.name}
                  image={pokemon.sprites.other.dream_world.front_default}
                  image1={pokemon.sprites.other.home.front_default}
                  type={pokemon.types[0].type.name}
                  isClicked={isClicked}
                  setIsClicked={setIsClicked}
                  setPokeId={setPokeId}
                  setColor={setColor}
                />
              ))}
          <div className="d-grid gap-2 ps-5 pe-5 pb-4">
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleClikLoad}
            >
              Load more...
            </button>
          </div>
          {isClicked ? (
            <Wrapper
              setIsClicked={setIsClicked}
              pokemons={pokemons}
              pokeId={pokeId}
              color={color}
            />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default PokemonList;
