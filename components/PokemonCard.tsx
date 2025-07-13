import Link from "next/link";

interface PokemonCardProps {
  name: string;
}

export default function PokemonCard({ name }: PokemonCardProps) {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center text-center hover:shadow-md transition">
      <img
        src={`https://img.pokemondb.net/artwork/large/${name}.jpg`}
        alt={name}
        className="w-24 h-24 object-contain"
      />
      <h2 className="mt-2 text-lg font-semibold capitalize">{name}</h2>
      <Link
        href={`/pokemon/${name}`}
        className="text-blue-600 text-sm mt-1 hover:underline"
      >
        Details →
      </Link>
    </div>
  );
}
