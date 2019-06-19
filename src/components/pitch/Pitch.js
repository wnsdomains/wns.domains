import React from 'react'
import styled from 'react-emotion'
import Explainer from './Explainer'
import secure from '../../assets/secure.svg'
import distributed from '../../assets/distributed.svg'
import { modulate } from '../../utils'
import mq from '../../mediaQuery'

import NameAnimation from './NameAnimation'

class ValueCard extends React.Component {
  render() {
    return (
      <div className="value-prop-card">
        <img src={this.props.img} />
        <h3>{this.props.title}</h3>
        <p>{this.props.children}</p>
      </div>
    )
  }
}



const ValuePropContainer = styled.p`
  color: #2B2B2B;
  position: relative;
  padding: 20px 0;
  margin: 0 auto 0;
  font-size: 22px;
  font-weight: 100;
  line-height: 1.3em;
  text-align: center;
  max-width: 75%;
  strong {
    font-weight: 500;
  }

  ${mq.medium(`
    padding: 100px 0;
    font-size: 34px;
  `)};
`

const PitchContainer = styled.div`
  margin: 100px auto 0;

  .card-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 100px;

    ${mq.medium(`
      flex-direction: row;
    `)};
  }

  .value-prop-card {
    width: 100%;
    display: flex;
    flex-direction: column;
   

    ${mq.medium(`
      align-items: flex-start;
      width: 45%;
    `)};
    p {
      font-weight: 300;
    }

    img {
      align-self: center;
      max-width: 80%;
      height:150px;
      
      ${mq.medium(`
        align-self: flex-start;
        max-width: 100%;
      `)};
    }
  }
`

class Pitch extends React.Component {
  render() {
    return (
      <PitchContainer>
      <NameAnimation />
      <ValuePropContainer>
        WNS provides a secure and decentralized way of addressing the blockchain and offchain resources via {''} <br/>
        <strong>human-readable names.</strong>
       </ValuePropContainer>
        <Explainer />
        <div className="card-container container">
          <ValueCard title="Secure." img={secure}>
            WNS is a direct alternative to the familiar Domain Name System and the path to Web 3.0, a truly decentralized Internet.<br/>
            WNS is built on the smart contracts of the Waves network, written in RIDE, providing a completely decentralized approach to managing and registering names. This is the way to Web 3.0.
          </ValueCard>
          <ValueCard title="Truly distributed." img={distributed}>
            WNS is completely distributed, ranging from infrastructure to management. Anyone can register or buy a domain name in allowed zones through auctions on the Waves blockchain.<br/>
            WNS is managed by a decentralized autonomous organization (DAO) providing bureaucracy-free platform infrastructure management.
          </ValueCard>
        </div>
      </PitchContainer>
    )
  }
}

export default Pitch
