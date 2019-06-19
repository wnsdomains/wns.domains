import React from 'react'
import styled from 'react-emotion'
import mq from '../../mediaQuery'
import heroBG from '../../assets/heroBG.jpg'

const QuoteContainer = styled('div')`
  background-image: url(${heroBG});
  padding: 80px 0;
  margin-bottom: 80px;
  color: #FFFFFF;
  text-align: center;
  
  ${mq.xs(`
    padding: 175px 0;
    margin-bottom: 170px;
    font-size:35px;
  `)};
  
  ${mq.medium(`
    font-size:45px;
  `)};
   
   
`

const Quote = () => (
  <QuoteContainer>
    <div className="container">
       We build Web 3.0 future
    </div>
  </QuoteContainer>
)

export default Quote
