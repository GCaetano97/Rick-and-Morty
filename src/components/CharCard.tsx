import React, { useState } from 'react'
import styled from 'styled-components'
import { Character } from '../App'

interface Props {
    showDetails: boolean,
}

const StyledCharCard = styled.div<Props>`
    height: ${props => (props.showDetails ? '450px' : '350px')};
    width: ${props => (props.showDetails ? '300px' : '250px')};
    background-color: #303030;
    box-shadow: ${props => (props.showDetails ? '0px 4px 13px 1px #18ff28;' : '0px 2px 6px 1px #18ff28')};
    display: flex;
    flex-direction: column;
    transition: height .25s, width .25s, box-shadow .25s;
    cursor: pointer;

    margin-top: 3vh;
    margin-bottom: 3vh;
    margin-left: 2vw;
    margin-right: 2vw;

    &:hover {
        height: ${props => (props.showDetails ? '450px' : '370px')};
        width: ${props => (props.showDetails ? '300px' : '270px')};
        box-shadow: 0px 4px 13px 1px #18ff28;

        & img {
            width: ${props => (props.showDetails ? '300px' : '270px')};
        }
    }

    & img {
        width: ${props => (props.showDetails ? '300px' : '250px')};
        height: auto;
        transition: width .25s;
    }

    & h5 {
        text-align: center;
    }

    & p {
        margin: 0.4vw;
    }

    @media only screen and (max-width: 760px) {

        & p {
            margin: 1.5vw;
        }    
    }
`

const CharCard = ({ char }: { char: Character }) => {
    const [showDetails, setShowDetails] = useState(false)

    if (typeof char === 'undefined') {
        return null
    }
    return (
        <StyledCharCard onClick={() => setShowDetails(prev => !prev)} showDetails={showDetails}>
            <img src={char?.image} alt={char?.name} />
            <h5>{char.name}</h5>
            {showDetails &&
                <div>
                    <p>Gender: {char.gender}</p>
                    <p>Species: {char.species}</p>
                    <p>Status: {char.status}</p>
                </div>
            }
        </StyledCharCard>
    )
}

export default CharCard