// import React, { useState } from "react";
// import styled from "styled-components";
// const StyledEdit = styled.div`
//   width: 100%;
//   background-color: #a09b9b;
//   /* padding: 1rem; */
// `;

// const Edit = ({ onSubmitTxt }) => {
//   const [txt, setTxt] = useState("");
//   const [family, setFamily] = useState("");
//   const [size, setSize] = useState(14);
//   const handleText = (e) => {
//     e.preventDefault();
//         if (!txt) return;
//     onSubmitTxt(txt);
//     setTxt('')
//   };

//   return (
//     <StyledEdit>
//       <form action="" onSubmit={handleText}>
//         <label htmlFor="">
//           <h3>add your text:</h3>
//           <input
//             type="text"
//             value={txt}
//             onChange={(e) => setTxt(e.target.value)}
//           />
//           <button>add the text</button>
//         </label>
//       </form>
//       <span>
//         <label htmlFor="">
//           font family:
//           <select
//             name=""
//             id=""
//             value={family}
//             onChange={(e) => setFamily(e.target.value)}
//           >
//             <option value="hi"></option>
//             <option value="hi">hi</option>
//             <option value="hi">simple</option>
//             <option value="hi">soon</option>
//           </select>
//         </label>
//         <label htmlFor="number">
//           Size:
//           <input
//             type="number"
//             value={size}
//             onChange={(e) => setSize(e.target.value)}
//           />
//         </label>
//         <label htmlFor="">
//           choose your color:
//           <select name="" id="">
//             <option value="hi"></option>
//             <option value="hi">red</option>
//             <option value="hi">green</option>
//             <option value="hi">blue</option>
//           </select>
//         </label>
//       </span>
//     </StyledEdit>
//   );
// };

// export default Edit;

import React, { useState } from "react";
import styled from "styled-components";

const StyledEdit = styled.div`
  width: 100%;
  background-color: #a09b9b;
  padding: 1rem;
`;

const StyledSelect = styled.select`
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  width: 100%;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
`;

const StyledLabel = styled.label`
  margin-bottom: 0.5rem;
  width: 100%;
`;

const StyledInput = styled.input`
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  width: 100%;
`;

const StyledButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 0.5rem;
  border: none;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: #45a049;
  }
`;

const StyledSpan = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* font-family: ; */
`;

const Edit = ({
  onSubmitTxt,
  setFont,
  font,
  setFamily,
  family,
  setColor,
  color,
}) => {
  const [txt, setTxt] = useState("");

  const handleText = (e) => {
    e.preventDefault();
    if (!txt) return;
    onSubmitTxt(txt);
    setTxt("");
  };

  return (
    <StyledEdit>
      <StyledForm onSubmit={handleText}>
        <h3>Add Your Text:</h3>
        <StyledInput
          type="text"
          value={txt}
          onChange={(e) => setTxt(e.target.value)}
          placeholder="Enter your text"
        />
        <StyledButton>Add the Text</StyledButton>
      </StyledForm>
      <StyledSpan>
        <h3>Edit Section:</h3>
        <StyledLabel>
          Font Family:
          <StyledSelect
            value={family}
            onChange={(e) => setFamily(e.target.value)}
          >
            <option value=""></option>
            <option value="monospace">monospace</option>
            <option value="cursive">cursive</option>
            <option value="fantasy">fantasy</option>
          </StyledSelect>
        </StyledLabel>
        <StyledLabel>
          Size:
          <StyledInput
            type="number"
            value={font}
            onChange={(e) => setFont(e.target.value)}
            placeholder="Enter font size"
          />
        </StyledLabel>
        <StyledLabel>
          Choose Your Color:
          <StyledSelect
            name=""
            id=""
            value={color}
            onChange={(e) => setColor(e.target.value)}
          >
            <option value=""></option>
            <option value="red">red</option>
            <option value="green">green</option>
            <option value="blue">blue</option>
          </StyledSelect>
        </StyledLabel>
      </StyledSpan>
    </StyledEdit>
  );
};

export default Edit;
