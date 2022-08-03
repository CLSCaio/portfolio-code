import React from "react";

import * as C from '../../Components';

import * as CT from './content';
import * as S from './styles';

export const Progress = ({ description, title, themes, certificate }) => (
  <C.Container 
    properties={{...CT.properties}}
  >
    {title.map((t, i) => <S.Paragraph key={`titleProgress-${t}`}><span>{description[i]}</span>{t}</S.Paragraph>)}

    {certificate &&
      <S.Certificate href={certificate} target="_blank" >Certificado</S.Certificate>
    }
  
    {themes && (
      <> 
        <S.Themes>Temas abordados:</S.Themes> 
        <S.ContainerSkills>
          {themes.map((t, i) => <S.Skill key={`skillsProgress${i}${t}`}>{t}</S.Skill>)}
        </S.ContainerSkills>
      </>
      )
    }
  </C.Container>
)