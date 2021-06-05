import styled from "styled-components";
export const InstructorContainer = styled.div`
font-family: "Raleway", sans-serif;
margin: 60px 80px;
background-color:white;
box-shadow: 0 10px 40px gray;
border: 1px solid #CCEDFF;
border-radius: 5px;
`;

export const Header = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
flex-wrap: wrap;
background-color: #F3F3F3;
gap: 20px;
padding: 30px 50px;
margin-top:100px;
.video{
    max-width: 400px;
}
.profile{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content:space-between;
    gap: 50px;
    .social{
        display: flex;
        flex-direction: column;
        gap: 20px;
        img{
            width: 150px;
        }
       div{
        display: flex;
        align-items: center;
    justify-content: center;
    gap: 20px;
       }
       a{
           text-decoration: none;
           color: gray;
           i{
               font-size: 25px;
           }
       }
    }
}
`;

export const Stats = styled.div`
font-family: 'Roboto', sans-serif ;
margin: 30px 50px;

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
padding: 30px 50px;

.skillContainer{
    display: flex;
    gap: 50px;
    flex-wrap: wrap;
}
`;
export const SkillCard = styled.div`
   font-family: 'Roboto', sans-serif ;
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
padding-bottom: 10px;
`;
export const TagLine = styled.div`
padding: 30px 50px;
`;
export const About = styled.div`
padding: 30px 50px;
`;