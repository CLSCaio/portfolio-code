import React from "react";

import photo from '../../../../Assets/Img/F_perfil3.jpg';
import * as C from '../../../../Components';

import * as CT from './content';
import * as S from './styles';

export const Bar = ({ menu, openMenu }) => (
  <C.Container
    properties={{...CT.properties}}
  >
    <S.IMG src={photo} alt="Minha foto" type="image/jpg"/>
    {!menu 
      ? <S.Bars onClick={() => openMenu(!menu)} />
      : <S.Close onClick={() => openMenu(!menu)} /> 
    }

    <p>Caio Sousa</p>
  </C.Container>
)