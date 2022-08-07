import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./App.scss"
import axios from "axios"
import { useState, useEffect } from "react"
import Character from "./Character"
import CharacterList from "./CharacterList"

const API_URL = "https://swapi.dev/api/people/"

function App() {
  const [people, setPeople] = useState([])
  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        setPeople(res.data.results)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <Router>
      <div className="App">
        <h1>Star Wars - Characters Listing</h1>
        <div className="App-characters">
          <Routes>
            <Route path="/" element={<CharacterList data={people} />} />
            <Route path="/:characterIndex" element={<Character data={people} />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
