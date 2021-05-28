import styled from "styled-components";

export const ItemContainer = styled.div`
margin: 10px auto;
a{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    text-decoration: none;
    color: #E0E6F2;
    text-transform:uppercase;
    width: 120px;
}
.active-item{
    background-color:#E0E6F2 ;
    color: #15294B;
}

`;