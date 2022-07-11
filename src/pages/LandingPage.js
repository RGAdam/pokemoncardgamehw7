import { Link } from "react-router-dom";
import {
  CenteredWrapper,
  FlexWrapper,
  PokemonTitle,
} from "./LandingPage.styled";

import Button from "../components/Button/Button";
import DifficultySelector from "../components/DifficultySelector/DifficultySelector";

const LandingPage = () => {
  return (
    <CenteredWrapper>
      <PokemonTitle src="/assets/pokemon-title.png" alt="" />
      <FlexWrapper>
        <DifficultySelector />
        <Link to="/game">
          <Button>Start new game</Button>
        </Link>
      </FlexWrapper>
    </CenteredWrapper>
  );
};

export default LandingPage;
