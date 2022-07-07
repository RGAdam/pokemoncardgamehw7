import { createContext, useState } from "react";

export const GameContext = createContext({});

const GameProvider = ({ children }) => {
  const [difficulty, setDifficulty] = useState("");
  const [clickedOnCard, setClickedOnCard] = useState(0);

  return (
    <GameContext.Provider
      value={{
        difficulty,
        setDifficulty,
        clickedOnCard,
        setClickedOnCard,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
