import React from 'react'

import * as C from '../../Components';
import * as R from '../../Router';

import * as CT from './content';
import * as S from './styles';

export const ExpProfessional = () => (
       
    <C.Container 
      id={R.routes[2].route.replace('#', '')}
      minH
    >
        
        <C.Heading
            title='Experiência Profissional'
        />

        <S.Group>
            { CT.formations.map(({ description, title, activities }, i) => 
                <C.Profissions
                key={`profissions${i}`}
                description={description}
                title={title}
                activities={activities}
                />
            )}   
        </S.Group>
   
    </C.Container>
)
