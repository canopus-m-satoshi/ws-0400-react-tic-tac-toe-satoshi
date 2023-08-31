import { styled } from 'styled-components'

const StyledFooter = styled.footer`
  text-align: center;
`

const StyledButton = styled.button`
  padding: 6px 35px;
  width: 100%;
  border: 2px solid #000000;
  border-radius: 4px;
  display: inline-block;
  background-color: transparent;
  outline: none;
  appearance: none;
  cursor: pointer;

  &:hover {
    color: #fff;
    background: #000000;
  }
`

const Footer = ({ onRestart, state }) => (
  <StyledFooter>
    <p>{state}</p>
    <StyledButton onClick={() => onRestart()}>RESTART</StyledButton>
  </StyledFooter>
)
export default Footer
