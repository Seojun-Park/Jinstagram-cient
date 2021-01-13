import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Col = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 25px;
  max-width: 400px;
`;

export const Search = styled.input`
  padding: 12px 12px;
  width: 300px;
  border-radius: 4px;
  border: none;
  background-color: #e6e6e6;
  text-align: center;
`;

export const ExtendedLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 10rem;
`;
