"use client"
import { useState } from 'react'
import './page.module.css'
import styles from './page.module.css'


const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const TwitterCard = ({formatuserName, userName, name, isFollowing}) => {
  console.log(isFollowing)
  return (
    <article className='tw-follow-card'>
      <header className= 'tw-follow-card-header'>
        <img className='tw-follow-card-img' alt= "Avatar" 
        src = {`https://unavatar.io/${userName}`} />
        <div>
          <strong>{name}</strong>
          <span>{formatuserName(userName)}</span>
        </div>
      </header>
      <aside>
        <Button text="Follow" handleClick={() => alert("followed")} />
      </aside>
    </article>
    )
}

const App = () => {
  const format = (userName)  => `@${userName}`
  return (
    <>
      <section className='app'>
      <TwitterCard 
      formatuserName={format} 
      userName="kikealcocerdz" 
      name="Enrique Alcocer" 
      isFollowing
      />

      <TwitterCard 
      formatuserName={format} 
      userName="midudev" 
      name="Miguel Durán" 
      isFollowing
      />

      <TwitterCard 
      formatuserName={format} 
      userName="midudev" 
      name="Miguel Durán" 
      isFollowing
      />

      </section>   
    </>
    )
}
  
export default App