"use client";

import { useEffect } from "react";
import SearchForm from "../components/SearchForm";
import PokemonCard from "../components/PokemonCard";
import Loader from "../components/Loader";
import usePokemon from "@/hooks/usePokemon";

export default function HomePage() {
  const {
    filteredPokemon,
    loading,
    fetchAllPokemon,
    handleSearch,
    handleTypeChange,
  } = usePokemon();     // used for better code quality...

  useEffect(() => {
    fetchAllPokemon();
  }, []);

  return (
    <main className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Pokemon Ϟ(๑⚈ ․̫ ⚈๑)⋆</h1>
      <SearchForm onSearch={handleSearch} onTypeChange={handleTypeChange} />

      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
          {filteredPokemon.map((poke) => (
            <PokemonCard key={poke.name} name={poke.name} />
          ))}
        </div>
      )}
    </main>
  );
}
