import { Card, Wrapper } from "./PokemonCard.styled";

import CardBackSrc from "../../assets/card-back.png";

const PokemonCard = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <Wrapper>
      {!flipped ? (
        <Card src={CardBackSrc} alt="" onClick={handleClick} />
      ) : (
        <Card src={card.src} alt="" />
      )}
    </Wrapper>
  );
};

export default PokemonCard;
