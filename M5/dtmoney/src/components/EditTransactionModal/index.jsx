import { useEffect, useState } from 'react';
import { useTransactions } from '../../hooks/useTransactions';
import Swal from 'sweetalert2'

import Modal from 'react-modal';

import outcomeImg from '../../assets/outcome.svg'
import incomeImg from '../../assets/income.svg'
import closeImg from '../../assets/close.svg'

import { Container, RadioBox, TransactionTypeContainer } from './styles';

export function EditTransactionModal({ isOpen, onRequestClose, transactionEdit }) {
  //save state from button
  const { editTransactions } = useTransactions()

  const [tittle, setTitle] = useState('')
  const [amount, setAmount] = useState()
  const [type, setType] = useState('deposit')
  const [category, setCategory] = useState('')

  useEffect(() => {
    setTitle(transactionEdit?.tittle)
    setAmount(transactionEdit?.amount)
    setCategory(transactionEdit?.category)
    //eslint-disable-next-line
  }, [transactionEdit])

  async function handleEditTransaction (event) {
    event.preventDefault();
    
    if (tittle === '') {
      Swal.fire({
        title: 'Preencha o campo título',
        icon: 'warning',
        showConfirmButton: false,
      })
      return
    }
    if (amount === 0) return alert('Preencha o campo valor')
    if (category === '') return alert('Preencha o campo caterogia')

    await editTransactions({
      id: transactionEdit.id,
      tittle,
      type,
      category, 
      amount,
    })

    onRequestClose()

    setTitle('')
    setAmount(0)
    setType('')
    setCategory('')
  }

  return (
    <Modal 
      //modal is open? run function in component App.jsx
      isOpen={isOpen}
      //close modal? run function in component App.jsx
      onRequestClose={onRequestClose}

      overlayClassName="react-modal-overlay"

      className="react-modal-content" 
      >
        
        <button
         type="button"
         onClick={onRequestClose}
         className="react-modal-close">
          <img src={closeImg} alt="Fechar modal" />
        </button>

        <Container onSubmit={handleEditTransaction} >
        <h2>Editar transação</h2>
        
        <input 
          placeholder="Título" 
          value={tittle}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input 
          type="number"
          placeholder="Valor" 
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />
        <TransactionTypeContainer>
          <RadioBox
           type="button"
           onClick={() => { setType('deposit') }}
           isActive={type === 'deposit'}
           activeColor = "green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
           type="button" 
           onClick={() => { setType('withdraw') }}
           isActive={type === 'withdraw'} 
           activeColor = "red"    
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input 
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)} 
        />
        <button type="submit">
          Editar
        </button>

        </Container>
      </Modal>
  )
}