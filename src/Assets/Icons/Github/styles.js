import styled from "styled-components";

import { medias } from "../../../Global";

export const SVG = styled.svg`
  height: 20px;
  width: 20px;

  @media (${medias.large}) {
    height: 30px;
    width: 30px;
  }
`;