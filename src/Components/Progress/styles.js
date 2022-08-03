import styled from "styled-components";

import { colors } from "../../Global";

export const Paragraph = styled.p`
  span {
    color: ${colors.secundary}
  }
`;

export const Themes = styled.p`
  color: ${colors.secundary};
`;

export const ContainerSkills = styled.div`
  margin-left: 15px;
`;

export const Skill = styled.li``;

export const Certificate = styled.a`
  text-decoration: none;
  color: ${colors.secundary};

  :hover {
    color: ${colors.primary};
    text-decoration: underline;
  }
`;