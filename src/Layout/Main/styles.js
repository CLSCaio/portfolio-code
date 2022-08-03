import styled from 'styled-components';

import { medias } from '../../Global';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1280px;
  margin-top: 50px;

  @media (${medias.xXsmall}) {
    margin-top: 0;
  }
`;


