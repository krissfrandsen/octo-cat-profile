import React from "react"
import { GithubState } from "./context/GithubContext"
import { BrowserRouter as Router } from "react-router-dom"
import "./App.css"
import Hero from "./components/Hero"

function App() {
  return (
    <GithubState>
      <Router>
        <Hero />
      </Router>
    </GithubState>
  )
}

export default App
