"use client"


const Button = ({handleClick, text}, children) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const TwitterCard = ({children, userName="instagram", isFollowing}) => {
  const text = isFollowing ? 'Following' : 'Follow'
  const buttonClassName = isFollowing 
    ? 'tw-follow-card-button-following' 
    : 'tw-follow-card-button'
  const userNameAt = `@${userName}`
  return (
    <article className='tw-follow-card'>
      <header className= 'tw-follow-card-header'>
        <img className='tw-follow-card-img' alt= "Avatar" 
        src = {`https://unavatar.io/${userName}`} />
        <div>
          <strong>{children}</strong>
          <span className="tw-followCard-info">{userNameAt}</span>
        </div>
      </header>
      <aside>
        <button className="tw-fol">
          {text}
        </button>
      </aside>
    </article>
    )
}

const App = () => {
  return (
    <>
      <section className='app'>
      <TwitterCard 
      userName="kikealcocerdz" 
      isFollowing
      >
        enrique1
      </TwitterCard>

      <TwitterCard userName="midudev" isFollowing>
        midu1
      </TwitterCard>

      <TwitterCard 
      userName="midudev"  
      isFollowing
      >
        midu2
      </TwitterCard>
      </section>   
    </>
    )
}
  
export default App