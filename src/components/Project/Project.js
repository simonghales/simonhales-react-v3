import React from 'react'
import classes from './Project.scss'
import ProjectExternalLink from '../ProjectExternalLink'
import ProjectImage from '../../static/images/projects/soonis_thumb.jpg'
var FontAwesome = require('react-fontawesome')

class Project extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { project } = this.props;

    const { title, subtitle, description, external_links, image } = project;

    return(
      <div className={classes['root']}>
        <div className={classes['thumbnail']}>
          <img src={image} />
        </div>
        <div className={classes['info']}>
          <h3 className={classes['title']}>{title}</h3>
          <h4 className={classes['subtitle']}>{subtitle}</h4>
          {
            description.map((text) => {
              return(
                <p className={classes['description']}>{text}</p>
              );
            })
          }
          {
            external_links.map((data) => {
              return(
                <div className={classes['link-wrapper']}>
                  <ProjectExternalLink data={data} />
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }

}

Project.propTypes = {
  project: React.PropTypes.object.isRequired
}

export default Project
