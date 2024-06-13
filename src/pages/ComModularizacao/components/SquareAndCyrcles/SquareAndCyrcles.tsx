import { ReactNode } from "react";
import * as S from "./SquareAndCyrcles.styles";
import { Paragraph } from "../../../../components/Core/Typography/Paragraph";

interface Props {
  size: "sm" | "md";
  color: "danger" | "success";
  type: "square" | "cyrcle";
  children: ReactNode;
}

export function SquareAndCyrcles({ color, size, type, children }: Props) {
  return (
    <>
      {type === "cyrcle" && (
        <S.Cyrcle color={color} size={size}>
          {children}
        </S.Cyrcle>
      )}
      {type === "square" && (
        <S.Square color={color} size={size}>
          <Paragraph size="md" color="secondary">
            {children}
          </Paragraph>
        </S.Square>
      )}
    </>
  );
}
