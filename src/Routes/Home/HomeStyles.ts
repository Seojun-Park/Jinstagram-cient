import styled from "styled-components";
import TextareaAutosize from "react-autosize-textarea";

export const Wrapper = styled.div``;

export const Container = styled.div`
  margin: 50px auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 600px;
`;

export const Post = styled.div`
  width: 100%;
  border: 1px solid #e6e6e6;
  padding: 15px;
  height: 120px;
  border-radius: 4px;
  max-width: 470px;
`;

export const Textarea = styled(TextareaAutosize)`
  border: none;
  border-bottom: 1px solid #c7c7c7;
  height: 70px;
  width: 100%;
  resize: none;
  font-size: 14px;
  &:focus {
    outline: none;
  }
`;

export const UploadDiv = styled.div`
  background-color: #fff;
  margin: 15px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 15px;
`;

export const Button = styled.button`

`
