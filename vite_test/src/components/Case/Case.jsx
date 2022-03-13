import './Case.css'

export default ({value, handleClick}) => {
  return(
    <div className='Case' onClick={handleClick}>
      {value}
    </div>
  )
}