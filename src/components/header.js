const Header = (props) => {
   <HeaderContainer>
        <h2>{props.name}</h2>
        <p>{props.children}</p>
   </HeaderContainer>
}
 export default Header;
