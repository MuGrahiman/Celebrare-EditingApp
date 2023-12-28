import React from "react";
import styled from "styled-components";
const StyledTxt = styled.h1`
  font-size: ${(e) => e || "medium"};
  font-family: ${(e) => e || "serif"};
  color: ${(e) => e || "black"};
`;
const Card = styled.div`
  width: 100%;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #ffff;
  margin: 20px auto; /* Center the card horizontally */
`;
const Canvas = ({ TXTS }) => {
  return TXTS[0] ? (
    <>
      {TXTS.map((txt,i) => (
        <Card key={i}>
          <StyledTxt>{txt}</StyledTxt>
        </Card>
      ))}
    </>
  ) : (
    <StyledTxt>Enter your Text</StyledTxt>
  );
};

export default Canvas;
