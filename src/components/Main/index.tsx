import * as S from "./index.styles";

const Main = (): JSX.Element => (
  <S.Wrapper>
    <S.Logo
      src="img/logo.svg"
      alt="Atom illustration representing react framework"
    />
    <S.Title>NextJS Boilerplate</S.Title>
    <S.Description>
      TypeScript, ReactJS, NextJS and Styled-Components
    </S.Description>
    <S.Illustration
      src="img/hero-illustration.svg"
      alt="Programmer in front of code blocks"
    />
  </S.Wrapper>
);

export default Main;
