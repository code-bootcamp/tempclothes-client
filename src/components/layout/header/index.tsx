import React from "react";
import styled from "@emotion/styled";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
const HeaderWrapperDiv = styled.div`
  background-color: white;
  width: 100%;
  z-index: 9999;
  height: 8rem;
  border-bottom: 1px solid #bebebe;
`;

const HeaderContentDiv = styled.div`
  font-size: 1.8rem;
  display: flex;
  justify-content: flex-end;
  height: 8rem;
  align-items: center;
`;

const HeaderContentOOTDDiv = styled.div`
  margin-left: 9.2rem;
  margin-right: 8.5rem;
`;

const LOGOUT = gql`
  mutation logout {
    logout
  }
`;

const Header = () => {
  const [m_logout] = useMutation(LOGOUT);
  const router = useRouter();

  const logout = async () => {
    try {
      const logoutResult = await m_logout();
      console.log("logoutResult", logoutResult);
      location.reload();
      alert("로그아웃 성공!");
      router.push("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <HeaderWrapperDiv>
      <HeaderContentDiv>
        <div>오늘衣</div>
        <HeaderContentOOTDDiv>#OOTD</HeaderContentOOTDDiv>
        <img src="../images/user.png" width="40px" height="40px" style={{ marginRight: "17.2rem " }}></img>
        <div onClick={logout}>로그아웃</div>
      </HeaderContentDiv>
    </HeaderWrapperDiv>
  );
};

export default Header;