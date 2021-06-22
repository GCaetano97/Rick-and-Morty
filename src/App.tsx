import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios'
import './App.css';
import Hero from './components/Hero'
import Characters from './components/Characters'

export interface Character {
  id: number,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  origin: string,
  location: string,
  image: string,
  episode: string,
  url: string,
  created: string,
}

function App() {
  const [characters, setCharacters] = useState<Character[]>([])
  const [nextChars, setNextChars] = useState<null | string>('https://rickandmortyapi.com/api/character')
  const [tempNext, setTempNext] = useState<null | string>('')
  const [prevChars, setPrevChars] = useState<null | string>('')
  const charRef = useRef<HTMLDivElement>(null)
  const [filter, setFilter] = useState('')
  const filterDebouncer = useRef<any>(null)

  const handleNextPage = () => {
    setNextChars(tempNext)
    if (charRef.current) {
      charRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleBackPage = () => {
    if (prevChars !== null) {
      setNextChars(prevChars)
      if (charRef.current) {
        charRef.current.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const handleFilterChange = React.useCallback((e: any)=>{
    setFilter(e.target.value)
    if (e.target.value === '') {
      setNextChars('https://rickandmortyapi.com/api/character')
    }
  }, [])

  useEffect(() => {
    if (filter === '') {
      const getChars = async () => {
        if (nextChars !== null) {
          const res = await axios.get(nextChars)
          setCharacters(res.data.results)
          setTempNext(res.data.info.next)
          setPrevChars(res.data.info.prev)
          return res.data
        }
      }
      getChars()
    } else {
      filterDebouncer.current = setTimeout(() => {
        const getFilteredChars = async () => {
          try {
            const res = await axios.get(`https://rickandmortyapi.com/api/character/?name=${filter}`)
            if (!res) {
              setCharacters([])
            }
            setCharacters(res.data.results)
            setTempNext(res.data.info.next)
            setPrevChars(res.data.info.prev)
            return res.data
          }
          catch {
            setCharacters([])
          }
        }
        const filteredChars = getFilteredChars()
        if (!filteredChars) {
          setCharacters([])
        }
      }, 400)
    }
    return () => {
      if(filterDebouncer.current){
        clearTimeout(filterDebouncer.current)
      }
    }

  }, [nextChars, filter])


  return (
    <>
      <Hero />
      <Characters
        charList={characters}
        handleNext={handleNextPage}
        handlePrev={handleBackPage}
        charRef={charRef}
        filter={filter}
        handleFilter={handleFilterChange}
        nextChars={tempNext}
        prevChars={prevChars}
      />
    </>
  );
}

export default App;
