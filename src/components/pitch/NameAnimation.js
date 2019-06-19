import React, { Component } from 'react'
import { TimelineMax, Power1 } from 'gsap'
import cross from '../../assets/cross.png'
import tick from '../../assets/tick.svg'
import styled from 'react-emotion'
import mq from '../../mediaQuery'

const NameAnimationContainer = styled.div`
  position: relative;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  p {
    font-size: 32px;
    text-align: center;
  }
  .name {
    display: none;
    
     ${mq.xs(`
        font-size:15px;
    `)};
   
    ${mq.medium(`
      font-size:35px;
      `)};
    }
    
   .hash {
    display: none;
    font-size:15px;
    ${mq.xs(`
      font-size:15px;
   `)};
   
    ${mq.medium(`
      font-size:35px;
    `)};
  }
  img {
    opacity: 0;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
     ${mq.xs(`
      width:30%;
    `)};

    ${mq.medium(`
      width:inherit;
    `)};
  }
`

class NameAnimation extends Component {
  constructor(props) {
    super(props)
    this.hash = React.createRef()
    this.hash2 = React.createRef()
    this.hash3 = React.createRef()
    this.name = React.createRef()
    this.name2 = React.createRef()
    this.name3 = React.createRef()
    this.cross = React.createRef()
    this.tick = React.createRef()
    this.tl = new TimelineMax()
  }
  componentDidMount() {
    const hashStart = (node, num) => {
      this.tl.addLabel(`hashStart${num}`)
      this.tl.to(node, 0, { display: 'block' })
      this.tl.staggerFrom(
        node.children,
        0.01,
        { opacity: 0, ease: Power1.easeIn },
        0.05,
        '+=0.1'
      )
      this.tl.to(
        this.cross.current,
        0.4,
        { opacity: 1, ease: Power1.easeIn },
        `hashStart${num}+=1`
      )
      this.tl.addLabel(`hashEnd${num}`)
      this.tl.to(
        node,
        0.3,
        {
          opacity: 0,
          display: 'none',
          ease: Power1.easeIn,
        },
        `hashEnd${num}+=1`
      )
      this.tl.to(
        this.cross.current,
        0.4,
        { opacity: 0, ease: Power1.easeIn },
        `hashEnd${num}+=1`
      )
    }

    const nameStart = (node, num) => {
      this.tl.addLabel(`nameStart{num}`)

      this.tl.to(node, 0, { display: 'block' })
      this.tl.staggerFrom(
        node.children,
        0.01,
        { opacity: 0, ease: Power1.easeIn },
        0.08,
        '+=0.1'
      )
      this.tl.to(
        this.tick.current,
        0.4,
        { opacity: 1, ease: Power1.easeIn },
        '-=0.5'
      )
      this.tl.addLabel(`nameEnd${num}`)
      this.tl.to(
        this.tick.current,
        0.2,
        { opacity: 0, ease: Power1.easeIn },
        `nameEnd${num}+=2`
      )
      this.tl.to(node, 0, { display: 'none' }, `nameEnd${num}+=2`)
    }

    hashStart(this.hash.current, 1)
    nameStart(this.name.current, 1)
    hashStart(this.hash2.current, 2)
    nameStart(this.name2.current, 2)
    hashStart(this.hash3.current, 3)
    nameStart(this.name3.current, 3)
    this.tl.repeat(-1)
  }
  render() {
    return (
      <NameAnimationContainer className="name-animation">
        <img ref={this.cross} src={cross} />
        <img ref={this.tick} src={tick} />
        <p className="hash" ref={this.hash}>
          {'3PEaRctfe4i7xxYhDjj22Q8SSZdvEAb3g4D'
            .split('')
            .map((e, i) => <span key={i}>{e}</span>)}
        </p>
        <p className="name" ref={this.name}>
          {'sasha.mywallet.waves'
            .split('')
            .map((e, i) => <span key={i}>{e}</span>)}
        </p>
        <p className="hash" ref={this.hash2}>
          {'3PEaRctfe4i7xxYhDjj22Q8SSZdvEAb3g4D'
            .split('')
            .map((e, i) => <span key={i}>{e}</span>)}
        </p>
        <p className="name" ref={this.name2}>
          {'trading.btc.dex'.split('').map((e, i) => <span key={i}>{e}</span>)}
        </p>
        <p className="hash" ref={this.hash3}>
          {'3PEaRctfe4i7xxYhDjj22Q8SSZdvEAb3g4D'
            .split('')
            .map((e, i) => <span key={i}>{e}</span>)}
        </p>
        <p className="name" ref={this.name3}>
          {'ipfs.dex.waves'.split('').map((e, i) => <span key={i}>{e}</span>)}
        </p>
      </NameAnimationContainer>
    )
  }
}

export default NameAnimation
