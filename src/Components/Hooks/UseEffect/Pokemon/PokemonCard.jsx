import { useEffect, useState } from "react";

const PokemonCard = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [error, setError] = useState(null);

  const api = "https://pokeapi.co/api/v2/pokemon/pikachu";

  const fetchData = async () => {
    try {
      const res = await fetch(api);
      const data = res.json();
      // console.log(data)
      setPokemonData(data);
    } catch (error) {
      console.log("error", error);
      setError(error)
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log("pokemonData", pokemonData);
  console.log('error',error);

  return (
    <div className="w-full">
      <h1 className="text-center">Pokemon</h1>

      <div className="w-72 bg-slate-300 h-64">
        {/* <img className="w-32 bg-red-400"
        src=""
        alt="pokemon-pic" />   */}
        <h3>Name : {pokemonData.base_experience} </h3>
      </div>
    </div>
  );
};

export default PokemonCard;
