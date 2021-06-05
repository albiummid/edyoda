import styled from "styled-components";

export const ModulesContainer = styled.div`
display: flex;
&>i{
    margin: 10px;
}
`;

export const Container = styled.div`
font-family: "Raleway", sans-serif;
.modules_section{
    h1{
        margin: 20px 0;
    }
    .slider_buttons{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;
            i{
                color: #6398FF;
                font-size:30px;
            }
        }
    .card_container{
        display: flex; 
        flex-wrap:wrap;
        gap: 40px;
        margin: 20px auto;
        justify-content: center;
       
    }
}
margin: 30px 50px;
@media(max-width:600px){
    padding: 0;
    margin: 20px;
}
`;

export const Summary = styled.div`
ol>li{
    margin-left:15px;
}

`;
export const ContainerHeader = styled.div`
font-family: 'Roboto';
margin:0px;
max-width: 300px;


`;
export const SideNav = styled.div`
font-family: "Roboto", sans-serif;
width: 250px;
min-height: 100vh;
background-color: #e0e6f2;
padding: 30px 0px;
transition: all 1s ease;
i{
    float: right;
    padding-right: 10px;
    color: red;
    font-size: large;
}
h3{
    padding:10px 20px;
}
`;