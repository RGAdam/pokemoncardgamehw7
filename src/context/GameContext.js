import { createContext, useState } from "react";

export const GameContext = createContext({});

const GameProvider = ({ children }) => {
  const [difficulty, setDifficulty] = useState("");

  const chooseDifficultyHandler = (chosenDifficulty) => {
    setDifficulty(chosenDifficulty);
  };

  return (
    <GameContext.Provider value={{ chooseDifficultyHandler, difficulty }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
