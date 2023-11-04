"use client";
import Link from "next/link";
import cs from "classnames";
import { usePathname } from "next/navigation";

import s from "./styles.module.scss";

const StyledLink = ({ active, children, ...rest }) => (
  <Link
    className={s.styledLink}
    style={{ background: active ? "rgba(255,255,255,0.1)" : "" }}
    {...rest}
  >
    {children}
  </Link>
);

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className={cs("container", s.containerHelper)}>
      <nav className={s.styledNavbar}>
        <StyledLink href="/" active={pathname === "/"}>
          􀎟 Home
        </StyledLink>
        <StyledLink href="/privacy" active={pathname === "/privacy"}>
          􀉼 Privacy Policy
        </StyledLink>
        <StyledLink href="/github" active={pathname === "/github"}>
          􂁿 Github
        </StyledLink>
      </nav>
    </div>
  );
};

export default Navbar;
