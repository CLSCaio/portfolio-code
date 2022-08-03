import styled from "styled-components";

import { colors, medias } from "../../Global";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const H2 = styled.h2`
  color: ${colors.secundary};
  :hover {
    transform: translate(40px, -5px) scale(1.1);
    color: ${colors.primary};
  }  
`;

export const Link = styled.a`
  margin-left: 30px;
  text-decoration: none;

  :hover {
    text-decoration: underline;

  }  
`;

export const ContainerVideo = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 20px;
  border: 6px double ${colors.secundary};

  width: 100%;
  height: 100vh;
  max-height: 200px;

  overflow: hidden;

  @media (${medias.small}) {
    max-height: 300px;
  }
`;

export const Video = styled.iframe`
  width: 100%;
  height: 100%;
`;



