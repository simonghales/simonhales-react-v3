import React from 'react'
import classes from './Intro.scss'
import Social from '../Social'
import { SOCIAL_LINKS } from '../../data/social'

class Intro extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const allSocial = SOCIAL_LINKS;

    return(
      <div className={classes['root']}>
        <div className={classes['content']}>
          <div className={classes['text-wrapper']}>
            <h2 className={classes['author-title']}>Simon Hales</h2>
            <h1 className={classes['main-title']}>Front End Developer</h1>
            <h3 className={classes['sub-title']}>AngularJS & ReactJS</h3>
            <div className={classes['social-wrapper']}>
              <Social data={allSocial} />
            </div>
          </div>
        </div>
      </div>
    );
  }

}

Intro.propTypes = {
}

export default Intro