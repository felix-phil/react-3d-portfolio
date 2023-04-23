import React, { useState } from "react";
import styled from "styled-components";
import { Development, Illustration, ProductDesign, SocialMedia, WebDesign } from "./AllWeDo";

const data = [
  "Web Design",
  "Development",
  "Illustration",
  "Product Design",
  "Social Media",
];
const Section = styled.section`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
`;
const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;
const Left = styled.div`
  flex: 1;
  align-items: center;
  display: flex;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
  }
`;

const Right = styled.div`
  flex: 1;
`;
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: 90px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: #ffffff;
  -webkit-text-stroke: 0px white;

  }
  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    overflow: hidden;
    color: pink;
    white-space: nowrap;
  }
  :hover {
    ::after {
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;

const Works = () => {
  const [work, setWork] = useState("Web Design");
  const options = {
    "Web Design": <WebDesign />,
    Development: <Development />,
    "Product Design": <ProductDesign />,
    Illustration: <Illustration />,
    "Social Media": <SocialMedia />
  };
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((text, i) => (
              <ListItem onClick={()=>setWork(text)} text={text} key={i}>
                {text}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>{options[work] || <WebDesign />}</Right>
      </Container>
    </Section>
  );
};

export default Works;
