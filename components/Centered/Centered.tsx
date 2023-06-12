import React from "react";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

const StyledDiv = styled.div`
  max-width: 80%;
  margin: 0 auto;
	
`;

export default function Centered({ children }: Props) {
  return <StyledDiv>{children}</StyledDiv>;
}
