import styled,{css} from "styled-components"

const Button = styled.button`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;
  cursor: pointer;
  &:active{
    transform: scale(0.95)
  }
 

  /* The GitHub button is a primary button
   * edit this to target it specifically! */
  ${props => props.primary && css`
    background: white;
    color: black;
    border: 2px solid blue;
  `}
`
export default Button;