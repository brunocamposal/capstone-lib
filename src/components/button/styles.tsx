import styled from 'styled-components'


export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border: 0.3em solid black;
  border-radius: 5em;
  width: 8em;
  height: 2em;
  cursor: pointer;
  background-color: none;
  color: ${props => props.color};
`

export const Cancel = styled.div`
  color:blue;
  background-color: red
`
