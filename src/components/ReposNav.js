import React, { useEffect } from "react"
import { NavLink } from "react-router-dom"

const ReposNav = () => {
  return (
    <div className="reposContainer">
      <NavLink activeClassName="active" to="/overview">
        Overview
      </NavLink>
      <NavLink activeClassName="active" to="/repos">
        Repos
      </NavLink>
      <NavLink activeClassName="active" to="/followers">
        Followers
      </NavLink>
    </div>
  )
}

export default ReposNav
