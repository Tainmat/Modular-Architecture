import { ReactNode } from "react";

import * as S from "./Paragraph.styles";

interface Props {
  size: "sm" | "md" | "lg";
  color: "primary" | "secondary";
  children: string | number | ReactNode;
}

export function Paragraph({ size, color, children }: Props) {
  return (
    <S.Container color={color} size={size}>
      {children}
    </S.Container>
  );
}
