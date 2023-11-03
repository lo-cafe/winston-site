"use client";
import Image from "next/image";
import styled from "styled-components";

import L from "~/components/L";
import { ButtonA } from "~/components/Button";
import Striked from "~/components/Striked";

import sideWinston from "~/assets/side-winston.png";

const Hero = () => (
  <Wrapper>
    <TextColumn>
      <Image src={sideWinston} width={160} height={160} alt="Winston" />
      <h1>Winston</h1>
      <h2>
        This changes <Striked>no</Striked>
        <L $weight={600}>every</L>thing.
      </h2>

      <ButtonsWrapper>
        <ButtonA href="">􁌙 Testflight</ButtonA>
        <ButtonA href="">􂁿 Github Repo</ButtonA>
      </ButtonsWrapper>

      <Description>
        Winston is an in-development open source design-focused iOS{" "}
        <Striked>client</Striked> developer tool for developers to test their
        own Reddit&apos;s API keys.
      </Description>
    </TextColumn>
    <HeroVideoWrapper>
      <video height="100%" autoPlay muted loop>
        <source src="/videos/generalUseMockup.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </HeroVideoWrapper>
  </Wrapper>
);

export default Hero;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin: 16px 0;
`;

const TextColumn = styled.div`
  width: 50%;
`;

const Description = styled.p`
  margin: 0;
  font-size: 24px;
`;

const HeroVideoWrapper = styled.div`
  height: 95%;
  width: 275px;
  display: flex;
  justify-content: center;
  z-index: -1;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 72px;
  height: 100vh;
  width: 100%;
`;
