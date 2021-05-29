import styled from "styled-components";

export const CardContainer = styled.div`
box-shadow: 0px 10px 40px;
padding: 10px 12px;
width: 360px;
border-radius: 10px;
.module_info{
   h2{
       letter-spacing: 2px;
       text-transform: uppercase;
   }
    div{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }
}

.title_bar {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 10px;

}
.card_info{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

}

`;