import { ReactNode } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import * as S from "./Layout.styles";

interface Props {
  children: ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <>
      <S.Container>
        <Header />

        <S.Content>{children}</S.Content>

        <Footer />
      </S.Container>

      <S.Background>
        <S.Ellipse />
      </S.Background>
    </>
  );
}
