import React from 'react'
import Bio from '../../../components/Bio'
import Intro from '../../../components/Intro'
import Info from '../../../components/Info'
import Projects from '../../../components/Projects'

export const HomeView = () => (
  <div>
    <Intro />
    <Info />
    <Projects />
    <Bio />
  </div>
)

export default HomeView
