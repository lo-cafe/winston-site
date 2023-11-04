"use client";
import Link from "next/link";
import cs from "classnames";
import { usePathname } from "next/navigation";

import s from "./styles.module.scss";

const StyledLink = ({ active, children, ...rest }) => (
  <Link
  className={cs({ [s.styledLink]: true, [s.active]: active })}
    {...rest}
  >
    {children}
  </Link>
);

const StyledAnchor = ({ active, children, ...rest }) => (
  <a
    className={cs({ [s.styledLink]: true, [s.active]: active })}
    {...rest}
  >
    {children}
  </a>
);

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className={cs("container", s.containerHelper)}>
      <nav className={s.styledNavbar}>
        {/* <StyledLink href="/" active={pathname === "/"}>
          􀎟 Home
        </StyledLink> */}
        {/* <StyledLink href="/privacy" active={pathname === "/privacy"}>
          􀉼 Privacy Policy
        </StyledLink> */}
        <StyledAnchor
          href="https://discord.gg/lo-cafe"
          target="_blank"
        >
          􁌙 Testflight
        </StyledAnchor>
        <StyledAnchor
          href="https://discord.gg/lo-cafe"
          target="_blank"
        >
          􀝋 Discord
        </StyledAnchor>
        <StyledAnchor
          href="https://github.com/Kinark/winston"
          target="_blank"
        >
          􂁿 Github
        </StyledAnchor>
        <StyledAnchor href="https://ko-fi.com/locafe" target="_blank">
          􀊵 Tip
        </StyledAnchor>
        <StyledAnchor
          href="https://patreon.com/user?u=93745105 "
          target="_blank"
        >
          􀧢 Patreon
        </StyledAnchor>
      </nav>
    </div>
  );
};

export default Navbar;
