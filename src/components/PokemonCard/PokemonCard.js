import { Card } from "./PokemonCard.styled";
import { useState } from "react";

import CardBackSrc from "../../assets/card-back.png";
import Card1 from "../../assets/card-poke1.png";
import Card2 from "../../assets/card-poke2.png";
import Card3 from "../../assets/card-poke3.png";
import Card4 from "../../assets/card-poke4.png";
import Card5 from "../../assets/card-poke5.png";
import Card6 from "../../assets/card-poke6.png";
import Card7 from "../../assets/card-poke7.png";
import Card8 from "../../assets/card-poke8.png";
import Card9 from "../../assets/card-poke9.png";
import Card10 from "../../assets/card-poke10.png";

const PokemonCard = ({ id }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  let cardToUse;

  switch (id) {
    case 1:
      cardToUse = Card1;
      break;
    case 2:
      cardToUse = Card2;
      break;
    case 3:
      cardToUse = Card3;
      break;
    case 4:
      cardToUse = Card4;
      break;
    case 5:
      cardToUse = Card5;
      break;
    case 6:
      cardToUse = Card6;
      break;
    case 7:
      cardToUse = Card7;
      break;
    case 8:
      cardToUse = Card8;
      break;
    case 9:
      cardToUse = Card9;
      break;
    case 10:
      cardToUse = Card10;
      break;
    default:
      break;
  }

  const flipCardHandler = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div onClick={flipCardHandler}>
      {!isFlipped ? (
        <Card src={CardBackSrc} alt="" />
      ) : (
        <Card src={cardToUse} alt="" />
      )}
    </div>
  );
};

export default PokemonCard;
