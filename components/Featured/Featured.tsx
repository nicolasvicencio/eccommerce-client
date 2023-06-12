import React from "react";
import { Centered } from "../Centered";
import styled from "styled-components";
import { Button} from "../Button";

const Bg = styled.div`
  background-color: #222;
  color: #aaa;
  padding: 50px 0;
  margin: 0;
`;
const Title = styled.h1`
  margin: 0;
  font-weight: normal;
`;

const Description = styled.p`
  color: #aaa;
  font-size: 1rem;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10;
  img {
    width: 400px;
  }
`;

const Column = styled.div`
  display: flex;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  gap: 20px;
`

export default function Featured({}) {
  return (
    <Bg>
      <Centered>
        <Wrapper>
          <Column>
            <div>
              <Title>Feauted Product!!</Title>
              <Description>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Ratione perferendis, quia consectetur maiores at praesentium
                nulla illum sint. Sit porro sed delectus unde nobis quos
                praesentium voluptate eveniet officia modi?
              </Description>
              <Row>
              <Button outline size="l">Read more</Button>
              <Button primary size="l">Add to cart</Button>
              </Row>
            </div>
          </Column>
          <Column>
            <img src="/mac.png" alt="macbook" />
          </Column>
        </Wrapper>
      </Centered>
    </Bg>
  );
}
