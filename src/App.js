import React from "react";
import PokeCard from "./components/PokeCard"
import { mockPokemonData } from "./mock/pokeData"
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <PokeCard pokeData={mockPokemonData}/>
    </div>
  );
}
