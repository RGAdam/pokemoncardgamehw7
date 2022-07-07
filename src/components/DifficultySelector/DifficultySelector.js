import { useContext, useEffect, useState } from "react";
import { StyledSelector } from "./DifficultySelector.styled";
import { GameContext } from "../../context/GameContext";

const DifficultySelector = () => {
  const [option, setOption] = useState("");
  const { setDifficulty } = useContext(GameContext);

  useEffect(() => {
    setDifficulty(option);
  }, [option]);

  const selectorHandler = (event) => {
    setOption(event.target.value);
  };

  return (
    <StyledSelector defaultValue="default" onChange={selectorHandler}>
      <option hidden value="default">
        Deck Size
      </option>
      <option value="easy">Easy</option>
      <option value="medium">Medium</option>
      <option value="hard">Hard</option>
    </StyledSelector>
  );
};

export default DifficultySelector;
