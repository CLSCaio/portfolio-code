import styled from "styled-components";

import { GoThreeBars } from 'react-icons/go'
import { AiOutlineClose } from 'react-icons/ai'

import { medias } from "../../../../Global";

export const IMG = styled.img`
  display: none;
  border-radius: 100%;
  width: 40px;
  height: 40px;

  @media (${medias.small}) {
    display: flex;
  }
`;

export const Bars = styled(GoThreeBars)`
  display: flex;
  width: 30px;
  height: 30px;

  cursor: pointer;

  @media (${medias.small}) {
    display: none;
  }
`;

export const Close = styled(AiOutlineClose)`
  display: flex;
  width: 30px;
  height: 30px;

  cursor: pointer;

  @media (${medias.small}) {
    display: none;
  }
`;