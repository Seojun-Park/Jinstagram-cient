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

export const SearchResult = styled.div`
  position: absolute;
  min-height: 10vh;
  width: 320px;
  background-color: white;
  border-radius: 4px;
  text-align: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  top: 8%;
`;

export const SearchLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const SearchRow = styled.div`
  height: 80px;
  width: 300px;
  padding-left: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #eee;
  }
`;

export const SearchInfo = styled.div`
  padding-top: 25px;
  font-weight: 600px;
`;

export const SearchUsername = styled.span`
  padding-left: 30px;
  font-weight: 600;
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
