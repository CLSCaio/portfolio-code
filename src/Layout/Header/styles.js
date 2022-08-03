import styled from "styled-components";

import { medias, colors } from "../../Global";

export const Container = styled.header`
  padding: 15px 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: ${({ menu }) => menu ? '270px' : '70px'};

  overflow: hidden;
  position: fixed;
  top: 0;

  transition: 0.7s;

  border-bottom: 5px double ${colors.primary};

  @media(${medias.small}) {
    align-items: center;
    justify-content: center;
    height: 70px
  }
`;