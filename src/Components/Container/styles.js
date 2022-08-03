import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  ${({ properties }) => properties}

  min-height: ${({ minH }) => minH && 'max-content'};

  @media (${({ mediaQuery }) => mediaQuery}) {
    ${({ mediaProperties }) => mediaProperties}
  }
`;

export const defaultProperties = {
  styles: {
    'align-items': 'center;',
    'justify-content': 'center;',
    'flex-direction': 'column;',
    'padding': '50px 0',
  }
}