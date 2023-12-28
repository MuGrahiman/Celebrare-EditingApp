import React, { useEffect, useState } from "react";
import styled from "styled-components";
const StyledTxt = styled.p`
  font-size: ${({ size, edit, eSize }) => (edit && eSize) || size};
  font-family: ${({ family, edit, eFamily }) => (edit && eFamily) || family};
  color: ${({ color, edit, eColor }) => (edit && eColor) || color};
`;
const Card = styled.div`
  width: 100%;
  position: relative;
  /* padding: 20px; */
  display: grid;
  grid-template-columns: ${({ edit }) => (edit ? "80% 20%" : "100%")};
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #ffff;
  margin: 20px auto;
  cursor: pointer;
`;
const CardBody = styled.div`
  width: 100%;
  padding: 20px;
  /* border: 1px solid #ddd; */
  /* border-radius: 8px; */
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
  /* background-color: #ffff; */
  /* margin: 20px auto; */
  /* cursor: pointer; */
`;
const BtnsBody = styled.span`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: #9c9999;
  margin: 0;
  padding: 0;
`;
const Btn = styled.div`
  width: 100%;
  height: 50%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: ${({ BR }) => BR};
  background-color: ${({ BG }) => BG};
  margin: 0;
  padding: 0;
`;
const IconBox = styled.span`
  position: absolute;
  bottom: -20px;
  display: flex;
  gap: 1rem;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #888686;
`;
const SelectedCard = styled(Card)`
  border: 1px solid #52abdf;
  box-shadow: 0 4px 8px rgba(62, 149, 248, 0.952);
`;
const Canvas = ({ TXTS, FMLY, CLR, FNT, onDelete, onSave }) => {
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
    console.log(key);
    console.log(selectedKey === key);
    selectedKey === null && setSelectedKey(key);
  };
  const handleEdit = (key) => {
    setFamily(FMLY);
    setColor(CLR);
    setSize(FNT);
  };

  return TXTS[0] ? (
    <>
      {TXTS.map((data, i) => {
        const { txt, styl } = data;
        console.log(txt, styl);
        return selectedKey !== null && selectedKey === i ? (
          <SelectedCard
            key={i}
            edit={selectedKey === i}
            onClick={() => handleSelect(i)}
          >
            <CardBody>
              <StyledTxt
                edit={selectedKey === i}
                eSize={size + "rem"}
                eColor={color}
                eFamily={family}
              >
                {txt}
              </StyledTxt>
            </CardBody>
            <BtnsBody>
              <Btn
                BG="red"
                onClick={() => {
                  onDelete(i);
                  setSelectedKey(null);
                }}
              >
                Delete
              </Btn>
              <Btn
                BG="green"
                onClick={() => {
                  onSave(i);
                  setSelectedKey(null);
                }}
              >
                Save
              </Btn>
            </BtnsBody>
          </SelectedCard>
        ) : (
          <Card
            key={i}
            edit={selectedKey === i}
            onClick={() => handleSelect(i)}
          >
            <StyledTxt
              size={styl.size + "rem"}
              color={styl.color}
              family={styl.family}
            >
              {txt}
            </StyledTxt>
          </Card>
        );
      })}
    </>
  ) : (
    <StyledTxt>Enter your Text</StyledTxt>
  );
};

export default Canvas;
