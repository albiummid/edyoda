import styled from "styled-components";

export const SidebarContainer = styled.div`
width: 120px;
min-height: 100vh;
background-color: #15294B;
display: flex;
align-items: center;
flex-direction: column;
display: ${props => (props.open ? "flex" : "none")};
transition: all .5s ease;

`;