export const MyButton = ({text}) => {
return (
<button className='button'>
<span className="transition"></span>
<span className="gradient"></span>
<span className="label">{text}</span>
</button>
)
}