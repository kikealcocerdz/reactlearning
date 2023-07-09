import {useState, useEffect} from 'react'
export function FollowMouse () {
  const enabled = true
  const [position, setPosition] = useState({x:0, y:0})

  useEffect(() =>{
    const handleMove = (event) =>{
      const{clientX, clientY} = event
      setPosition({x: clientX, y:clientY})
    }
    if (enabled) {
    window.addEventListener('pointermove', handleMove)
    }
    return () => {window.removeEventListener('pointermove', handleMove)
                  setPosition({x:0, y:0})}
  }, [enabled])

  return (
    <>
    <div className='card' style={
    { position:'absolute',
    backgroundColor: '#09f',
    borderRadius: '50%',
    opacity: 0.8,
    pointerEvents: 'none',
    left: -20,
    top: -20,
    width: 20,
    height: 20,
    transform: `translate(${position.x}px, ${position.y}px)`
      }}/>
  </>
  )
    }