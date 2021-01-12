import styled from "styled-components";

interface IButtonProps {
  color?: string;
}

export const Wrapper = styled.div``;

export const Container = styled.div`
  width: 100%;
  min-width: 500px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  min-height: 50vh;
  padding-top: 100px;

  border: 1px solid black;
`;

export const UserDetail = styled.div`
  width: 60%;
  min-width: 450px;
  display: flex;
  flex-direction: column;
  padding-left: 25px;
  padding-right: 25px;
  min-height: 200px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const UserDetailCol = styled.div`
  width: 50%;
`;

export const UserDetailRow = styled.div`
  margin-bottom: 8px;
`;

export const Intro = styled.p`
  margin-left: 45px;
`;

export const Profile = styled.img`
  width: 80px;
  object-fit: cover;
  border-radius: 10rem;
`;

export const Username = styled.span`
  font-weight: 600;
  font-size: 24px;
`;

export const FollowingButton = styled.button<IButtonProps>`
  width: 150px;
  padding: 10px 0;
  border-radius: 4px;
  border: none;
  background-color: #3498db;
  color: white;
  cursor: pointer;
`;

export const UserPosts = styled.div`
  width: 90%;
  border: 1px solid red;
`;
