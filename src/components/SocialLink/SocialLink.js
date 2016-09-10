import React from 'react'
import classes from './SocialLink.scss'
var FontAwesome = require('react-fontawesome')

class SocialLink extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { data } = this.props;
    const { id, icon, label, open_externally, url } = data;

    let anchorProps = {
      href: url,
      className: classes['link'],
    };

    if(open_externally) {
      anchorProps.target = "_blank";
    }

    return(
      <div className={classes['root']}>
        <a {...anchorProps}>
          <div className={classes['icon']}>
            <FontAwesome name={icon} />
          </div>
          <div className={classes['text']}>
            {label}
          </div>
        </a>
      </div>
    );
  }

}

SocialLink.propTypes = {
  data: React.PropTypes.object.isRequired
}

export default SocialLink
