import React from "react";

import * as C from '../../Components';

import * as S from './styles';

export const RenderVideo = ({ src, id, href, loading }) => (
  
  <S.Container>
    <S.Link href={href} target="_blank"> <S.H2>{id}</S.H2> </S.Link> 
  
    <S.ContainerVideo>
      {!loading ? (
        <S.Video controls  src={src} alt={id}>
            Desulpe, seu navegador não suporta vídeos HTML5 em WebM com VP8 ou MP4 com H.264.
        </S.Video>
      ) : (
        <C.Loading text="Carregando <br/> video..." size="medium"/>
      )}
   </S.ContainerVideo>

  </S.Container> 
)