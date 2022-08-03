import React from "react";

import * as C from '../../Components';

import * as CT from './content';
import * as S from './styles';

export const Profissions = ({ description, title, activities }) => (
  <C.Container 
    properties={{...CT.properties}}
  >

    {title.map((t, i) => <S.Paragraph key={`titleProf${i}`}><span>{description[i]}</span>{t}</S.Paragraph>)}

    <> 
      <S.Themes>Atividades:</S.Themes> 
      <S.ContainerSkills>
        {activities.map((v, i) => <S.Skill key={`activitiesProf${i}`}>{v}</S.Skill>)}
      </S.ContainerSkills>
    </>
    
  </C.Container>
)