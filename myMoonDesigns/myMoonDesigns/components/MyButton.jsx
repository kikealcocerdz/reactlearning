

export const MyButton = ({text, reference}) => {

const handleClick = () => {
  window.location.href = reference;
}
  

return (
<button href={reference} onClick={handleClick} className='button'>
  <span className="transition"></span>
  <span className="gradient"></span>
  <span className="label">{text}</span>
</button>
)
}