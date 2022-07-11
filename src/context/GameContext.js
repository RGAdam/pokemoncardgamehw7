import { useEffect } from "react";
import { createContext, useState } from "react";

export const GameContext = createContext({});

const GameProvider = ({ children }) => {
  const [difficulty, setDifficulty] = useState("");
  const [turns, setTurns] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [seed, setSeed] = useState(0);

  useEffect(() => {
    setHighScore(localStorage.getItem("highscore"));
  }, []);

  const checkIfHighScore = () => {
    if (turns < highScore) {
      setHighScore(turns);
      localStorage.setItem("highscore", turns);
    }
  };

  return (
    <GameContext.Provider
      value={{
        difficulty,
        setDifficulty,
        turns,
        setTurns,
        highScore,
        seed,
        setSeed,
        checkIfHighScore,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
