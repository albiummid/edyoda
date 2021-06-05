import styled from "styled-components";

export const CardContainer = styled.div`
font-family: "Raleway", sans-serif;
box-shadow: 0px 10px 40px;
padding: 10px 12px;
width: 360px;
border-radius: 10px;
.module_info{
    font-family: "Roboto", sans-serif;
   h2{
       letter-spacing: 2px;
       text-transform: uppercase;
   }
    div{
        display: flex;
        align-items: center;
        gap: 10px;
    }
}

.title_bar {
    display: flex;
    justify-content:space-around;
    align-items: center;
    gap: 20px;
    padding: 10px;
}
.card_info{
    display: flex;
    justify-content: space-around;
    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 0px;
        align-items: center;
        h1{
            font-family: "Roboto", sans-serif;
            margin: 0;
        }
    }

}

`;