import Button from "../Button/Button";
import DifficultySelector from "../DifficultySelector/DifficultySelector";
import { CenteredWrapper } from "./HeaderBar.styled";
import { Link } from "react-router-dom";

const HeaderBar = () => {
  return (
    <CenteredWrapper>
      <Link to="/">
        <Button>Home</Button>
      </Link>

      <DifficultySelector />
      <Button>Start New Game</Button>
    </CenteredWrapper>
  );
};

export default HeaderBar;
