import React from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

const FooterWrapperDiv = styled.div`
  width: 100%;
  background: #eeeeee;
  margin-top: 10rem;
  /* position: absolute;
  bottom: 0; */
`;
const FooterUlFlexDiv = styled.div`
  height: 20rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding-top: 3.1rem;
`;
const FooterHeadUl = styled.ul`
  margin-right: 11.8rem;
`;

const FooterHeadLi = styled.li`
  font-size: 1.4rem;
  font-weight: 700;
`;

const MenuLi = styled.li`
  font-size: 1.2rem;
  font-weight: 500;
  margin-top: 1.1rem;
  cursor: pointer;
  :hover {
    opacity: 0.6;
  }
`;

const FooterLi = styled.li`
  font-size: 1.2rem;
  font-weight: 500;
  margin-top: 1.1rem;
`;
const MainLogoImg = styled.img`
  width: 9.3rem;
  height: 7.8rem;
  margin-right: 19.5rem;
`;

const Copyright1Div = styled.div`
  font-weight: 500;
  font-size: 1.3rem;
  color: #bebebe;
  padding-top: 10rem;
`;

const Footer = () => {
  const router = useRouter();

  const MoveToTempClothes = () => {
    router.push("/tempClothes");
  };
  const MoveToOOTD = () => {
    router.push("/ootd");
  };
  const MoveToMypage = () => {
    router.push("/mypage");
  };

  return (
    <FooterWrapperDiv>
      <FooterUlFlexDiv>
        <MainLogoImg src="/images/mainlogo.png" />
        <FooterHeadUl>
          <FooterHeadLi>Menu</FooterHeadLi>
          <MenuLi onClick={MoveToTempClothes}>오늘衣</MenuLi>
          <MenuLi onClick={MoveToOOTD}>OOTD</MenuLi>
          <MenuLi onClick={MoveToMypage}>마이 페이지</MenuLi>
        </FooterHeadUl>
        <FooterHeadUl>
          <FooterHeadLi>Made by</FooterHeadLi>
          <FooterLi>Dreamers</FooterLi>
        </FooterHeadUl>
        <FooterHeadUl>
          <FooterHeadLi>Contact</FooterHeadLi>
          <FooterLi>010-1234-5678</FooterLi>
          <FooterLi>abc@abc.com</FooterLi>
        </FooterHeadUl>

        <Copyright1Div>Copyright 2022. Dreamers. All rights reserved.</Copyright1Div>
      </FooterUlFlexDiv>
    </FooterWrapperDiv>
  );
};

export default Footer;
