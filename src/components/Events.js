import styled from "styled-components";
import BoxTemplate from "./BoxTemplate";

const Events = (props) => {
  
  return (
    <Container className='dark'>
      <header>{props.title}</header>
      <section>{props.children}</section>
    </Container>
  );

};

export default Events;


const Conaitner = styled.div`
  & > header {
    font-weight : 600;
    font-size : 18px;
    padding-bottom: 12px;
    margin-bottom: 12px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);

  }`