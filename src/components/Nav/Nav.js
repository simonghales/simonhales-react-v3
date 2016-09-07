import React from 'react'
import classes from './Nav.scss'


class Nav extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <nav className={classes['root']}>
        <div className={classes['content']}>
          <a href="" className={classes['link']}>Home</a>
          <a href="" className={classes['link']}>Skills</a>
          <a href="" className={classes['link']}>Projects</a>
          <a href="" className={classes['link']}>About</a>
        </div>
      </nav>
    );
  }

}

Nav.propTypes = {
}

export default Nav
