import React, { useContext } from "react"
import { GithubContext } from "../context/GithubContext"
import Container from "./Container"
import Nav from "./Nav"
import { User } from "../pages"
import ReposNav from "./ReposNav"
import ReposContainer from "./ReposContainer"
import "./styles.css"

const Hero = () => {
  const { user, error } = useContext(GithubContext)

  return (
    <section className="hero">
      <Nav />
      <Container>
        {user ? (
          <>
            <User />
            <div className="hero-wrapper">
              <ReposNav />
              <ReposContainer />
            </div>
          </>
        ) : (
          <p className="hero-noUser">{error}</p>
        )}
      </Container>
    </section>
  )
}

export default Hero
