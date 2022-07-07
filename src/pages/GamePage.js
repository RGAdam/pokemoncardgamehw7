import { CenteredWrapper, GameStats, Text } from "./GamePage.styled";

import Button from "../components/Button/Button";
import HeaderBar from "../components/HeaderBar/HeaderBar";
import PokemonCardList from "../components/PokemonCardList/PokemonCardList";

const GamePage = () => {
  return (
    <div>
      <HeaderBar />
      <CenteredWrapper>
        <GameStats>
          <Text>Current Tries: 1</Text>
          <Text>Best: 9</Text>
          <Button>Restart</Button>
        </GameStats>

        <PokemonCardList />
      </CenteredWrapper>
    </div>
  );
};

export default GamePage;
