import styled from "styled-components";

export const Header = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
flex-wrap: wrap;
background-color: #F3F3F3;
gap: 20px;
.video{
    width: 500px;
}
.profile{
    display: flex;
    align-items: center;
    justify-content:space-between;
    gap: 50px;
    .social{
        img{
            width: 150px;
        }
       div{
        display: flex;
        align-items: center;
    justify-content: center;
    gap: 10px;
       }
       a{
           text-decoration: none;
           color: black;
           i{
               font-size: 25px;
           }
       }
    }
}
`;

export const Stats = styled.div`
margin-top: 80px;

div{
    display: flex;
    align-items: center;
    gap: 50px;
    div{
        display: flex;
        gap: 0;
    flex-direction: column;
    }
}
`;

export const Skills = styled.div`
margin-top: 80px;
.skillContainer{
    display: flex;
    gap: 50px;
    flex-wrap: wrap;
}
`;
export const SkillCard = styled.div`
display: flex;
align-items: center;
flex-direction: column;
gap: 10px;
justify-content: center;
img{
    display: block;
    width: 80px;

}
`;
export const Title = styled.h3`
margin-bottom:20px;
`;
export const TagLine = styled.div`
margin-top: 80px;
`;
export const About = styled.div`

margin-top: 80px;
`;