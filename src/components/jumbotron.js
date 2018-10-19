import React from 'react'
import { Link } from 'gatsby'
import { Jumbotron } from './styledComponents'





const JumbotronArea = () => (
  <Jumbotron>
    <div className='jumboText'>
      <h1 className='IBMPlexMono'>Full Stack Web Developer & Designer</h1>
      <p className='IBMPlexMono'>Helping create the web one line at a time</p>
    </div>

    <img className='avatar' src={require('../images/myAvatar.png')} alt="Michael Trew"></img>
    <img className='webDevelopment' src={require('../images/webDevelopment.png')} alt='web development'></img>

  </Jumbotron>


)

export default JumbotronArea