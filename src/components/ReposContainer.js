import React from "react"
import { Route } from "react-router-dom"
import { Overview, Repos, Followers } from "../pages"

const ReposContainer = () => {
  return (
    <div className="repos-container">
      <Route path="/overview" component={Overview} />
      <Route path="/repos" component={Repos} />
      <Route path="/followers" component={Followers} />
    </div>
  )
}

export default ReposContainer
