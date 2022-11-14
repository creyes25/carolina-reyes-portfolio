import hyphenateWords from "./hyphenateWords"
import projects from "../data/project"

function findProject(title) {
  const project = projects.filter(project => 
    hyphenateWords(project.title) === title
  )
  return project[0]

}

export default findProject