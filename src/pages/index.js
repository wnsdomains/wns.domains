import React, { Fragment } from 'react'
import Pitch from '../components/pitch/Pitch'
import Quote from '../components/quote/Quote'
import CallToAction from '../components/callToAction/CallToAction'
import Header from '../components/headers/AnimatedHeader'
import Footer from '../components/footer/Footer'

const IndexPage = () => (
  <Fragment>
    <Header />
    <Pitch />
    <CallToAction
      href="https://gitter.im/Waves-Name-Service/community"
      linkText="Join Now"
    >
      <p>
        Got a question? Do not hesitate to contact us
      </p>
    </CallToAction>
    <Footer />
  </Fragment>
)

export default IndexPage
