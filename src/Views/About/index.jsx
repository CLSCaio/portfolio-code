import React from "react"

import { Skills } from './Skills';
import { Information } from './Information';

import * as R from '../../Router';
import * as C from '../../Components';

import * as CT from './content';
import * as S from './styles';

export const About = () => (

    <C.Container
      id={R.routes[0].route.replace('#', '')}
      minH
    >
        <C.Heading title="Meu perfil"/>

        <C.Container properties={CT.properties} >
        
            <S.Group w="70%">
                <Information />

                <S.SubGroup>
                    <h2>Sobre ...</h2>
                    <p>
                        &nbsp; Sou desenvolvedor web com conhecimento em JavaScript,
                        HTML, CSS, react.js, typescript e redux, pretendo me desenvolver cada vez mais nessa area.
                        &nbsp; Tenho alguns projetos pessoais alem dessa propria página web,
                        como meu primeiro site usando API, e algo que sempre desejei
                        muito fazer e que adorava muito, alem de lembrar a minha infancia,
                        que no caso era uma pokedex. <br />
                        &nbsp; Pode encontrar mais detalhes sobre isso em <a href="#projetos">projetos</a>.
                    </p>
                </S.SubGroup>

               

            </S.Group>
            
            <Skills />

        </C.Container>

    </C.Container>
    
)



