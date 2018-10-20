import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'gatsby'
import Header from '../components/header'
import JumbotronArea from '../components/jumbotron'
import MainSection from '../components/Main-Section/main-section'
import { Container } from '../components/styledComponents.js';


const IndexPage = () => (
  <Container>
    <Header />
    <JumbotronArea />
    <MainSection />
  </Container>

)

export default IndexPage
