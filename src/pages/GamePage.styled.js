import styled from "styled-components";

export const CenteredWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-image: url(/assets/background-game.png);
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
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

export const Wrapper = styled.div`
  // height: 100%;
  // width: 100%;
`;
