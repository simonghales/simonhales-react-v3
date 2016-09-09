import React from 'react'
import classes from './InfoBlock.scss'


class InfoBlock extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { info } = this.props;
    const { title, description } = info;

    return(
      <div className={classes['root']}>
        <h3 className={classes['title']}>{title}</h3>
        <p className={classes['description']}>
          {description}
        </p>
      </div>
    );
  }

}

InfoBlock.propTypes = {
  info: React.PropTypes.object.isRequired
}

export default InfoBlock
