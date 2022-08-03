import styled from "styled-components";

import { colors } from "../../Global";

export const Container = styled.div`
  display: ${({ active }) => active ? 'none' : 'block'};
  border: 4px double ${colors.secundary};
  border-radius: 20px;
  max-width: 150px;
  height: 200px;

  text-align: center;

  overflow: hidden;

  cursor: pointer;

  hr {
    background-color: ${colors.secundary};
  }

  h3 {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 65px;
    color: ${colors.secundary};
  }
`;

export const ContainerIMG = styled.div`
  height: 100%;
  background-image: ${({ url }) => `url(${url})`};
  background-size: contain;
`;