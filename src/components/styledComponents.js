import styled from 'styled-components'

export const Container = styled.div`
width:100%;
margin: auto;
box-sizing: border-box;

`
export const HeaderDiv = styled.div`
padding: 20px ;
display: flex;
justify-content: space-between;
flex-direction: row;
width: 100%;
background-color:navy;
color:white;
  
.headerButton{
  border-radius: 5px;
  background-color:white;
  color:navy;
  display:flex;
  align-items:center;
  padding: 10px;
}

`

export const Jumbotron = styled.div `
font-family: IBM Plex Mono;

padding-top: 5%;
display:flex;
align-items: center;
flex-direction:column;
justify-content: space-between;
height:100%;
// border: 1px solid blue;

.jumboText{
  h1{
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
  margin-bottom: 100px;
  box-shadow: 5px 10px #888888;
}
`



