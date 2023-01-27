import styled,{css} from "styled-components"

const Div = styled.div`
  /* This renders the buttons above... Edit me! */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  border: 1px solid gray;
  cursor: pointer;
  &:active{
    transform: scale(1.05)
  }
  
  
 

  /* The GitHub button is a primary button
   * edit this to target it specifically! */
  /* ${props => props.primary && css`
    background: white;
    color: black;
    border: 2px solid blue;
  `} */
`;
export default Div;