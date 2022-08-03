import React from "react";

import { colors } from "../../Global";

import * as S from './styles';

export const Loading = ({ text, size, color = colors.darkBlue, bgColor = colors.primary }) => (
  <S.Container size={size}>
    <S.Loader size={size} color={color} bgColor={bgColor}/>
    {('medium' || 'large') === size && <h2 dangerouslySetInnerHTML={{ __html: text }} />}
  </S.Container>
)