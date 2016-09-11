import React from 'react'
import classes from './HighlightedJob.scss'
import MiniProject from '../MiniProject'
import { JOB_HYDRIC_MEDIA } from '../../data/job'

class HighlightedJob extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const job = JOB_HYDRIC_MEDIA;
    const { title, company, description, projects } = job;

    return(
      <div className={classes['root']}>
        <h3 className={classes['title']}>
          <span className={classes['position']}>{title}</span>
          <span className={classes['company']}>{company}</span>
        </h3>
        <div className={classes['description-wrapper']}>
          <p className={classes['description']}>{description}</p>
        </div>
        <div className={classes['projects']}>
          {
            projects.map((data) => {
              return(
                <div className={classes['project-wrapper']}>
                  <MiniProject data={data} />
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }

}

HighlightedJob.propTypes = {
}

export default HighlightedJob
