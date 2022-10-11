// import Image from "next/image";
import Image from "next/image";
import Loading from "../../atoms/Loading/Loading";

export default function Card({ pokemonData, loading }) {
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        pokemonData.map((pokemon) => {
          return (
            <a
              key={pokemon.id}
              href={""}
              className="flex justify-center bg-white rounded-lg border border-gray-200 hover:drop-shadow"
            >
              <Image
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                width={96}
                height={96}
                objectFit="cover"
              />
              <div className="flex flex-col p-4">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 capitalize">
                  {pokemon.name}
                </h5>
                <span className="text-sm font-light text-gray-500">
                  Height: {pokemon.height}
                </span>
                <span className="text-sm font-light text-gray-500">
                  Weight: {pokemon.weight}
                </span>
              </div>
            </a>
          );
        })
      )}
    </>
  );
}
