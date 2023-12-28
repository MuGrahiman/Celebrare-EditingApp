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
    const [TXT, setTXT] = useState([])
   const handleText = (data) => setTXT(prev=>[...prev,data])
  const [txt, setTxt] = useState([]);
  return (
    <RowLayout>
      <FirstColumn>
        <Canvas TXTS={TXT} />
      </FirstColumn>
      <SecondColumn>
        <Edit onSubmitTxt={handleText}/>
      </SecondColumn>
    </RowLayout>
  );
};

export default Page;
