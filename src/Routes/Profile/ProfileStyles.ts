import styled from "styled-components";

interface IProps {
  bg?: string;
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
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 180px;
`;

export const Intro = styled.p`
  margin-left: 45px;
`;

export const LogoutButton = styled.div`
  width: 180px;
  padding: 8px 0;
  border-radius: 4px;
  border: none;
  background-color: #e74c3c;
  color: white;
  cursor: pointer;
  text-align: center;
  font-size: 14px;
  &:hover {
    background-color: #c0392b;
  }
`;

export const Profile = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 10rem;
`;

export const Button = styled.button`
  background-color: white;
  border: none;
  cursor: pointer;
`;

export const Username = styled.span`
  font-weight: 600;
  font-size: 24px;
  margin-right: 15px;
`;

export const FollowingButton = styled.button`
  width: 180px;
  padding: 10px 0;
  border-radius: 4px;
  border: none;
  background-color: #3498db;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #2980b9;
  }
`;

export const UserPosts = styled.div`
  width: 80%;
  border-top: 3px solid #333;
  padding-top: 50px;
  display: grid;
  grid-template-columns: repeat(3, 250px);
  grid-template-rows: 250px;
  grid-auto-rows: 250px;
  justify-content: center;
  margin-bottom: 50px;
`;

export const PostOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s linear;
  svg {
    fill: white;
  }
`;

export const PostContainer = styled.div<IProps>`
  background-image: url(${(props) => props.bg});
  background-size: cover;
  margin: 3px;
  height: 250px;
  width: 250px;
  cursor: pointer;
  &:hover {
    ${PostOverlay} {
      opacity: 1;
    }
  }
`;
