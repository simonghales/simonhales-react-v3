import React from 'react'
import classes from './Intro.scss'
import Nav from '../Nav'
import Social from '../Social'

export const Intro = () => (
  <div className={classes['root']}>
    <div className={classes['content']}>
      <div className={classes['text-wrapper']}>
        <h2 className={classes['author-title']}>Simon Hales</h2>
        <h1 className={classes['main-title']}>Front End Developer</h1>
        <h3 className={classes['sub-title']}>AngularJS & ReactJS</h3>
        <div className={classes['social-wrapper']}>
          <Social />
        </div>
      </div>
      {/*<div className={classes['nav-wrapper']}>*/}
        {/*<Nav />*/}
      {/*</div>*/}
    </div>
  </div>
)

export default Intro
