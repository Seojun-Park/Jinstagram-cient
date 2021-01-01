import styled from "styled-components";

export const Container = styled.div`
  @media screen and (min-width: 200px) and (max-width: 640px) {
    padding: 0 20px;
    display: flex;
    flex-direction: center;
    align-items: center;
  }

  @media screen and (max-width: 640px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 50px;
  }
`;

export const WideScreen = styled.div`
  @media screen and (min-width: 200px) and (max-width: 640px) {
    display: none;
  }
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 50px;
  border: 1px solid black;
`;

export const NarrowScreen = styled.div`
  @media screen and (min-width: 639px) {
    display: none;
  }
  display: flex;
  flex-direction: center;
  align-items: center;
  border: 1px solid black;
  margin: 0 auto;
`;
