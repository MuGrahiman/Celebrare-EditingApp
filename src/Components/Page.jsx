import React, { useState } from "react";
import styled from "styled-components";
import Canvas from "./Canvas";
import Edit from "./Edit";
const RowLayout = styled.div`
  display: flex;
  width: 60%;
  /* margin: 10px 0; */
  background-color: green;
  flex-direction: row;
`;
const FirstColumn = styled.div`
  flex: 2;
  padding: 10px;
  background-color: #e0e0e0;
`;

// Create a styled component for the second column
const SecondColumn = styled.div`
  flex: 1;
  padding: 10px;
  background-color: #f0f0f0; /* Add your preferred background color */
`;
const Page = () => {
  const [TXT, setTXT] = useState([]);
  const handleText = (txt) =>
    setTXT((prev) => [
      ...prev,
      { txt, styl: { family: "", size: 1, color: "" } },
    ]);
  const [family, setFamily] = useState("");
  const [size, setSize] = useState(1);
  const [color, setColor] = useState("");
  const handleDelete = (id) => {
    setTXT(TXT.filter((_, i) => id !== i));
  };
  const handleSave = (id) => {
    console.log(id)
    const updatedDta = TXT.filter((data, i) =>
    id === i ? (data.styl = { family, size, color }) : data
  )
  console.log(updatedDta)

    setTXT(
      updatedDta
    );
  };
  return (
    <RowLayout>
      <FirstColumn>
        <Canvas
          CLR={color}
          FNT={size}
          FMLY={family}
          TXTS={TXT}
          onSave={handleSave}
          onDelete={handleDelete}
        />
      </FirstColumn>
      <SecondColumn>
        <Edit
          onSubmitTxt={handleText}
          setFont={(data) => setSize(data)}
          setFamily={(data) => setFamily(data)}
          setColor={(data) => setColor(data)}
        />
      </SecondColumn>
    </RowLayout>
  );
};

export default Page;
