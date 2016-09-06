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
          <a href="">Skills</a>
          <a href="">Projects</a>
          <a href="">About</a>
        </div>
      </nav>
    );
  }

}

Nav.propTypes = {
}

export default Nav
