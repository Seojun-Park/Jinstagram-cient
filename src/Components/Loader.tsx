import React from "react";
import styled, { keyframes } from "styled-components";
import { Loading } from "./Icon";

const rotate = keyframes`
    from{
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  font-size: 1.2rem;
`;

export const Loader = () => {
    return (
        <Container>
            <Rotate>
                <Loading />
            </Rotate>
        </Container>
    );
};

export default Loader