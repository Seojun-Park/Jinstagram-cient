import styled from "styled-components";
import TextareaAutosize from "react-autosize-textarea";

interface IStyleProps {
  url: string;
  showing: boolean;
}

export const Container = styled.div`
  width: 100%;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  background-color: white;
  max-width: 600px;
  user-select: none;
  margin-bottom: 25px;
  a {
    color: inherit;
  }
`;

export const Header = styled.header`
  padding: 15px;
  display: flex;
  align-items: center;
`;

export const UserCol = styled.div`
  margin-left: 10px;
`;

export const Location = styled.span`
  display: block;
  margin-top: 5px;
  font-size: 12px;
`;

export const Images = styled.div`
  position: relative;
  padding-bottom: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex-shrink: 0;
`;

export const Image = styled.div<IStyleProps>`
  max-width: 100%;
  width: 100%;
  height: 600px;
  position: absolute;
  top: 0;
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  opacity: ${(props) => (props.showing ? 1 : 0)};
  transition: opacity 0.5s linear;
`;

export const Button = styled.span`
  cursor: pointer;
`;

export const Meta = styled.div`
  padding: 15px;
`;

export const Buttons = styled.div`
  ${Button} {
    &:first-child {
      margin-right: 10px;
    }
  }
  margin-bottom: 10px;
`;

export const Timestamp = styled.span`
  font-weight: 400;
  text-transform: uppercase;
  opacity: 0.5;
  display: block;
  font-size: 12px;
  margin: 10px 0px;
  padding-bottom: 10px;
  border-bottom: 1px solid #003569;
`;

export const Textarea = styled(TextareaAutosize)`
  border: none;
  width: 100%;
  resize: none;
  font-size: 14px;
  &:focus {
    outline: none;
  }
`;

export const Comments = styled.ul`
  margin-top: 10px;
`;

export const Comment = styled.li`
  margin-bottom: 7px;
  span {
    margin-right: 5px;
  }
`;

export const Caption = styled.div`
  margin: 10px 0px;
`;
