import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;

  min-height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
`

export const Content = styled.div`
  flex: 1;
`

export const Background = styled.div`
  background-image: linear-gradient(321.77deg, #e3e0ff 74.96%, #ffffff 114.96%);
  opacity: 0.48;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 990;

  height: 100vh;
  width: 100%;
`

export const Ellipse = styled.div`
  position: fixed;
  top: 354px;
  left: -491.26px;
  z-index: 991;

  width: 2381.97px;
  height: 1197.86px;

  background: linear-gradient(
    245.29deg,
    #6dc1dc 13.32%,
    #d9dfff 28.55%,
    #ccf0ff 55.55%,
    #d9dfff 84.12%
  );
  filter: blur(364px);
  transform: rotate(-15deg);
`