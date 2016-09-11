import React from 'react'
import classes from './ContactDetails.scss'
import Social from '../Social'
import { MAIN_DATA } from '../../data/main'
import { SOCIAL_LINKS } from '../../data/social'

class ContactDetails extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const mainData = MAIN_DATA;
    const socialLinks = SOCIAL_LINKS;
    const { authorName, siteTitle } = mainData;

    return(
      <div className={classes['root']}>
        <div className={classes['content']}>
          <div className={classes['side']}>
            <div className={classes['thumb']}></div>
          </div>
          <div className={classes['main']}>
            <div className={classes['text-wrapper']}>
              <h4 className={classes['author-name']}>{authorName}</h4>
              <h3 className={classes['site-title']}>{siteTitle}</h3>
            </div>
            <div className={classes['social-wrapper']}>
              <Social data={socialLinks} />
            </div>
          </div>
        </div>
      </div>
    );
  }

}

ContactDetails.propTypes = {
}

export default ContactDetails
