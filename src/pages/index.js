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
      href="https://gitter.im/ethereum/go-ethereum/name-registry"
      linkText="Join Now"
    >
      <h2>Get involved.</h2>
      <p>
        For more information about WNS, or to help us develop and expand it,
        join our Gitter channel.
      </p>
    </CallToAction>
    <Footer />
  </Fragment>
)

export default IndexPage
