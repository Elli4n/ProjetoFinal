import styled from "styled-components";
import { darken, transparentize } from "polished";

export const Container = styled.form`
  h2 {
    text-align: left;
    font-size: 1.5rem;
    color: var(--text-title);
    line-height: 2.25rem;
    margin-bottom: 1.5rem;
  }
  ::placeholder {
    margin-left: 0.5rem;
    color: var(--text-body);
  }
  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    & + input {
      margin-top: 0.8rem;
    }
  }
  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

const colors = {
  green: "#33CC95",
  red: "#E62E4D",
};

export const RadioBox = styled.button`
  height: 4rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;

  background: ${(props) =>
    props.isActive
      ? transparentize(0.9, colors[props.activeColor])
      : "transparent"};

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border-color: ${darken(0.1, "#D7D7D7")};
  }
  img {
    width: 30px;
    height: 30px;
  }

  span {
    display: inline-block;
    margin-left: 1.5rem;
    font-size: 1rem;
    color: var(--text-title);
  }
`;
