import React from 'react'
import styled from 'styled-components'
import { Character } from '../App'
import CharCard from './CharCard'

const StyledCharacters = styled.div`
  color: white;
  cursor: default;
  margin-bottom: 5vh;
  
  .Chars {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  & h1 {
    font-size: 3rem;
    margin-bottom: 3vh;
    color: #fff;
    text-shadow: -1px 0 #18ff28, 0 1px #18ff28, 1px 0 #18ff28, 0 -1px #18ff28;
    text-align: center;
  }

  .Buttons{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2vh;

    & button{
      cursor: pointer;
      margin-left: 2.5vw;
      margin-right: 2.5vw;
      color: white;
      background-color: #070807;
      border: 1px solid #18ff28;
      font-size: 1.2rem;
    }

    & button:disabled{
      display: none;
    }
  }

  & input{
    width: 40vw;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5vh;
    background: #303030;
    color: white;
    border-radius: 4px;
    outline: none;
    font-size: 1.2rem;
    text-align: center;
    border: 0px;
  }

  & input:focus {
    outline: none;
    border: 1px solid #18ff28;
  }

  @media only screen and (max-width: 760px) {

    & input {
      width: 100vw;
    }
  }
`
interface CharactersProps {
  charList: Character[],
  handleNext: () => void,
  handlePrev: () => void,
  charRef: React.RefObject<HTMLDivElement>,
  filter: string,
  handleFilter: (e: any) => void,
  nextChars: string | null;
  prevChars: string | null;
}

const Characters: React.FC<CharactersProps> = (
  { charList, handleNext, handlePrev, charRef, filter, handleFilter, nextChars, prevChars }:
    {
      charList: Character[],
      handleNext: () => void,
      handlePrev: () => void,
      charRef: React.RefObject<HTMLDivElement>,
      filter: string,
      handleFilter: (e: any) => void,
      nextChars: string | null,
      prevChars: string | null,
    }) => {
  return (
    <StyledCharacters ref={charRef}>
      <h1>Characters</h1>
      <input className="input" value={filter} onChange={handleFilter} />
      <div className="Chars">
        {charList && charList.map(char => <CharCard char={char} key={char.id} />)}
      </div>
      <div className="Buttons">
        <button onClick={handlePrev} disabled={!prevChars}>&lt;</button>
        <button onClick={handleNext} disabled={!nextChars}>&gt;</button>
      </div>
    </StyledCharacters>
  )
}

export default Characters