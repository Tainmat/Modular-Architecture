import { Heading } from "../../../Core/Typography/Heading";
import * as S from "./Header.styles";

export function Header() {
  return (
    <S.Container>
      <Heading size="lg" color="primary">
        Casa do Construtor
      </Heading>
    </S.Container>
  );
}
