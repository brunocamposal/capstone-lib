import styled from 'styled-components'

interface ColProps {
  width: number
  backgroundColor: string
}

export const Col = styled.div<ColProps>`
  background-color: ${(props) => props.backgroundColor};
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: ${(props) => {
    switch (props.width) {
      case 12:
        return '100%'
      case 6:
        return '50%'
      case 4:
        return '25%'
      case 2:
        return '12.5%'
      default:
        return '0%'
    }
  }};
`
