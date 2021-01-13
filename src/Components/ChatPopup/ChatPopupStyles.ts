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

export const Title = styled.h2``;

export const PopupBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
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

export const Input = styled.input`
  padding: 12px 12px;
  width: 300px;
  border-radius: 4px;
  border: none;
  background-color: #e6e6e6;
`;

export const PopUpBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.div`
  margin-top: 15px;
  width: 100px;
  padding: 10px 0;
  border-radius: 4px;
  border: none;
  background-color: #3498db;
  color: white;
  text-align: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #2980b9;
    transition: 0.2s linear;
  }
`;

export const UploadDiv = styled.div`
  width: 80%;
  margin: 0 auto;
  border: 3px solid #eee;
  border-radius: 4px;
  height: 100px;
  text-align: center;
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 10rem;
`;

export const SmallRow = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RowUsername = styled.span`
  padding-left: 30px;
  font-weight: 600;
  color: black;
`;

export const RowMessage = styled.span`
  padding-left: 35px;
  color: #ccc;
`;

export const ExtendedLink = styled(Link)`
  text-decoration: none;
`;
