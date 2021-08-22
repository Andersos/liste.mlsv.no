import React from "react";
import styled from "styled-components";

const DayStyled = styled.div`
  width: 200px;
  height: 200px;
  border: 3px solid green;
`;

const Day = ({ name }) => (
  <DayStyled>
    <h2>{name}</h2>
  </DayStyled>
);

export default Day;
