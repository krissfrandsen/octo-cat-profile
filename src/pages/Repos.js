import React, { useContext } from "react"
import { GithubContext } from "../context/GithubContext"
import "./styles.css"

const Repos = () => {
  const { repos } = useContext(GithubContext)

  return (
    <>
      {repos &&
        repos.map((repo, index) => (
          <a key={index} href={repo.html_url} target="_blank" rel="noopener noreferrer" className="repos-wrap">
            <div className="repos">
              {repo.name && <p>{repo.name}</p>}
              <div className="repos-info">
                {repo.language && (
                  <p>
                    <span></span>
                    {repo.language}
                  </p>
                )}
                {repo.updated_at && <p>{repo.updated_at} </p>}
              </div>
            </div>
          </a>
        ))}
    </>
  )
}

export default Repos
