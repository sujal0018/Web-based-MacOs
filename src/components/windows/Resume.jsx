import React from 'react'
import MacWindow from './MacWindow'
import './resume.scss'
const Resume = ({windowname,setwindowState}) => {
  return (
      <MacWindow windowname={windowname}  setwindowState={setwindowState}>
          <div className="resumewindow">
              <embed src="/resume.pdf" frameborder="0"></embed>
          </div>
      </MacWindow>
      
  )
}

export default Resume