import styled, { css } from "styled-components";

interface Props {
  size: "sm" | "md" | "lg";
  color: "primary" | "secondary";
}

export const Container = styled.div<Props>`
  ${props => css`
    font-family: "Poppins", sans-serif;
    line-height: 119%;
    font-weight: 700;

    ${props.size === "sm" && css`
        font-size: 1rem;  
    `}

    ${props.size === "md" && css`
        font-size: 2rem;  
    `}

    ${props.size === "lg" && css`
        font-size: 2.5rem;  
    `}

    ${props.color === "primary" && css`
        color:  #FFBB00;
    `}

    ${props.color === "secondary" && css`
        color:  #FFFFFF;
    `}
  `}
  

`