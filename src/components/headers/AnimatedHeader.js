import React from 'react'
import styled from 'react-emotion'
import BG from '../../assets/heroBG.jpg'
import { modulate } from '../../utils'
import logo from '../../assets/wns_logo_big.svg'
import mq from '../../mediaQuery'
import StickyHeader from './StickyHeader'

const HeroBG = styled('div')`
  background: url(${BG});
  background-size: cover;
  background-position: center center;
  height: 100%;
  width: 100%;
  display: flex;
  //justify-content: center;
  //align-items: center;

  .logo {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width:70%;

    ${mq.medium`
      width: 70%
    `};

    ${mq.medium`
      width: 50%
    `};
  }
  .wns-logologo {
    width: 100%;
    margin-bottom: 15px;
    margin-left:40px;
  }

`

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bodyHeight: null,
      pageYOffset: null,
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }
  handleScroll = () => {
    let bodyHeight = document.body.clientHeight
    let scrollRange1 = [0, bodyHeight]
    let scrollRange2 = [0, 200]
    const headerHeight = modulate(
      window.pageYOffset,
      scrollRange1,
      [bodyHeight, 100],
      true
    )

    const logoWidth = modulate(
      window.pageYOffset,
      scrollRange1,
      [100, 50],
      true
    )

    const logoMargin = modulate(
      window.pageYOffset,
      scrollRange1,
      [0, bodyHeight],
      true
    )

    const logoOpacity = modulate(
      window.pageYOffset,
      [bodyHeight - 150, bodyHeight],
      [1, 0],
      true
    )

    //this.header.current.style.height = headerHeight + 'px'
    this.logo.style.width = logoWidth + '%'
    this.logo.style.marginBottom = `-${logoMargin}px`
    this.logo.style.opacity = logoOpacity

    this.setState({
      pageYOffset,
      bodyHeight,
    })
  }
  render() {
    const { bodyHeight, pageYOffset } = this.state

    return (
      <React.Fragment>
        <StickyHeader withScroll={{ bodyHeight, pageYOffset }} />
        <HeroBG innerRef={el => (this.header = el)}>
          <a href="#" className="logo">
            <img src={logo} className="wns-logologo" ref={el => (this.logo = el)} />
          </a>
        </HeroBG>
      </React.Fragment>
    )
  }
}

export default Header
