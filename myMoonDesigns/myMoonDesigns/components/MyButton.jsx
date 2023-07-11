import { Link } from 'react-scroll'
import { useState } from 'react'

export const MyButton = ({text, reference}) => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  

return (
  <button onClick={handleClick} className="button">
    <span className="transition"></span>
    <span className="gradient"></span>
    <span className="label">
      <Link to={reference} smooth={true} duration={500}>
        {text}
      </Link>
    </span>
  </button>
  
)
}