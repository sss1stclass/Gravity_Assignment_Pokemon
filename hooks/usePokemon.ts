// made a seperate hook so that code looks neat and clean where all the functional part is written

import { useState } from "react";

 const usePokemon = () => {
  const [allPokemon, setAllPokemon] = useState<any[]>([]);
  const [filteredPokemon, setFilteredPokemon] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchAllPokemon = async () => {
    setLoading(true);
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=200"); // taking limit 200 only, for future use we can use pagination
    const data = await res.json();
    setAllPokemon(data.results);
    setFilteredPokemon(data.results);
    setLoading(false);
  };

  const handleSearch = (query: string) => {
    const filtered = allPokemon.filter((p) =>
      p.name.toLowerCase().includes(query)
    );
    setFilteredPokemon(filtered);
  };

  const handleTypeChange = async (type: string) => {
    if (!type) {
      setFilteredPokemon(allPokemon);
      return;
    }
    setLoading(true);
    const res = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
    const data = await res.json();
    const pokemonList = data.pokemon.map((p: any) => p.pokemon.name);
    const filtered = allPokemon.filter((p) => pokemonList.includes(p.name));
    setFilteredPokemon(filtered);
    setLoading(false);
  };
  return {
    allPokemon,
    setAllPokemon,
    filteredPokemon,
    setFilteredPokemon,
    loading,
    setLoading,
    fetchAllPokemon,
    handleSearch,
    handleTypeChange,
  };
};

export default usePokemon;
