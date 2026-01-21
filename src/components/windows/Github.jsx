import React from 'react'
import MacWindow from './MacWindow'
import Githubdata from '../../assets/github.json'
import './github.scss'

const GitCard = ({data={id:1,image:"",title:'',description:"",tags:[],repoLink:"",demoLink:""}}) => {
    return <div className="card">

        <img src={data.image} alt="" />
        <h1>{data.title}</h1>
        <p className='description'>{data.description}</p>
        
        <div className="tags">
            {
                data.tags.map((tag) => {
                    return <p className='tag'>{ tag}</p>
                })
            }
        </div>

        <div className="urls">
            <a href={data.repoLink}>Repository</a>
            {data.demoLink && <a href={data.demoLink}>Demo link</a>}
        </div>
        
    </div>
}

const Github = ({windowname,setwindowState}) => {
  return (
      <MacWindow windowname={windowname}  setwindowState={setwindowState}>
          <div className="cards">
              {Githubdata.map((projects) => {
                  return <GitCard key={projects.id} data={projects}></GitCard>
              })}
          </div>
    </MacWindow>
      
  )
}

export default Github