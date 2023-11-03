"use client";
import styled from "styled-components";

const L = styled.span`
  font-weight: ${({ $weight }) => ($weight ? $weight : "400")};
  font-size: ${({ $size }) => ($size ? $size : "unset")};
  color: ${({ $color }) => ($color ? $color : "inherit")};
  text-decoration: ${({ $decoration }) => ($decoration ? $decoration : "none")};
`;

export default L;
