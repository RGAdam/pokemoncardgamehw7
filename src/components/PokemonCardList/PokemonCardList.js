import { useContext, useEffect, useState } from "react";
import { GameContext } from "../../context/GameContext";
import { GameWrapper } from "./PokemonCardList.styled";

import PokemonCard from "../PokemonCard/PokemonCard";

const cardImages = [
  { src: "/assets/card-poke1.png", matched: false },
  { src: "/assets/card-poke2.png", matched: false },
  { src: "/assets/card-poke3.png", matched: false },
  { src: "/assets/card-poke4.png", matched: false },
  { src: "/assets/card-poke5.png", matched: false },
  { src: "/assets/card-poke6.png", matched: false },
  { src: "/assets/card-poke7.png", matched: false },
  { src: "/assets/card-poke8.png", matched: false },
  { src: "/assets/card-poke9.png", matched: false },
  { src: "/assets/card-poke10.png", matched: false },
];

const PokemonCardList = () => {
  const [usingCards, setUsingCards] = useState();
  const [cards, setCards] = useState([]);
  const [matchCounter, setMatchCounter] = useState(1);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const { difficulty, setTurns, seed, checkIfHighScore } =
    useContext(GameContext);

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
    shuffleCards();
  }, [seed]);

  const shuffleCards = () => {
    const shuffledCards = [
      ...cardImages.slice(0, usingCards),
      ...cardImages.slice(0, usingCards),
    ]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              setMatchCounter(matchCounter + 1);
              if (matchCounter === usingCards) {
                checkIfHighScore();
              }
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
    setMatchCounter(1);
  };

  return (
    <GameWrapper>
      {cards.map((card) => (
        <PokemonCard
          key={card.id}
          card={card}
          handleChoice={handleChoice}
          flipped={card === choiceOne || card === choiceTwo || card.matched}
          disabled={disabled}
        />
      ))}
    </GameWrapper>
  );
};

export default PokemonCardList;
