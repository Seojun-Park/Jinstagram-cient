import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 50%;
  height: 60%;
  z-index: 5;
  padding: 50px 20px;
  padding-top: 10px;
  border-radius: 5px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

export const Headbar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const ExitButton = styled.button`
  border: none;
  padding: 4px 6px;
  height: 22px;
  width: 22px;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
`;

export const TitleDiv = styled.div`
  text-align: center;
`;

export const Title = styled.h2`
  text-transform: uppercase;
`;

export const PopupBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  width: 100%;
  padding: 8px 0;
  padding-left: 15px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 5px;
  &:hover {
    background-color: #eee;
    transition: 0.2s linear;
  }
`;

export const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 10rem;
`;

export const RowUsername = styled.span`
  padding-left: 30px;
  font-weight: 600;
  color: black;
`;

export const ExtendedLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;
