import React from 'react'
import classes from './Info.scss'
import InfoBlock from '../InfoBlock'
import SkillsList from '../SkillsList'
import { INFO_LISTS } from '../../data/info'
import { SKILLS_LISTS } from '../../data/skills'

class Info extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const allSkills = SKILLS_LISTS;
    const allInfo = INFO_LISTS;

    return(
      <div className={classes['root']}>
        <div className={classes['content']}>
          {
            allSkills.map((skills) => {
              return(
                <div className={classes['info-block-wrapper']}>
                  <SkillsList skills={skills} />
                </div>
              );
            })
          }
          {
            allInfo.map((info) => {
              return(
                <div className={classes['info-block-wrapper']}>
                  <InfoBlock info={info} />
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }

}

Info.propTypes = {
}

export default Info
