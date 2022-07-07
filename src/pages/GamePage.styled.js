import styled from "styled-components";

import backgroundImage from "../assets/background-game.png";

export const CenteredWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-image: url(${backgroundImage});
  background-size: 100% 100%;
`;

export const GameStats = styled.div`
  max-width: 900px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  margin: 10px 0;
`;

export const Text = styled.p`
  font-size: 25px;
  color: rgb(255, 220, 0);
`;
