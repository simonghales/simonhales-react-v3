import React from 'react'
import classes from './Bio.scss'
import HighlightedJob from '../HighlightedJob'
import PlainList from '../PlainList'
import { BIO_LISTS, BIO_WORK_EXPERIENCE, BIO_AWARDS_EDUCATION } from '../../data/bio'

class Bio extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const bioWork = BIO_WORK_EXPERIENCE;
    const bioAwards = BIO_AWARDS_EDUCATION;

    return(
      <div className={classes['root']}>
        <div className={classes['content']}>
          <div className={classes['left-info']}>
            <PlainList data={bioWork} />
          </div>
          <div className={classes['middle-info']}>
            <HighlightedJob />
          </div>
          <div className={classes['right-info']}>
            <PlainList data={bioAwards} />
          </div>
        </div>
      </div>
    );
  }

}

Bio.propTypes = {
}

export default Bio
