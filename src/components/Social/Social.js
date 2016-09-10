import React from 'react'
import classes from './Social.scss'
import SocialLink from '../SocialLink'

class Social extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { data } = this.props;

    return(
      <div className={classes['Social']}>
        {
          data.map((link) => {
            return(
              <div className={classes['social-option']}>
                <SocialLink data={link} />
              </div>
            );
          })
        }
      </div>
    );
  }

}

Social.propTypes = {
  data: React.PropTypes.object.isRequired
}

export default Social