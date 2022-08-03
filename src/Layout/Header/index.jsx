import React, {useState} from "react";

import * as C from '../../Components';

import * as Menu from './Menu';
import * as CT from './content';
import * as S from './styles';

export const Header = () => {

  const [menu, openMenu] = useState(false);

  return (
    <S.Container menu={menu}>

      <C.Container
        properties={CT.properties}
      >
        <Menu.Bar 
          openMenu={openMenu}
          menu={menu}
        />

        <Menu.Opc menu={menu} openMenu={openMenu} />
      </C.Container>
  
    </S.Container>
  )
}