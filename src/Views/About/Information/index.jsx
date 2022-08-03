import React from "react"

import * as C from '../../../Components';

import * as CT from './content';
import * as S from './styles';

export const Information = () => (

    <C.Container properties={{...CT.properties}}>
        <h2> Dados pessoais ... </h2>

        <S.Group>
            {CT.links.map((l, i) => 
                <S.SubGroup key={`ìnformation${l}${i}`}>
                    {l.icon}
                    <a target="_blank" href={l.link} rel="noreferrer"> {l.name} </a>
                </S.SubGroup>
            )}
        </S.Group>

    </C.Container>
)