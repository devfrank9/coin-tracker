import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const rotationAnimation = keyframes`
0%{
  transform:rotate(0deg);
  border-radius:0px;
}
50%{
  border-radius:100px;
}
100%{
  transform:rotate(360deg);
  border-radius:0px;
}
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${rotationAnimation} 1s linear infinite;
  span {
    font-size: 30px;
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <span>hey!</span>
      </Box>
    </Wrapper>
  );
}

export default App;
