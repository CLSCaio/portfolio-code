import styled from "styled-components";

const sizes = {
  xXsmall: '25px',
  small: '50px',
  medium: '150px',
  large: '300px',
}

const borders = {
  xXsmall: `${Number(sizes.xXsmall.replace('px', '')) * 0.05}px`,
  small: `${Number(sizes.small.replace('px', '')) * 0.05}px`,
  medium: `${Number(sizes.medium.replace('px', '')) * 0.05}px`,
  large: `${Number(sizes.large.replace('px', '')) * 0.05}px`
}

const fonts = {
  medium: '1rem',
  large: '1.3rem',
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  h2 {
    position: absolute;
    font-size: ${({ size }) => size === 'medium' ? fonts.medium : fonts.large};
  }
`;

export const Loader = styled.span`
  animation: is-rotating 1s infinite;
  border: ${({ size }) => size === 'xXsmall' ? borders.xXsmall : size === 'small' ? borders.small : size === 'medium' ? borders.medium : borders.large} solid ${({ bgColor }) => bgColor};
  border-radius: 50%;
  border-top-color: ${({ color }) => color};
  height: ${({ size }) => size === 'xXsmall' ? sizes.xXsmall : size === 'small' ? sizes.small : size === 'medium' ? sizes.medium : sizes.large};
  width: ${({ size }) => size === 'xXsmall' ? sizes.xXsmall : size === 'small' ? sizes.small : size === 'medium' ? sizes.medium : sizes.large};

  @keyframes is-rotating {
  to {
    transform: rotate(1turn);
  }
}
`;

