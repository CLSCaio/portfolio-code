import styled from "styled-components";

import { colors, medias } from "../../Global";

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 100%;

  a {
    color: ${colors.secundary};
    cursor: pointer;
  }

  @media (${medias.small}) {
    width: ${({ w }) => w};
  }
`;

export const SubGroup = styled.span`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;