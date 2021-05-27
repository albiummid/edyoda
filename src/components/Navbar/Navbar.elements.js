import styled from "styled-components";

export const Nav = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px 40px;

@media(max-width:480px){
    padding-inline: 5px;
}
`;
export const NavItems = styled.ul`
display: flex;
list-style: none;
gap: 30px;
`;
export const NavItem = styled.li`
display: flex;
justify-content: center;
align-items: center;
a{
text-decoration: none;
color: black;
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
}
`;
export const NavLogo = styled.div`
display: flex;
align-items: center;
`;
