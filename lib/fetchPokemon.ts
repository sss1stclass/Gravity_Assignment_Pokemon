export async function fetchAllPokemon() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50");
  const data = await res.json();
  return data.results; 
}
export async function fetchPokemonDetail(name: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return res.json();
}