"use client";
import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { usePathname } from "next/navigation";

const StyledNavbar = styled.nav`
  /* height: 60px; */
  background-color: rgba(68, 68, 68, 0.5);
  color: white;
  display: inline-flex;
  gap: 4px;
  align-items: center;
  justify-content: space-between;
  padding: 4px;
  box-sizing: border-box;
  border-radius: 20px;
  backdrop-filter: blur(30px) saturate(2.5);
  border: solid 1px rgba(255, 255, 255, 0.075);
`;

const StyledLink = styled.div`
  color: white;
  text-decoration: none;
  padding: 12px 12px;
  font-weight: 500;
  background: ${({ $active }) => ($active ? "rgba(255,255,255,0.1)" : "")};
  border-radius: 16px;
`;

const Container = styled.div`
  position: fixed;
  top: 20px;
  left: 0;
  right: 0;
  padding-left: 20px;
  width: 95%;
  margin: auto;
  max-width: 1200px;
  z-index: 100;
`;

const Navbar = () => {
  const pathname = usePathname();
  return (
    <Container>
      <StyledNavbar>
        <Link href="/">
          <StyledLink $active={pathname === "/"}>􀎟 Home</StyledLink>
        </Link>
        <Link href="/privacy">
          <StyledLink $active={pathname === "/privacy"}>
            􀉼 Privacy Policy
          </StyledLink>
        </Link>
        <Link href="/github">
          <StyledLink $active={pathname === "/github"}>􂁿 Github</StyledLink>
        </Link>
      </StyledNavbar>
    </Container>
  );
};

export default Navbar;
