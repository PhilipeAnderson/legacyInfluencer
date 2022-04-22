import { 
  Container, 
  Header, 
  Content, 
  LogoLegacy,
  Title,
  CallToAction,
  LoginIn
} from './styles';

import LogoApp from '../../assets/logo.png';
import { SignInButton } from '../../components/SignInButton';

import GoogleSvg from '../../assets/icon-google.svg';
import AppleSvg from '../../assets/icon-apple.svg';

export const Login = () => {
  return(
    <Container>
      <Header>
        <LogoLegacy
          source={LogoApp}
        />
      </Header>
      <Content>
        <Title>
          Para um mercado {'\n'} diversificado! {'\n'}Seu influencer {'\n'}personalizado !
        </Title>
        <CallToAction>
          Faça seu login com {'\n'}uma das contas abaixo
        </CallToAction>
        <LoginIn>
          <SignInButton title="Google" />
          <SignInButton title="Apple" />
        </LoginIn>
      </Content>
    </Container>
  )
}
