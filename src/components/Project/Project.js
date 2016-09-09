import React from 'react'
import classes from './Project.scss'


class Project extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className={classes['root']}>
        <div className={classes['thumbnail']}>
        </div>
        <div className={classes['info']}>
          <h3 className={classes['title']}>Project Title</h3>
          <h4 className={classes['subtitle']}>Subtitle</h4>
          <p className={classes['description']}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem commodi consectetur
            delectus deleniti dignissimos ducimus eos.
          </p>
          <p className={classes['description']}>
            Facere facilis, incidunt iste labore natus nisi non obcaecati possimus repellat soluta vitae.
          </p>
          <div>
            <a href="">visit website</a>
          </div>
        </div>
      </div>
    );
  }

}

Project.propTypes = {
}

export default Project
