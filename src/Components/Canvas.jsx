import React, { useEffect, useState } from "react";
import styled from "styled-components";
const StyledTxt = styled.p`
  font-size: ${({ size, edit }) => (edit && size) || "medium"};
  font-family: ${({ family, edit }) => (edit && family) || "serif"};
  color: ${({ color, edit }) => (edit && color) || "black"};
`;
const Card = styled.div`
  width: 100%;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #ffff;
  margin: 20px auto;
  cursor: pointer;
`;
const SelectedCard = styled(Card)`
  border: 1px solid #52abdf;
  box-shadow: 0 4px 8px rgba(62, 149, 248, 0.952);
`;
const Canvas = ({ TXTS, FMLY, CLR, FNT }) => {
  const [selectedKey, setSelectedKey] = useState(null);
  const [family, setFamily] = useState("");
  const [size, setSize] = useState(null);
  const [color, setColor] = useState("");
  useEffect(() => {
    setColor(CLR);
    setFamily(FMLY);
    setSize(FNT);
  }, []);
  useEffect(() => {
    handleEdit(selectedKey);
  }, [CLR, FMLY, FNT]);
  const handleSelect = (key) => {
    !selectedKey && selectedKey === key
      ? setSelectedKey(null)
      : setSelectedKey(key);
  };
  const handleEdit = (key) => {
    if (selectedKey === key) {
      setFamily(FMLY);
      setColor(CLR);
      setSize(FNT);
    }
  };
  return TXTS[0] ? (
    <>
      {TXTS.map((txt, i) =>
        selectedKey && selectedKey === i ? (
          <SelectedCard key={i} onClick={() => handleSelect(i)}>
            <StyledTxt
              edit={selectedKey === i}
              size={size + "rem"}
              color={color}
              family={family}
            >
              {txt}
            </StyledTxt>
          </SelectedCard>
        ) : (
          <Card key={i} onClick={() => handleSelect(i)}>
            <StyledTxt size={size + "rem"} color={color} family={family}>
              {txt}
            </StyledTxt>
          </Card>
        )
      )}
    </>
  ) : (
    <StyledTxt>Enter your Text</StyledTxt>
  );
};

export default Canvas;
