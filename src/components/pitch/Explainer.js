import React, { Component } from 'react'
import styled from 'react-emotion'
import { modulate } from '../../utils'
import circleTop from './circleTop.svg'
import circleBottom from './circleBottom.svg'
import circleSide from './circleSide.svg'
import mq from '../../mediaQuery'

const BaseContainer = styled.div`
  margin: 100px 0;
  position: relative;
  font-size: 52px;

  ${mq.medium` 
  `};

  .background {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    position: absolute;
    left: 0;
    top: 0;
  }

  .bg-string {
    font-family: Overpass Mono;
    position: relative;
    color: #61649E;
    font-size: 26px;
    line-height: 1em;
    text-wrap: nowrap;
    opacity: 0.1;

    ${mq.medium` 
      font-size: 52px;
    `};
  }

  .hook {
    margin: 0 auto 0;
    padding-top: 30px;
    position: relative;
    z-index: 100;
    width: 100%;
    text-align: center;
    ${mq.medium`
      padding-top: 95px;
    `};
    h2 {
      color: #2b2b2b;
      background: rgba(255, 255, 255, 0.7);
      font-size: 16px;
      font-weight: 500;
      padding: 10px 5px 0;
      margin-bottom: 0;
      display: inline-block;
      position: relative;
      vertical-align: text-bottom;
      z-index: 2;
      ${mq.medium`
        font-size: 30px;
      `};
    }

    p {
      color: #2b2b2b;
      background: rgba(255, 255, 255, 0.7);
      font-weight: 300;
      font-size: 26px;
      margin-top: -5px;
      display: inline-block;
      vertical-align: text-top;
      ${mq.medium` 
        font-size: 52px;
        
      `};
    }
  }

  .explanation {
    display: none;
    font-size: 20px;
    background: #ffffff;
    box-shadow: 2px 8px 25px 2px rgba(136, 149, 169, 0.12);
    border-radius: 20px;
    font-weight: 300;
    line-height: 1.4em;
    text-align: center;
    position: relative;
    top: -15%;
    padding: 70px;
    max-width: 50%;
    margin: 0 auto 0;
    ${mq.medium`
      display: block
    `};
    img {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }

    .top {
      top: 0;
    }

    .bottom {
      bottom: 0;
    }
  }

  .explanation-mobile {
    background: white;
    font-size: 18px;
    width: 80%;
    margin: 0 auto 30px;
    padding: 50px 30px;
    display: block;
    position: relative;
    box-shadow: 0 5px 20px 2px rgba(223, 223, 223, 0.5);
    border-radius: 20px;

    ${mq.medium`
      display: none
    `};

    strong {
      font-weight: 500;
    }

    .side {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`

const hexStrings = [
  'assets.dex.waves.airdrop.vostok.sasha.waves.btc.dex.waveseth.dex.waves',
  'assets.dex.waves.airdrop.vostok.sasha.waves.btc.dex.waveseth.dex.waves',
  'assets.dex.waves.airdrop.vostok.sasha.waves.btc.dex.waveseth.dex.waves',
  'assets.dex.waves.airdrop.vostok.sasha.waves.btc.dex.waveseth.dex.waves',
  'assets.dex.waves.aairdrop.vostok.sasha.waves.btc.dex.waveseth.dex.waves',
  'assets.dex.waves.aairdrop.vostok.sasha.waves.btc.dex.waveseth.dex.waves',
]

class Explainer extends Component {
  constructor(props) {
    super(props)
    this.explainer = React.createRef()
    hexStrings.forEach((_, i) => {
      this['string' + i] = React.createRef()
    })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scroll)

    this.interval = setInterval(() => {
      if (this.didScroll === true) {
        this.didScroll = false
        this.handleScroll()
      }
    }, 50)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scroll)

    clearInterval(this.interval)
  }

  scroll = () => {
    this.didScroll = true
  }

  handleScroll = () => {
    let bodyHeight = document.body.clientHeight
    let explainer = this.explainer.current
    let explainerHeight = explainer.offsetHeight
    let explainerOffsetTop = explainer.offsetTop - bodyHeight
    let explainerOffsetBottom = explainer.offsetTop + bodyHeight + bodyHeight

    let scrollRange1 = [explainerOffsetTop, explainerOffsetBottom]
    // let scrollRange2 = [0, 200]
    const left = modulate(window.pageYOffset, scrollRange1, [-400, 0], true)
    const left2 = modulate(window.pageYOffset, scrollRange1, [-200, 0], true)
    const left3 = modulate(window.pageYOffset, scrollRange1, [-300, 0], true)
    const left4 = modulate(window.pageYOffset, scrollRange1, [-350, 0], true)

    const right = modulate(window.pageYOffset, scrollRange1, [0, -400], true)

    this.string0.current.style.transform = 'translateX(' + left + 'px)'
    this.string1.current.style.transform = 'translateX(' + left2 + 'px)'
    this.string2.current.style.transform = 'translateX(' + left4 + 'px)'
    this.string3.current.style.transform = 'translateX(' + left2 + 'px)'
    this.string4.current.style.transform = 'translateX(' + left + 'px)'
    this.string5.current.style.transform = 'translateX(' + left3 + 'px)'

    // this.string0.current.style.transform = 'translateX(' + left + 'px)'
    // this.string1.current.style.transform = 'translateX(' + right + 'px)'
    // this.string2.current.style.transform = 'translateX(' + left + 'px)'
    // this.string3.current.style.transform = 'translateX(' + right + 'px)'
    // this.string4.current.style.transform = 'translateX(' + left + 'px)'
    // this.string5.current.style.transform = 'translateX(' + right + 'px)'
  }

  render() {
    return (
      <BaseContainer innerRef={this.explainer}>
        <div className="background">
          {hexStrings.map((s, i) => (
            <div key={i} className="bg-string" ref={this['string' + i]}>
              {s}
            </div>
          ))}
        </div>
        <div className="hook">
          <h2>Simple, human-readable</h2>
          <br />
          <p>sasha.wallet.waves</p>
        </div>
        <div className="explanation">
          WNS allows instead of long and complex addresses, like, {''} <strong>'3PEaRctfe4i7xxYhDjj'</strong>, to set a simple intuitive name, such as {''} <strong>“sasha.waves”</strong>,
          thereby providing an incredible user experience.{''} <br/>
          Want to make a transfer? Just ask a friend for his WNS address, <strong>"myfriend.wallet.waves"</strong>, and translate any WNS compatible wallet.{''} <br/>
          WNS is a complete set of tools for early integration into dapp applications and wallets.
        </div>
        <div className="explanation-mobile">
          Send money to your friend at ‘aardvark.eth’ instead of
          ‘0x4c80xCt40c78xUb…’

        </div>
        <div className="explanation-mobile">
          Interact with your favorite contract at 'mycontract.eth’, or visit a
          Swarm-hosted site at 'swarmsite.eth'

        </div>
      </BaseContainer>
    )
  }
}

export default Explainer
