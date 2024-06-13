import { Paragraph } from "../../../Core/Typography/Paragraph";
import * as S from "./Footer.styles";

export function Footer() {
  return (
    <S.Container>
      <Paragraph size="lg" color="primary">
        Todos os direitos reservados
      </Paragraph>
    </S.Container>
  );
}
