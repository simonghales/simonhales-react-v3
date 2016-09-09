import React from 'react'
import classes from './Projects.scss'
import Project from '../Project'

class Projects extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className={classes['root']}>
        <div className={classes['content']}>
          <div className={classes['project-wrapper']}>
            <Project />
          </div>
          <div className={classes['project-wrapper']}>
            <Project />
          </div>
        </div>
      </div>
    );
  }

}

Projects.propTypes = {
}

export default Projects
