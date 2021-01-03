import styled from "styled-components";

const Box = styled.div`
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  background-color: white;
`;

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 935px;
  margin: 0 auto;
`;

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  width: 350px;
  padding-top: 25px;
  padding-bottom: 25px;
  margin-bottom: 40px;
`;

export const Head = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
`;

export const Title = styled.span`
  font-size: 24px;
  color: #999;
  font-weight: 600;
`;

export const Mid = styled.div`
  padding: 12px;

  margin-bottom: 25px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const Input = styled.input`
  padding: 8px 12px;
  width: 200px;
  border-radius: 4px;
  border: none;
  background-color: #c7c7c7;
  text-align: center;
`;

export const Button = styled.button`
  margin-top: 25px;
  padding: 8px 12px;
  border-radius: 4px;
  border: none;
  background-color: #3498db;
  color: white;
`;

export const Bot = styled.div`
  border-top: 1px solid #c7c7c7;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 35px;
`;

export const Link = styled.span`
  cursor: pointer;
  color: #3498db;
`;
