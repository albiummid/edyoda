import styled from "styled-components";

export const ItemContainer = styled.div`
a{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    text-decoration: none;
    color: #E0E6F2;
    padding: 10px 0;
    text-transform:uppercase;
    width: 120px;
}
.active-item{
    background-color:#E0E6F2 ;
    color: #15294B;
}

`;