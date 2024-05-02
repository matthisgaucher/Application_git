import LinkButton from "./LinkButton";
import styled from "styled-components";

const Sidebar = () => {
  return (
    <Sidebarstyle>
      <LinkButton>Evenements</LinkButton>
      <LinkButton>Joueurs</LinkButton>
      <LinkButton>Equipes</LinkButton>
    </Sidebarstyle>
  );
};

export default Sidebar;

const Sidebarstyle = styled.section`
    background: radial-gradient(circle, rgba(46,50,63,1) 0%, rgba(34,38,47,1) 100%);
    box-shadow: none;
    border-radius: 0;
    padding: 36px 50px;
    height: calc(100% - 72px);
`
