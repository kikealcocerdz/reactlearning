import '../src/App.css'

export const AboutImage = ({imageId, message}) => {
  return (
    <div className='elemento-hover'>
    <img src={imageId} alt="aida1" className='portfolio-item'/>
    <p className='texto-oculto'>{message}</p>
    </div>
  )
}