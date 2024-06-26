import { Paragraph } from "../../components/Core/Typography/Paragraph";

import * as S from "./ComModularizacao.styles";
import { SquareAndCyrcles } from "./components/SquareAndCyrcles";

const totalForms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

export function ComModularizacao() {
  return (
    <S.Container>
      <Paragraph size="md" color="primary">
        Conteúdo da Aplicação
      </Paragraph>

      <S.DivForms>
        {totalForms.map((item, idx) => (
          <>
            <SquareAndCyrcles key={idx} size="md" color="danger" type="square">
              {item}
            </SquareAndCyrcles>
          </>
        ))}
      </S.DivForms>
    </S.Container>
  );
}
