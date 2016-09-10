import React from 'react'
import classes from './ProjectExternalLink.scss'
var FontAwesome = require('react-fontawesome')

class ProjectExternalLink extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { data } = this.props;
    const { icon, label, url } = data;

    return(
      <div className={classes['root']}>
        <a href={url} target="_blank"
           className={classes['link']}>
              <span className={classes['icon']}>
                <FontAwesome name={icon} />
              </span>
          <span className={classes['text']}>{label}</span>
        </a>
      </div>
    );
  }

}

ProjectExternalLink.propTypes = {
  data: React.PropTypes.object.isRequired
}

export default ProjectExternalLink