import styled, { css } from "styled-components";

interface Props {
  size: "sm" | "md" | "lg";
  color: "primary" | "secondary";
}

export const Container = styled.div<Props>`
  ${props => css`
      font-family: "Poppins", sans-serif;
      line-height: 119%;
      font-weight: 400;

      ${props.size === "sm" && css`
        font-size: 0.75rem;  
      `}

      ${props.size === "md" && css`
        font-size: 0.875rem;  
      `}

      ${props.size === "lg" && css`
        font-size: 1rem;  
      `}

      ${props.color === "primary" && css`
        color:  #1F2933;
      `}

      ${props.color === "secondary" && css`
        color:  #fff;
      `}
  `}
`