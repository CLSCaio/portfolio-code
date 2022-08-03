import React from "react"

import * as C from '../../../Components';

import * as CT from './content';
import * as S from './styles';

export const Skills = () => (
    <S.Container>
        {CT.skills?.map(({title, abilities}, i) => <C.Abilities key={`skills${i}`} title={title} abilities={abilities}/>)}
    </S.Container>
)