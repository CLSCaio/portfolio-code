import React from "react";

import * as C from '../../../../Components';
import * as R from '../../../../Router';

import * as CT from './content';
import * as S from './styles';

export const Opc = ({ openMenu }) => {

  return (
    <C.Container 
      properties={CT.properties}
    >
      {R.routes.map(({name, route}, i) => 
        <S.Router key={`opc${i}`} href={route} onClick={() => openMenu(false)}> {name} </S.Router>
      )}
    </C.Container>
  )
}