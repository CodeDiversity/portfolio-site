import React from 'react'
import { Link } from 'gatsby'
import { HeaderDiv, Container } from '../components/styledComponents'



const Header = ({ siteTitle }) => (
  <HeaderDiv>
    <p className= 'logo'>Logo Here</p>
    <div className='headerButton'>Contact Me</div>
  </HeaderDiv>


)

export default Header
