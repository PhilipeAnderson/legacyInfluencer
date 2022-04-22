import { Image } from 'react-native';
import { Container, Header, Content } from './styles';

import LogoApp from '../../assets/logo.png';

export const Login = () => {
  return(
    <Container>
      <Header>
        <Image
          src={LogoApp}
          alt="Text"
          width={200}
          height={100}
        />
      </Header>
      <Content />
    </Container>
  )
}
