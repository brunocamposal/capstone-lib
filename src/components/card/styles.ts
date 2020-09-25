import styled from 'styled-components'

export const Wrapper = styled.div`
    background-color:#f7f7f7;
    display: flex;
    flex-direction:column;
    width: 225px;
    height:300px;
    box-shadow: 10px 10px 16px -8px rgba(0,0,0,0.75);
    border-radius: 7px;
    margin:10px;
  img {
    width: 100%;
    height:60%;
    object-fit: cover;
    object-position: top;
  }
  h2 {
    font-size: 13px;
    font-weight: 400;
    margin:10px;
  }
  p {
    color: #4C4C4C;
    font-size: 12px;
    font-weight: 300;
    margin:10px;
    overflow: hidden;
    }

    transition: transform 300ms ease-in-out;
    &:hover {
         transform:scale(1.020);
    }
`;