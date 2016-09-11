import React from 'react'
import classes from './PlainList.scss'


class PlainList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { data } = this.props;
    const { title, items } = data;

    return(
      <div className={classes['root']}>
        <h3 className={classes['title']}>{title}</h3>
        <ul className={classes['list']}>
          {
            items.map((item) => {
              const { title: itemTitle, subtitle: itemSubtitle } = item;
              return(
                <li>
                  <div>
                    <div className={classes['itemTitle']}>{itemTitle}</div>
                    <div className={classes['itemSubtitle']}>{itemSubtitle}</div>
                  </div>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }

}

PlainList.propTypes = {
  data: React.PropTypes.object.isRequired
}

export default PlainList
