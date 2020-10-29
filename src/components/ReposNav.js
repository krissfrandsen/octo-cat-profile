import React from "react"
import { NavLink } from "react-router-dom"
import "./styles.css"

const ReposNav = () => {
  return (
    <div className="repos-nav">
      <NavLink className="repos-nav-item" activeClassName="active" to="/overview">
        Overview
      </NavLink>
      <NavLink className="repos-nav-item" activeClassName="active" to="/repos">
        Repos
      </NavLink>
      <NavLink className="repos-nav-item" activeClassName="active" to="/followers">
        Followers
      </NavLink>
    </div>
  )
}

export default ReposNav
