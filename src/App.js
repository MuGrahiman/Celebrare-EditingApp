import React from "react";
import Page from "./Components/Page";
import styled from "styled-components";
const StyledApp = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const App = () => {
  return (
    <StyledApp>
      <Page />
    </StyledApp>
  );
};

export default App;
