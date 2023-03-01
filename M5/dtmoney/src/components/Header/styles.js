import styled from "styled-components";

export const Container = styled.header `
  background-color: var(--blue);
`
export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  
`
export const About = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  padding: 2rem;
  h1 {
    font-size: 30px;
  }
  p {
    color: white;
    width: 80%;
  }
`