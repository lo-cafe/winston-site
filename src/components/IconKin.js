"use client";
import styled from "styled-components";

const IconKin = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 24px;
  background-color: ${({ $color }) => ($color ? $color : "inherit")};
  justify-content: center;
  align-items: center;
  font-size: 32px;
  display: inline-flex;
`;

export default IconKin;
