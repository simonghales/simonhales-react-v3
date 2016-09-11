import React from 'react'
import classes from './Feet.scss'
import ContactDetails from '../ContactDetails'

class Feet extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className={classes['root']}>
        <div className={classes['content']}>
          <ContactDetails />
        </div>
      </div>
    );
  }

}

Feet.propTypes = {
}

export default Feet
