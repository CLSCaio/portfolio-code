import React from "react";

import * as S from './styles';

export const ViewVideos = ({ active, img, id, onClick}) => (
  <S.Container active={active} onClick={onClick}>
    <h3>{id}</h3>
    <hr />
    <S.ContainerIMG url={img} />
  </S.Container>
)