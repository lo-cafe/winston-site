"use client";
import Link from "next/link";
import cs from "classnames";
import { PiFanFill } from "react-icons/pi";
import { BsDiscord } from "react-icons/bs";
import { BiLogoPatreon } from "react-icons/bi";
import { SiKofi } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { usePathname } from "next/navigation";

import s from "./styles.module.scss";

const StyledLink = ({ active, children, ...rest }) => (
  <Link className={cs({ [s.styledLink]: true, [s.active]: active })} {...rest}>
    <span className="icon">{children}</span>
  </Link>
);

const StyledAnchor = ({ active, children, ...rest }) => (
  <a className={cs({ [s.styledLink]: true, [s.active]: active })} {...rest}>
    <span className="icon">{children}</span>
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
        <StyledAnchor href="https://discord.gg/lo-cafe" target="_blank">
          <PiFanFill size={20} /> Testflight
        </StyledAnchor>
        <StyledAnchor href="https://discord.gg/lo-cafe" target="_blank">
          <BsDiscord size={20} /> Discord
        </StyledAnchor>
        <StyledAnchor href="https://github.com/Kinark/winston" target="_blank">
          <AiFillGithub size={20} /> Github
        </StyledAnchor>
        <StyledAnchor href="https://ko-fi.com/locafe" target="_blank">
          <SiKofi size={20} /> Tip
        </StyledAnchor>
        <StyledAnchor
          href="https://patreon.com/user?u=93745105 "
          target="_blank"
        >
          <BiLogoPatreon size={20} /> Patreon
        </StyledAnchor>
      </nav>
    </div>
  );
};

export default Navbar;
