import React from "react";

import * as C from '../../Components';

import * as CT from './content';
import * as S from './styles';

export const Abilities = ({ abilities, title }) => (
  <C.Container 
    properties={{...CT.properties}}
  >

    <S.Title>{title}</S.Title> 
    <S.ContainerSkills>
      {abilities?.map((a, i) => <S.Skill key={`abilities${i}`}>{a}</S.Skill>)}
    </S.ContainerSkills>
 
  </C.Container>
)