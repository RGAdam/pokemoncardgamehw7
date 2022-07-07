import { useContext, useEffect, useState } from "react";
import { GameContext } from "../../context/GameContext";
import PokemonCard from "../PokemonCard/PokemonCard";
import { GameWrapper } from "./PokemonCardList.styled";

const PokemonCardList = () => {
  const [usingCards, setUsingCards] = useState();

  let arrayOfIds = [
    1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10,
  ];

  const { difficulty } = useContext(GameContext);

  useEffect(() => {
    switch (difficulty) {
      case "easy":
        setUsingCards(8);
        break;
      case "medium":
        setUsingCards(12);
        break;
      case "hard":
        setUsingCards(20);
        break;
      default:
        break;
    }
  }, []);

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
