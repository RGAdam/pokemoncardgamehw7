import { Card, Wrapper } from "./PokemonCard.styled";

const PokemonCard = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <Wrapper>
      {!flipped ? (
        <Card src="/assets/card-back.png" alt="" onClick={handleClick} />
      ) : (
        <Card src={card.src} alt="" />
      )}
    </Wrapper>
  );
};

export default PokemonCard;
