import React from "react";

import styled from "styled-components";

const appStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
  height: "100vh"
};

const Text = styled.div`
  color: red;
  font-size: 28px;
  border: ${props => (props.isActive ? "1px solid black" : "3px dotted red")};
`;

const CardDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 250px;
  background-color: ${({ isActive }) => (isActive ? "red" : "blue")};
`;

function App() {
  return (
    <div style={appStyle} className="App">
      <CardDiv blue>
        <Text isActive={false}>I am a component</Text>
      </CardDiv>
    </div>
  );
}

export default App;
