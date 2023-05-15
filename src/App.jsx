import "./App.css";
import PokemonList from "./components/pokemonList";

import Footer from "./components/footer";

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <main className="flex-fill">
        <PokemonList />
      </main>

      <Footer />
    </div>
  );
}

export default App;
