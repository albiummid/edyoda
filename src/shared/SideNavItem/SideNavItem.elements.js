import styled from "styled-components";

export const SideItem = styled.div`
div{
    cursor: pointer;
display: grid;
grid-template-columns: .2fr 3fr;
justify-content: center;
margin: 20px 0;
align-items: center;
grid-gap:10px;
padding:10px 20px;
width: 250px;
img{
width: 40px;
}
}
.active{
    font-weight: bold;
    background-color:#CBD2E1 ;
}
`;