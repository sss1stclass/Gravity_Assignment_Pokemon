import { fetchPokemonDetail } from "../../../lib/fetchPokemon";
import Link from "next/link";

export default async function PokemonDetailPage({params}:any) {
  const { name } = await params;
  const data = await fetchPokemonDetail(name);

  return (
    <main className="p-4 max-w-2xl mx-auto">
      <Link
        href="/"
        className="text-green-600 text-sm mb-4 inline-block hover:underline"
      >
        ⬅️Back
      </Link>

       {/* Card section starts here... */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
    
        <div className="bg-cyan-200 flex items-center justify-center p-6">
          <img
            src={data.sprites.other["official-artwork"].front_default}
            alt={data.name}
            className="w-48 h-48 object-contain"
          />
        </div>

        <div className="bg-yellow-200 p-6 space-y-2 text-sm leading-relaxed">
          <p className="text-lg font-bold">
            <span className="font-semibold">Name:</span>{" "}
            <span className="capitalize">{data.name}</span>
          </p>

          <p>
            <strong>Type:</strong>{" "}
            {data.types.map((t: any) => t.type.name).join(", ")}
          </p>

          <p>
            <strong>Stats:</strong>{" "}
            {data.stats.map((s: any) => s.stat.name).join(", ")}
          </p>

          <p>
            <strong>Abilities:</strong>{" "}
            {data.abilities.map((a: any) => a.ability.name).join(", ")}
          </p>

          <p>
            <strong>Some Moves:</strong>{" "}
            {data.moves.slice(0, 6).map((m: any) => m.move.name).join(", ")}
          </p>
        </div>
      </div>
    </main>
  );
}
