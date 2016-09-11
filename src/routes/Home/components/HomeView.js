import React from 'react'
import Bio from '../../../components/Bio'
import Feet from '../../../components/Feet'
import Intro from '../../../components/Intro'
import Info from '../../../components/Info'
import Projects from '../../../components/Projects'

export const HomeView = () => (
  <div>
    <Intro />
    <Info />
    <Projects />
    <Bio />
    <Feet />
  </div>
)

export default HomeView
