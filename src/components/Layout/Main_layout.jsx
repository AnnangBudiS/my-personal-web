import React from 'react'
import About from '../Fragment/About'
import Projects from '../Fragment/Projects'
import Skills from '../Fragment/Skills'
import Course from '../Fragment/Course'

const Content = () => {
  return (
    <div className='max-w-md py-52 font-mono'>
        <About />
        <Projects />
        <Skills />
        <Course />
    </div>
  )
}

export default Content