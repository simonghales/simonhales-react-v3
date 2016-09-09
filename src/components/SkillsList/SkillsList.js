import React from 'react'
import classes from './SkillsList.scss'


class SkillsList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { skills } = this.props;
    const { title, items } = skills;

    return(
      <div className={classes['root']}>
        <h3 className={classes['title']}>{title}</h3>
        <ul className={classes['list']}>
          {
            items.map((skill) => {
              return(
                <li>
                  {skill}
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }

}

SkillsList.propTypes = {
  skills: React.PropTypes.object.isRequired
}

export default SkillsList
