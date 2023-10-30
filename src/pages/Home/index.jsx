import { Link } from 'react-router-dom'
import profilePicture from '../../assets/images/image-user.jpg'
import { AiOutlineSearch } from 'react-icons/ai'
import { FcLike } from 'react-icons/fc'
import categoryImage1 from '../../assets/images/card-1.jpg' 
import galleryImage1 from '../../assets/images/gallery-1.jpg'
import './styles.sass'

const Home = () => {
  return (
    <main className='home'>
      <div className='home__top'>
        <h2 className='home__top--title'>Let's Discover</h2>
        <img className='home__top--image' src={profilePicture} alt='' />
      </div>
      <form className='home__form'>
        <button className='home__form--button'>
          <AiOutlineSearch />
        </button>
        <input className='home__form--input' type='text' />
      </form>
      <section className='home__categories'>
        <div className='home__categories--top'>
          <h4>Categories</h4>
          <Link>See all</Link>
        </div>
        <div className='home__categories--cards-container'>
          <div className='card'>
            {/* <img src={categoryImage1} alt='' /> */}
            <span>City</span>
          </div>
        </div>
      </section>
      <nav className='home__options'>
        <Link>
          all
        </Link>
        <Link>
          Popular
        </Link>
        <Link>
          Recommended
        </Link>
        <Link>
          More
        </Link>
      </nav>
      <section className='home__gallery'>
        <div className='home__gallery--card'>
          {/* <img src={galleryImage1} alt='' /> */}
          <button>
            <FcLike />
          </button>
          <h4>Soy un titulo</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
      </section>
    </main>
  )
}

export default Home
