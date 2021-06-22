import React from 'react'
import styled from 'styled-components'
import heroVideo from '../assets/heroVideo.mp4';

const StyledHero = styled.div`
  text-align: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
  
  & h1 {
    font-size: 7em;
    margin-bottom: 0px;
  }

  & h3 {
    font-size: 4em;
    margin-top: 0px;
  }

  & h1,h3 {
    color: #fff;
    text-shadow: -1px 0 #18ff28, 0 1px #18ff28, 1px 0 #18ff28, 0 -1px #18ff28;
    font-family: MyFont;
  }

  & video {
    object-fit: cover;
    width: 98vw;
    height: 90vh;
    position: absolute;
    top: -15%;
    left: 0;
  }

  & span {
    position: relative;
    top: 33%
  }

  @media only screen and (max-width: 760px) {

    & video {
      width: 100vw;
    }

    & h1 {
        font-size: 3.5rem;
        margin-bottom: 0px;
    }

    & h3 {
      font-size: 2rem;
    }

    & span {
      position: relative;
      top: 30%
    }
  }
  
`

const Hero = () => {
  return (
    <StyledHero>
      <video autoPlay muted loop>
        <source src={heroVideo} type="video/mp4" />
      </video>
      <span>
        <h1>
          Rick and Morty
        </h1>
        <h3>
          Hatch Challenge
        </h3>
      </span>
    </StyledHero>
  )
}

export default Hero