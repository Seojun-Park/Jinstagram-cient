import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Col = styled.div`
  border: 1px solid red;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 25px;
  max-width: 400px;
`;

export const Search = styled.input`
  padding: 12px 12px;
  width: 200px;
  border-radius: 4px;
  border: none;
  background-color: #e6e6e6;
  text-align: center;
`;

export const MenuButton = styled.button``;

export const Menu = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
  display: none;
`;

export const ItemButton = styled.button``;
