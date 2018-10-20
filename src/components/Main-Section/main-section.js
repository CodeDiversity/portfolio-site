import React from 'react'
import { Link } from 'gatsby'
import { MainSectionDiv } from '../styledComponents'
import Skills from './skills'
import Welcome from './Welcome'





const MainSection = () => (
  <MainSectionDiv>
    <Welcome/>
    <Skills/>
    
  </MainSectionDiv>


)


export default MainSection