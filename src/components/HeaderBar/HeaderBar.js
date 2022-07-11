import Button from "../Button/Button";
import DifficultySelector from "../DifficultySelector/DifficultySelector";
import { CenteredWrapper } from "./HeaderBar.styled";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { GameContext } from "../../context/GameContext";

const HeaderBar = () => {
  const { setSeed } = useContext(GameContext);

  const handleNewGame = () => {
    setSeed(Math.random());
  };

  return (
    <CenteredWrapper>
      <Link to="/">
        <Button>Home</Button>
      </Link>

      <DifficultySelector />
      <Button onClick={handleNewGame}>Start New Game</Button>
    </CenteredWrapper>
  );
};

export default HeaderBar;
