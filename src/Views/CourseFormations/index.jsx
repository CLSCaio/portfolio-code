import React from 'react'

import * as C from '../../Components';
import * as R from '../../Router';

import * as CT from './content';
import * as S from './styles';

export const CourseFormations = () => (
    <C.Container
      id={R.routes[1].route.replace('#', '')}
      minH
    > 

        <C.Heading
            title='Cursos e Formações'
        />

        <S.Group>

            <S.SubGroup>
                { CT.course.map(({ description, title, themes, certificate }, i) => 
                    <C.Progress
                    key={`course${i}`}
                    description={description}
                    title={title}
                    themes={themes}
                    certificate={certificate}
                    />
                )}              
            </S.SubGroup>

            <S.SubGroup>
                { CT.course2.map(({ description, title, themes, certificate }, i) => 
                    <C.Progress
                    key={`course2${i}`}
                    description={description}
                    title={title}
                    themes={themes}
                    certificate={certificate}
                    />
                )}
            </S.SubGroup>

            <S.SubGroup>
                { CT.formations.map(({ description, title }, i) => 
                    <C.Progress
                    key={`formations${i}`}
                    description={description}
                    title={title}
                    
                    />
                )}  
            </S.SubGroup>

        </S.Group>

    </C.Container >
)
