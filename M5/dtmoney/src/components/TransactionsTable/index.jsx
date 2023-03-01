import { useState } from 'react'
import { Container, ButtonEdit, ButtonDelete } from "./styles";
import { PencilSimple, Trash } from "phosphor-react";
import { EditTransactionModal } from '../EditTransactionModal';
import { useTransactions } from '../../hooks/useTransactions';
import { ButtonNewTransaction  } from "./styles";
import { NewTransactionModal } from "../NewTransactionModal";

import Swal from 'sweetalert2'


export function TransactionsTable() {
  const [isEditTransactionModalOpen, SetIsEditTransactionModalOpen] = useState(false)
  const [transactionEdit, SetTransactionEdit] = useState()

  const { deleteTransaction } = useTransactions() 

  const [isNewTransactionModalOpen, SetIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal() {
    //change modal state for true
    SetIsNewTransactionModalOpen(true)
  }
  function handleCloseNewTransactionModal() {
    //change modal state for false
    SetIsNewTransactionModalOpen(false)
  }


  function handleOpenEditTransactionModal(transaction) {
    SetTransactionEdit(transaction)

    //change modal state for true
    SetIsEditTransactionModalOpen(true)
  }
  function handleCloseEditTransactionModal() {
    //change modal state for false
    SetIsEditTransactionModalOpen(false)
  }

  function handleDeleteTransaction(id) {
    console.log('oi sou o id', id)

    Swal.fire({
      title: 'Tem certeza?',
      text: "Você não poderá reverter essa alteração",
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#33CC95',
      cancelButtonColor: '#e62e4d',
      confirmButtonText: 'Sim, Deletar!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteTransaction(id)

      }
    })
  }

  const { transactions } = useTransactions()
  return (
    <>
      <EditTransactionModal 
        isOpen={isEditTransactionModalOpen}
        onRequestClose={handleCloseEditTransactionModal}
        transactionEdit={transactionEdit}
      />
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <ButtonNewTransaction type="button" onClick={handleOpenNewTransactionModal}> Nova Transação </ButtonNewTransaction>
      <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
            <th>Editar</th>
            <th>Excluir</th>
          </tr>
        </thead>

        <tbody>
         {
           transactions.map((transaction) => {
             return (
              <tr key={transaction.id}>
              <td>{transaction.tittle}</td>
              <td className={transaction.type}>
                {
                  Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {transaction.date}
              </td>
              <td>
                <ButtonEdit onClick={() => handleOpenEditTransactionModal(transaction)}> 
                  <PencilSimple size={32} />
                </ButtonEdit>
              </td>
              <td>
                <ButtonDelete onClick={() => handleDeleteTransaction(transaction.id)}>
                  <Trash size={32} />
                </ButtonDelete>
              </td>
              
            </tr>
             )
           })
         }
        </tbody>
      </table>
    </Container>  
    </>
  )
}