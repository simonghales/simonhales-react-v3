import React from 'react'
import classes from './Social.scss'
var FontAwesome = require('react-fontawesome');

export const Social = () => (
  <div className={classes['Social']}>
    <div className={classes['social-option']}>
      <a href="">
        <div className={classes['icon']}>
          <FontAwesome name='envelope' />
        </div>
        <div className={classes['text']}>
          simonghales@gmail.com
        </div>
      </a>
    </div>
    <div className={classes['social-option']}>
      <a href="">
        <div className={classes['icon']}>
          <FontAwesome name='twitter' />
        </div>
        <div className={classes['text']}>
          @thesimonhales
        </div>
      </a>
    </div>
    <div className={classes['social-option']}>
      <a href="">
        <div className={classes['icon']}>
          <FontAwesome name='linkedin' />
        </div>
        <div className={classes['text']}>
          Simon Hales
        </div>
      </a>
    </div>
  </div>
)

export default Social
