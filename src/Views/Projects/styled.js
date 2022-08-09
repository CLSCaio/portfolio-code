import styled from 'styled-components'

import { medias } from '../../Global'

export const Group = styled.div`
  display: flex;
  width: 95%;
  padding: 30px;
  gap: 30px;
  align-items: center;
  flex-direction: column;

  @media (${medias.medium}) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 5%;
  }
`;

export const SubGroup = styled.span`
  width: 100%;
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 25px;

  @media (${medias.small}) {
    margin-top: 30px; 
  }

  @media (${medias.medium}) {
    margin-top: 40px; 
  }

  @media (${medias.extraLarge}) {
    margin-top: 50px; 
  }
`;