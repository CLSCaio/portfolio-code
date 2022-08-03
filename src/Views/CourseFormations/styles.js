import styled from "styled-components";

import { medias } from "../../Global";

export const Group = styled.div`
  display: flex;
  width: 95%;
  padding: 30px;
  gap: 30px;
  align-items: center;
  flex-direction: column;

  @media (${medias.xXsmall}) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 13%;
  }
`;

export const SubGroup = styled.span`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  max-width: max-content;
`;