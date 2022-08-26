import React, { useState, useEffect } from "react"

import * as C from '../../Components';
import * as R from '../../Router';

import * as CT from './content';
import * as S from './styled';

export const Projects = () => {

    const [projects, setProjects] = useState(CT.pokedex);
    const [project, setProject] = useState(CT.pokedex[0]);
    const [loading, setLoading] = useState(true);

    const selectProjetct = (id) => {
        try {
            setLoading(true);
    
            if (id === 0) return setProjects(CT.pokedex);
            if (id === 1) return setProjects(CT.TMDB);
            if (id === 2) return setProjects(CT.calculator);
            if (id === 3) return setProjects(CT.userInterface);
            if (id === 4) return setProjects(CT.snake_game);
            if (id === 5) return setProjects(CT.storybook);
           
        } finally {
            setProject(CT.pokedex[id]);
            setLoading(false);
        }
    };

    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }, [])
    

    return (
      
        <C.Container
            id={R.routes[3].route.replace('#', '')}
            minH
        >

            <C.Heading title="Projetos" />

            <S.Group>   

                <C.RenderVideo
                    src={project.links.src}
                    id={project.id}
                    href={project.links.href}
                    loading={loading}
                />

                <S.SubGroup>
                    {projects.map(({ active, id, img }, i) =>
                        <C.ViewVideos
                            key={`projects${i}`}
                            active={active}
                            id={id}
                            img={img}
                            onClick={() => selectProjetct(i)}
                        />
                    )}
                </S.SubGroup>
              
            </S.Group>
            
        </C.Container>
     
    )
}