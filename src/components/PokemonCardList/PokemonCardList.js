import { useContext, useEffect, useState } from "react";
import { GameContext } from "../../context/GameContext";
import { GameWrapper } from "./PokemonCardList.styled";

import PokemonCard from "../PokemonCard/PokemonCard";

const PokemonCardList = () => {
  const [usingCards, setUsingCards] = useState();
  const { difficulty } = useContext(GameContext);

  useEffect(() => {
    switch (difficulty) {
      case "easy":
        setUsingCards(4);
        break;
      case "medium":
        setUsingCards(6);
        break;
      case "hard":
        setUsingCards(10);
        break;
      default:
        break;
    }
  }, [difficulty]);

  let arrayOfIds = Array.from(Array(usingCards).keys());
  arrayOfIds = arrayOfIds.concat(arrayOfIds);
  arrayOfIds.sort((a, b) => 0.5 - Math.random());

  return (
    <GameWrapper>
      {arrayOfIds.map((number, index) => (
        <PokemonCard key={index} id={number} />
      ))}
    </GameWrapper>
  );
};

export default PokemonCardList;
