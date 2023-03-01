import { createContext, useEffect, useState, useContext } from "react";
import { api } from "../services/api";
import Swal from 'sweetalert2'

const TransactionsContext = createContext({})

export function TransactionsProvider({ children }) {

  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    api.get('transactions')
     .then( response => setTransactions(response.data))
  }, [])

  async function createTransactions(transactionInput) {
    await api.post('transactions', {
      ...transactionInput,
      date: Intl.DateTimeFormat('pt-BR').format(new Date()),
    })
    
    const transaction = {
      ...transactionInput,
      date: Intl.DateTimeFormat('pt-BR').format(new Date()),
    }

    setTransactions([
      ...transactions,
      transaction
   ])
  }

  async function editTransactions(transactionInput) {
    await api.put(`transactions/${transactionInput.id}`, {
      ...transactionInput,
      date: Intl.DateTimeFormat('pt-BR').format(new Date()),
    })

    const transactionEdit = transactions.map((transaction) => {
      if (transaction.id === transactionInput.id) {
        transactionInput.date = Intl.DateTimeFormat('pt-BR').format(new Date())
        return transaction = transactionInput
     }
     return transaction
    })

    setTransactions(transactionEdit)
    Swal.fire({
      title: 'Transação atualizada com sucesso!',
      icon:'success',
      showConfirmButton: false,
    })
  }
  
  async function deleteTransaction(id) {
    console.log('transactions deleted', id)
    await api.delete(`transaction/${id}`)

    const transactionsUpdated = transactions.filter((transaction) => transaction.id !== id)
    
    setTransactions(transactionsUpdated)
    Swal.fire({
      title: 'Transação deletada com sucesso!',
      icon:'success',
      showConfirmButton: false,
    })
  }


  return(
    <TransactionsContext.Provider value={{ transactions, createTransactions, editTransactions, deleteTransaction }}>
      { children }
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionsContext)
  return context
}