import styled from "styled-components";

export const TopbarContainer = styled.div`
display: flex;
background-color: #15294B;
color: white;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
padding: 5px 40px;
min-height: 80px;
@media(max-width:600px){
    padding-inline: 5px;
    justify-content: center;
}
i{
    font-size: x-large;
}
`;
export const ModuleTop = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 20px;
text-transform: uppercase;

button{
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    padding: 10px 11px;
    border-radius: 20px;
    border: 1px solid black;
    background-color:#A5AAB9;
    color: white;
    &:active{
        opacity: .7;
    }
}

`;
export const ActionBar = styled.div`
display: flex;
background-color: #15294B;
color: white;
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
    flex-wrap: wrap;
    gap: 20px;
}
.d-none{
    transition: all 1s ease;
    opacity: .5;
}
p{
    cursor: pointer;
    border-radius:5px;
    padding: 5px 10px;
}
.active-program{
    color: black;
    background-color: white;
}
@media(max-width:480px){
    justify-content: center;
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

