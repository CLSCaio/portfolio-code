import styled from "styled-components";

import { medias, colors } from "../../../Global";

export const Group = styled.span`
  display: flex;
  row-gap: 15px;
  column-gap: 40px;
  align-items: center;
  flex-wrap: wrap;
  

  @media (${medias.small}) {
    justify-content: center;
  }
`;


export const SubGroup = styled.span`
  display: flex;
  gap: 5px;
  max-width: max-content;
  align-items: center;

  
  a {
    text-decoration: none;
  }

  :hover {
    a {
      text-decoration: underline;
      color: ${colors.primary}
    }
   
  }
`;