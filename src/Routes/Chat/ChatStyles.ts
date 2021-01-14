import styled from "styled-components";
import Form from "../../Components/Form";

export const LoadingWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div``;

export const Container = styled.div`
  width: 70%;
  min-width: 650px;
  min-height: 600px;
  margin: 0 auto;
  border: 1px solid #ccc;
`;
export const Head = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  padding: 10px 25px;
  border-bottom: 3px solid #ccc;
  margin: 0 auto;
`;

export const MessageBox = styled.div`
  min-height: 400px;
  max-height: 500px;
  padding: 20px;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const InputBox = styled.div`
  border-top: 2px solid #ccc;
  padding: 10px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MessageInput = styled.input`
  width: 100%;
  margin: 0 auto;
  padding: 8px 10px;
  border: none;
  background-color: #eee;
  border-radius: 4px;
`;

export const SendButton = styled.button`
  padding: 8px 12px;
  border: none;
  background-color: #3498db;
  border-radius: 4px;
  color: white;
  &:hover {
    transition: 0.2s linear;
    background-color: #2980b9;
  }
`;

export const ExtendedForm = styled(Form)``;
