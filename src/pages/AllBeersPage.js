import './AllBeersPage.css'
import axios from 'axios'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import SearchBeerPage from './SearchBeerPage';


const ApiUrl = 'https://ih-beers-api2.herokuapp.com/beers'

const AllBeersPage = () => {
  const [beers, setBeers] = useState([])
  const [query, setQuery] = useState('')

  useEffect(() => {
    axios.get(ApiUrl)
      .then(response => {
        setBeers(response.data)
    }).catch(err => console.log(err))
  }, [])

  // comecei aqui
  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers/search?q=" + query)
      .then(response => {
        setBeers(response.data)
      }).catch(err => console.log(err))
  }, [query])

  return (
    <div className='all-beers-page'>
      <Header />
      <SearchBeerPage setQuery={setQuery} />
      {
        beers.map(beer => {
          return (
            <div key={ beer._id } className='beers'>
              <img src={ beer.image_url } alt="Beers" />
              <div className='info-beers'>
                <Link to={`/beers/${beer._id}`}>
                  <h2>{ beer.name }</h2>
                </Link>
                <h4 className='tagline'>{ beer.tagline }</h4>
                <p><b>Created by:</b> { beer.name }</p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default AllBeersPage