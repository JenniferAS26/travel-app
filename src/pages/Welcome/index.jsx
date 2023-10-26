/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from 'react-router-dom'
import wallpaper from '../../assets/images/wallpaper.jpg'
import './styles.sass'

const Welcome = () => {
  const navigate = useNavigate()

  const goToHome = () => {
    navigate('/')
  }

  return (
    <main className='welcome'>
      <div className='welcome__image-container'>
        <img className='welcome__image-container--image' src={wallpaper} alt='' />
      </div>
      <div className='info-wrapper'>
        <h1 className='welcome__title'>Travelling made easy!</h1>
        <p className='welcome__text'>Experience the world's best adventure around the world with us</p>
        <button 
          className='welcome__button'
          onClick={() => goToHome()}
        >
          Let's go
        </button>
      </div>
    </main>
  )
}

export default Welcome
