import styled from "styled-components";

export const Wrapper = styled.div``;

export const Container = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
  }

  @media (min-width: 769px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    border: 1px solid red;
  }
`;
