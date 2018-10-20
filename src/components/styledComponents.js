import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`;
export const HeaderDiv = styled.div`
display: flex;
justify-content: space-around;
flex-direction: row;
max-width: 100%;
height: 70px;
align-items: center;

.logo{
  margin-left 20px;
  
}
  
.headerButton{

}

`;
export const Jumbotron = styled.div`
font-family: IBM Plex Mono;
max-width:100%
padding-top: 5%;
display:flex;
align-items: center;
flex-direction:column;
justify-content: space-between;
height:100%;
// border: 1px solid blue;

.jumboText{
  h1{
    margin-top: 50px;
    margin-bottom: 15px;

  }
  font: IBM Plex Mono;
  display: flex;
  flex-direction:column;
  align-items:center;
  margin-bottom: 4%;
  
}

.webDevelopment{
  width: 500px;
  height: 300px;
}

.avatar{
  height: 200px;
  width: 200px;
  margin-bottom: 75px;
  box-shadow: 5px 10px #888888;
}
`;

export const MainSectionDiv = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
`;

export const SkillsDiv = styled.div`
  width: 75%;
  background-color: white;
  height: 500px;
  border-radius: 15px;
  margin-top: -50px;
`;
export const WelcomeDiv = styled.div`
background-image: linear-gradient(to right,blue,violet);
color:white;
overflow: scroll;
overflow-x:hidden;
::-webkit-scrollbar{
  width: 0px;
  background: transparent;
}
height: 100%;
width: 100%;
display:flex;
flex-direction: column;
align-items:center;
justify-content:center;
h1, p {
  max-width: 55%;
}

h1{
  text-align:center;
  margin-bottom 15px;
}

p{
  font-size: 1.6rem;
}

`;
