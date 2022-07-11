import { CenteredWrapper, GameStats, Text, Wrapper } from "./GamePage.styled";
import { useContext } from "react";
import { GameContext } from "../context/GameContext";

import Button from "../components/Button/Button";
import HeaderBar from "../components/HeaderBar/HeaderBar";
import PokemonCardList from "../components/PokemonCardList/PokemonCardList";

const GamePage = () => {
  const { turns, highScore, setSeed } = useContext(GameContext);

  const handleRestart = () => {
    setSeed(Math.random());
  };

  return (
    <Wrapper>
      <HeaderBar />
      <CenteredWrapper>
        <GameStats>
          <Text>Current Tries: {turns}</Text>
          <Text>Best: {highScore}</Text>
          <Button onClick={handleRestart}>Restart</Button>
        </GameStats>

        <PokemonCardList />
      </CenteredWrapper>
    </Wrapper>
  );
};

export default GamePage;
