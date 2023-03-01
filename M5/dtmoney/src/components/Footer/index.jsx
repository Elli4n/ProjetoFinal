import { InstagramLogo, TwitterLogo, FacebookLogo } from "phosphor-react"
import { Container, Content } from "./styles"



export function Footer() {

return (
    <Container>
        <p>Visite nossas Redes</p>
        <InstagramLogo  size={32} />
        <TwitterLogo  size={32} />
        <FacebookLogo size={32} />

        <Content>
            <h3>Nossos Contatos</h3>
            <p>Tel: (21) 97878-6767</p>
            <p>SAC: 0800 787 6767 </p>
            <p>Email: myfinance@gmail.com</p>
        </Content>
    </Container>

)

}