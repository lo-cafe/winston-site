"use client";
import styled, { css } from "styled-components";
import { darken } from "polished";
import Link from "next/link";

const buttonStyles = css`
  display: flex;
  padding: 13px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 20px;
  font-size: 20px;
  font-weight: 500;
  background: #0b84ff;
  transition: background 0.2s ease-in-out;
  &:hover {
    background: ${darken(0.1, "#0b84ff")};
  }
`;

export const ButtonLink = styled(Link)`
  ${buttonStyles}
`;

export const ButtonA = styled.a`
  ${buttonStyles}
`;
