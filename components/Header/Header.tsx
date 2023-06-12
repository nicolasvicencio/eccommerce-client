import Link from "next/link";
import React from "react";
import { styled } from "styled-components";
import { Centered } from "../Centered";

const StyledHeader = styled.header`
  background-color: #222;
  padding: 10px;
  margin: 0;
`;

const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;

const NavigationLinks = styled(Link)`
  color: #aaa;
  text-decoration: none;
`;

const Navigation = styled.nav`
  display: flex;
  gap: 10px;
`;

export default function Header() {
  return (
    <StyledHeader>
      <Centered>
        <Wrapper>
          <Logo href={"/"}>Ecommerce</Logo>
          <Navigation>
            <NavigationLinks href={"/"}>Home</NavigationLinks>
            <NavigationLinks href={"/producst"}>Products</NavigationLinks>
            <NavigationLinks href={"/categories"}>Categories</NavigationLinks>
            <NavigationLinks href={"/account"}>Account</NavigationLinks>
            <NavigationLinks href={"/cart"}>Cart (0)</NavigationLinks>
          </Navigation>
        </Wrapper>
      </Centered>
    </StyledHeader>
  );
}
