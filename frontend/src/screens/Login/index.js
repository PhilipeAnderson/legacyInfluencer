import { Container, Header, Content, Logo } from './styles';
import LogoApp from '../../assets/logo.png';

export const Login = () => {
  return(
    <Container>
      <Header>
        <Logo>
          <img src={ LogoApp } alt="Text" />
        </Logo>
      </Header>
      <Content />
    </Container>
  )
}
