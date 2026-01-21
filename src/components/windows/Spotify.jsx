import React from 'react'
import MacWindow from './MacWindow'
import './spotify.scss'

const Spotify = ({windowname,setwindowState}) => {
  return (
      <MacWindow windowname={windowname}  setwindowState={setwindowState} width='30vw'>
          <div className="spotify-window">
              <iframe data-testid="embed-iframe" style={{borderradius:"12px"}} src="https://open.spotify.com/embed/playlist/37i9dQZF1DWXVJK4aT7pmk?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>
    </MacWindow>
  )
}

export default Spotify