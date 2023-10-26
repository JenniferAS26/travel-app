import { Link } from 'react-router-dom'
import profilePicture from '../../assets/images/image-user.jpg'
import { AiOutlineSearch } from 'react-icons/ai'
import categoryImage1 from '../../assets/images/card-1.jpg' 
import './styles.sass'

const Home = () => {
  return (
    <main className='home'>
      <div>
        <h2>Let't Discover</h2>
        {/* <img src={} alt='' /> */}
      </div>
      <form>
        <button>
          <AiOutlineSearch />
        </button>
        <input type='text' />
      </form>
      <section>
        <div>
          <h4>Categories</h4>
          <Link>See all</Link>
        </div>
        <div>
          <img src='' alt='' />
          <span>City</span>
        </div>
      </section>
      <nav>
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
      <section>
        <div>
          <img src='' alt='' />
          <button></button>
          <h4></h4>
          <p></p>
        </div>
      </section>
      <nav>
        <ul>
          <li></li>
        </ul>
      </nav>
    </main>
  )
}

export default Home
