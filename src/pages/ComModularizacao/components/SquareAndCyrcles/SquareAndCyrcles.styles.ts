import styled, { css } from "styled-components";

interface Props {
  size: "sm" | "md"
  color: "danger" | "success"
}

export const Shape = styled.div<Props>`
  ${props => css`
  display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 0.5rem;


      ${props.size === "sm" && css`
          height: 1rem;
          width: 1rem;
      `}

      ${props.size === "md" && css`
          height: 2rem;
          width: 2rem;
      `}

      ${props.color === "danger" && css`
          background: red;
      `}

      ${props.color === "success" && css`
        background: green;
      `}
  `}
`

export const Square = styled(Shape)`
  border-radius: 4px;
`

export const Cyrcle = styled(Shape)`
  border-radius: 50%;
`