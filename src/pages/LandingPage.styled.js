import styled from "styled-components";

export const CenteredWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(/assets/background-start.png);
  background-size: cover;
`;

export const FlexWrapper = styled.div`
  display: flex;
  gap: 25px;
`;

export const PokemonTitle = styled.img`
  width: 280px;
  margin-bottom: 25px;
`;
