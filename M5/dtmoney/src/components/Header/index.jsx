import logoImg from '../../assets/logo.svg'

import { Container, Content, About } from './styles'

export function Header () {
  return (
    <Container>
      <Content> 
        <img src={logoImg} alt="Myfinance"></img>
        
      </Content>
      <About>
        <h2>Sobre o MyFinance</h2>
        <br /><br />
        <p>Olá e bem-vindo ao nosso aplicativo MyFinance!
        <br /><br />
        Nosso objetivo é ajudá-lo a manter o controle sobre suas finanças, tornando o processo de registro de entradas e saídas o mais simples possível.
        <br /><br />
        Com nosso aplicativo, você pode facilmente cadastrar suas despesas e receitas, criando um registro detalhado de todas as suas transações financeiras. Nosso aplicativo oferece a opção de escolher as categorias, como alimentação, transporte, lazer e muito mais, tornando fácil categorizar suas transações.
        <br /><br />
        Ao cadastrar suas despesas e receitas, você terá um histórico completo de suas finanças 
        pessoais,   permitindo que você visualize suas despesas e receitas em um único lugar.</p>
      </About>
    </Container>
  )
}