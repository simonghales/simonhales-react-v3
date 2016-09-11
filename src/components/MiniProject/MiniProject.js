import React from 'react'
import classes from './MiniProject.scss'
import ProjectExternalLink from '../ProjectExternalLink'

class MiniProject extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { data } = this.props;
    const { title, description, image, external_links } = data;

    return(
      <div className={classes['root']}>
        <div className={classes['image']}>
          <img src={image} alt="Project Image"/>
        </div>
        <div className={classes['info']}>
          <h4 className={classes['title']}>{title}</h4>
          <p className={classes['description']}>{description}</p>
          <div className={classes['external-links-wrapper']}>
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
      </div>
    );
  }

}

MiniProject.propTypes = {
  data: React.PropTypes.object.isRequired
}

export default MiniProject
