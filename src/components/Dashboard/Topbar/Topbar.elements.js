import styled from "styled-components";

export const TopbarContainer = styled.div`
display: flex;
background-color: #15294B;
color: white;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
padding: 20px 40px;
border: 1px solid red;
@media(max-width:480px){
    padding-inline: 5px;
}
`;
export const ActionBar = styled.div`
display: flex;
background-color: #15294B;
color: white;
flex-wrap: wrap;
flex-direction: column;
justify-content: space-between;
padding: 10px 40px;
animation: fluid 0.6s ease-in-out;
@keyframes fluid{
    from{
    opacity: 0;
    }
    to{
        opacity: 1;
    }
}
div{
    display: flex;
    gap: 20px;
}
.d-none{
    display: none;
}
p{
    border-radius:5px;
    padding: 5px 10px;
}
.active-program{
    color: black;
    background-color: white;
}

`;


export const TitleContainer = styled.div`
display: flex;
align-items: center;
flex-wrap: wrap;
justify-content: center;
gap: 30px;
h4{
    margin: 0;
}
div{p{
    margin: 0;
}
.open{
    transition: all .5s ease-in-out;
    transform: rotate(180deg);
}
.close{
    transition: all .5s ease-in-out;
   
}
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 10px;
}
`;

export const ProgressContainer = styled.div`
width: 200px ;
display: flex;
flex-direction: column;

P{
    margin-left: auto;
}
`;

