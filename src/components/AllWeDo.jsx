import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import WebDev from "./Webdev";
import ReactLogo from "./ReactLogo";
import Shoe from "./Shoe";
import Illustration3D from "./Illustration";
import Social from "./Social";
import styled from "styled-components";

const Desc = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  color: #000;
  position: absolute;
  top: 100px;
  right: 100px;
  font-size: 14px;
  font-weight: 300;

  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

export const WebDesign = () => {
  return (
    <>
      <Canvas>
        <Stage environment={"city"} intensity={0.6}>
          <WebDev />
        </Stage>
        <OrbitControls enableZoom={false} />
      </Canvas>
      <Desc>
        We design products with a strong focus on both world class design and
        ensuring your product is a market success
      </Desc>
    </>
  );
};

export const Development = () => {
  return (
    <>
      <Canvas>
        <Stage environment={"city"} intensity={0.6}>
          <ReactLogo />
        </Stage>
        <OrbitControls enableZoom={false} />
      </Canvas>
      <Desc>
        We design products with a strong focus on both world class design and
        ensuring your product is a market success
      </Desc>
    </>
  );
};

export const ProductDesign = () => {
  return (
    <>
      <Canvas>
        <Stage environment={"city"} intensity={0.6}>
          <Shoe />
        </Stage>
        <OrbitControls enableZoom={false} />
      </Canvas>

      <Desc>
        We design products with a strong focus on both world class design and
        ensuring your product is a market success
      </Desc>
    </>
  );
};

export const Illustration = () => {
  return (
    <>
      <Canvas>
        <Stage environment={"city"} intensity={0.6}>
          <Illustration3D />
        </Stage>
        <OrbitControls enableZoom={false} />
      </Canvas>
      <Desc>
        We design products with a strong focus on both world class design and
        ensuring your product is a market success
      </Desc>
    </>
  );
};
export const SocialMedia = () => {
  return (
    <>
      <Canvas>
        <Stage environment={"city"} intensity={0.6}>
          <Social />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
      <Desc>
        We design products with a strong focus on both world class design and
        ensuring your product is a market success
      </Desc>
    </>
  );
};
