import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";
import { Container } from "./styles";
import { Footer } from "../Footer";

export function Dashboard() {
  return (
    <Container >
      <Summary />
      <TransactionsTable />
      <Footer />
    </Container>  
  )
}