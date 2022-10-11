// import Image from "next/image";
import Loading from "../../atoms/Loading/Loading";

export default function Card({ pokemonData, loading }) {
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        pokemonData.map((pokemon, index) => {
          return (
            <a
              key={index}
              href={""}
              className="max-w-sm bg-white rounded-lg border border-gray-200 hover:drop-shadow p-4"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 capitalize">
                {pokemon.name}
              </h5>
            </a>
          );
        })
      )}
    </>
  );
}
