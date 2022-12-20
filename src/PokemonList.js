import React from "react";

export default function PokemonList({ pokemon }) {
  return (
    <div className="mt-20">
      {pokemon.map((p) => (
        <div key={p}>{p}</div>
      ))}
    </div>
  );
}
