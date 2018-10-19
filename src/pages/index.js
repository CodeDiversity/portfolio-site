import React from 'react'
import { Link } from 'gatsby'
import Header from '../components/header'
import JumbotronArea from '../components/jumbotron'
import { Container } from '../components/styledComponents.js'

const IndexPage = () => (
  <React.Fragment>
    <Header />
    <Container>

      <JumbotronArea />
    </Container>
  </React.Fragment>
)

export default IndexPage
