import React from 'react'
import { Link } from 'gatsby'
import { HeaderDiv, Container } from '../components/styledComponents'
import {Button} from 'reactstrap'



const Header = ({ siteTitle }) => (
  <HeaderDiv>
    <p className= 'logo'>Logo Here</p>
    <Button className= 'headerButton'color="primary">Contact Me</Button>
  </HeaderDiv>


)

export default Header
