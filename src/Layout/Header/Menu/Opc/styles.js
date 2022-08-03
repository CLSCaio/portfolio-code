import styled from "styled-components";

import { colors } from '../../../../Global'; 

export const Router = styled.a`
  text-decoration: none;
  max-width: max-content;

  :hover {
    color: ${colors.secundary};
    text-decoration: underline;
    transform: scale(1.15);
  }
`;