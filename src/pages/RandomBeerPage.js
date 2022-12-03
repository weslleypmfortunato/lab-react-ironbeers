import Header from "../components/Header";
import axios from 'axios'
import { useEffect, useState } from 'react';
import './RandomBeerPage.css'



const ApiUrl = 'https://ih-beers-api2.herokuapp.com/beers/random'

const RandomBeerPage = () => {
  const [beer, setBeer] = useState([null])

  useEffect(() => {
    axios.get(ApiUrl)
    .then(response => {
      setBeer(response.data)
    }).catch(err => console.log(err))
  }, [])

  return ( 
    <div className="random">
      <Header />
      { beer && <>
        <div className="headings-beer">
          <img  src={ beer.image_url } alt="Beer Detail" />
        </div>
        <div className="info-random">
          <div className="name-tagline">
            <p className="beer-name">{ beer.name }</p>
            <p className="tagline"> { beer.tagline }</p>
          </div>
          <div className="brewed-attenuation">
            <p className="attenuation"> { beer.attenuation_level } </p>
            <p className="brewed"> { beer.first_brewed } </p>
          </div>
        </div>
        <div className="description-contributed">
          <p className="description"> { beer.description } </p>
          <p className="contributed">{ beer.contributed_by } </p>
        </div>
      </>}
    </div>
   );
}
 
export default RandomBeerPage;