import { Link } from 'react-router-dom'
import beers from '../assets/beers.png'
import randomBeer from '../assets/random-beer.png'
import newBeer from '../assets/new-beer.png'
import './HomePage.css'


const HomePage = () => {
  return (
    <div>
      <div className="homepage">
        <img src={ beers } alt="Beers" />
        <div className="home-info">
          <Link to={'/beers'}><span>All Beers</span></Link>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolores vitae blanditiis amet libero non omnis itaque doloribus distinctio autem. Recusandae doloremque rerum, laboriosam cupiditate itaque quisquam temporibus tempora a.</p>
        </div>
      </div>

      <div className="homepage">
        <img src={ randomBeer } alt="Random Beer" />
        <div className="home-info">
          <Link to={'/random-beer'}><span>Random Beer</span></Link>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis tempora sit officiis aspernatur, unde beatae, magni vitae quibusdam explicabo quas fugiat alias asperiores sequi laborum accusamus adipisci error neque reprehenderit.</p>
        </div>
      </div>
      
      <div className="homepage">
        <img src={ newBeer } alt="New Beer" />
        <div className="home-info">
          <Link to={'/new-beer'}><span>New Beer</span></Link>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus laborum vitae, modi eaque blanditiis placeat harum inventore! Unde deserunt, magni laborum facilis tempore magnam numquam pariatur provident debitis voluptatibus praesentium.</p>
        </div>
      </div>
    </div>
  )
}

export default HomePage