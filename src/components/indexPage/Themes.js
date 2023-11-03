"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import styled from "styled-components";

import IconKin from "~/components/IconKin";

import Img1 from "~/assets/themes-screenshots/1.png";
import Img2 from "~/assets/themes-screenshots/2.png";
import Img3 from "~/assets/themes-screenshots/3.png";
import Img4 from "~/assets/themes-screenshots/4.png";
import Img5 from "~/assets/themes-screenshots/5.png";
import Img6 from "~/assets/themes-screenshots/6.png";
import Img7 from "~/assets/themes-screenshots/7.png";
import Img8 from "~/assets/themes-screenshots/8.png";

const Themes = () => (
  <div>
    <Center>
      <IconKin $color="#C85B5B">􀎒</IconKin>
      <h3>Ridiculous theming system</h3>
      <SilentP>
        We wanted to make winston adapt you want it to be, so we made possible
        to edit virtually everything in the app, from the subs list to the
        settings screen, you can change everything.
      </SilentP>
    </Center>
    <Marquee gradient gradientColor="#000" speed={15}>
      <NiceImg src={Img1} width={200} alt="" />
      <NiceImg src={Img2} width={200} alt="" />
      <NiceImg src={Img3} width={200} alt="" />
      <NiceImg src={Img4} width={200} alt="" />
      <NiceImg src={Img5} width={200} alt="" />
      <NiceImg src={Img6} width={200} alt="" />
      <NiceImg src={Img7} width={200} alt="" />
      <NiceImg src={Img8} width={200} alt="" />
    </Marquee>
  </div>
);

export default Themes;

const NiceImg = styled(Image)`
  border-radius: 24px;
  margin: 0 16px;
`;

const SilentP = styled.p`
  margin: 0;
  font-size: 20px;
  opacity: 0.75;
`;

const Center = styled.p`
  text-align: center;
  margin: 48px 0;
`;
