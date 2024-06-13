import * as S from "./Header.styles";

interface Props {
  title: string;
}

export function Header({ title }: Props) {
  return (
    <S.Container>
      <h1>{title}</h1>
    </S.Container>
  );
}
