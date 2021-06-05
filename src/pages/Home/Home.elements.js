import styled from "styled-components";

export const Header = styled.div`
font-family: "Raleway", sans-serif;
display: flex;
justify-content: center;
gap: 20px;
flex-wrap: wrap;
.text-brand{
    color: #0096FF;
}
.details{
h4{
    color: #0096FF;
    text-align: right;
    padding: 5px;
    
}
}
.details_container{ 
    display: flex;
justify-content: center;
flex-wrap: wrap;
box-shadow: 0px 10px 40px gray;
border: 1px solid #CCEDFF;
border-radius: 10px;
}

.modules{
    padding: 30px 50px;
}
.progress_bar{
width: 200px;
height: 40px;
}
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
.status{
    display: flex;
    justify-content: center;
    gap: 20px;
}
.visual_bar{
    font-family: "Roboto", sans-serif;
    display: flex;
    gap: 30px;
    padding: 10px;
    margin: 5px 0;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    @media(max-width:600px){
gap:15px;
border:1px solid #CCEDFF
    }

}
.plan{
    padding: 30px 50px;
    border-left:1px solid #CCEDFF;
    .session_action{
        margin-top: 100px;
        display: flex;
        justify-content: center;
        align-items:center;
        flex-direction: column;
        button{
            margin: 10px auto;
            background: linear-gradient(90deg,#0096FF,#024AFF);
            border-radius: 20px;
            border: none;
            outline: none;
            padding: 10px 20px;
            color: white;
        }
    }
    div,h3{
        margin-top: 20px;
    }
    @media(max-width:900px){
        border-left:none;
    border-top: 2px solid #CCEDFF;
}
button{
    padding: 5px 30px;
}
}
.progress{
    border: 1px solid #CCEDFF;
    padding: 30px 50px;
    box-shadow: 0px 10px 40px gray;
    border-radius: 10px;
    margin-top:35px
}

`;
export const ProgressBar = styled.div`
border: 1px solid #CCEDFF;
padding: 10px 15px;
width: 250px;
margin: 30px auto;
.bar_info{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
}


`;
