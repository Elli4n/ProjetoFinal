import styled from "styled-components";

export const Container = styled.div`
  margin-top: 3rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);
      border-radius: 0.25rem;

      &:first-child {
        color: var(--text-title);
      }
      &.deposit {
        color: var(--green);
      }
      &.withdraw {
        color: var(--red);
      }
    }
  }
`
export const ButtonEdit = styled.button`
  background: none;
  border: 0;
`
export const ButtonDelete = styled.button`
  background: none;
  border: 0;
  color: #e62e4d;
  `
  export const ButtonNewTransaction = styled.button `
    margin-top: 5rem;
    margin-left: 50rem;
    font-size: 1rem;
    color: #fff;
    background: var(--blue-light);
    border: 0;
    border-radius: 0.26rem;
    padding: 0 2rem;
    height: 3rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  `