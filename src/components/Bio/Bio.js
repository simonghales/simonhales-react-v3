import React from 'react'
import classes from './Bio.scss'


class Bio extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className={classes['root']}>
        <div className={classes['content']}>
          <h1>Bio</h1>
        </div>
      </div>
    );
  }

}

Bio.propTypes = {
}

export default Bio
