import React, { useState } from 'react'
import '../src/app.scss'
import Dock from './components/Dock'
import Nav from './components/Nav'
import Github from './components/windows/Github'
import MacWindow from "./components/windows/MacWindow";
import Resume from './components/windows/Resume'
import Note from './components/windows/Note'
import Spotify from './components/windows/Spotify'
import Cli from './components/windows/Cli'
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const App = () => {
    const [windowState, setwindowState] = useState({
        github: false,
        note: false,
        resume: false,
        spotify: false,
        cli: false, 
    })
  return (
      <main>
          <Nav windowState={windowState} setwindowState={setwindowState} />
          <Dock windowState={windowState} setwindowState={setwindowState} />
          {windowState.github && <Github windowname='github' setwindowState={setwindowState} />}
          {windowState.note && <Note windowname='note' setwindowState={setwindowState} />}
          
          {/* {windowState.resume && <Resume windowname='resume' setwindowState={setwindowState} />}
           */}
          {windowState.spotify && <Spotify windowname='spotify' setwindowState={setwindowState} />}
          {windowState.cli && <Cli windowname='cli'setwindowState={setwindowState}  />}    
          
          
    </main>
  )
}

export default App