import React from "react";

import * as C from '../../Components';

import * as S from './styles';

export const Heading = ({ title }) => (
  <C.Container 
    properties={{...S.properties}}
  >
    <S.H1 >{title}</S.H1 >
    <hr />
  </C.Container>
)