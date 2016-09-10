import React from 'react'
import classes from './Projects.scss'
import Project from '../Project'
import { PROJECTS_LIST  } from '../../data/projects'

class Projects extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const allProjects = PROJECTS_LIST;

    return(
      <div className={classes['root']}>
        <div className={classes['content']}>
          {
            allProjects.map((project) => {
              return(
                <div className={classes['project-wrapper']}>
                  <Project project={project} />
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }

}

Projects.propTypes = {
}

export default Projects
