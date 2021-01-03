import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600px;
`;

export const List = styled.ul`
  display: flex;
`;

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-right: 16px;
  }
`;

export const Link = styled.a`
  color: #c7c7c7;
`;

export const CopyRight = styled.span`
  color: #c7c7c7;
`;
