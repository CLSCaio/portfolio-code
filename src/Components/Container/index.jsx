import React from "react";

import * as S from './styles';

export const Container = ({ children, minH, properties = S.defaultProperties, id }) => (
  <S.Container 
    properties={{...properties?.styles}}
    mediaQuery={properties?.media?.query}
    mediaProperties={{...properties?.media?.styles}}
    minH={minH}
    id={id}
  >
    {children}
  </S.Container>
)