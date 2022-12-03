import axios from "axios"
import './AllBeersPage.css'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Header from "../components/Header"

const ApiUrl = 'https://ih-beers-api2.herokuapp.com/beers'

const BeerDetailsPage = () => {
  const { beerId } = useParams()
  const [beer, setBeer] = useState(null)

  useEffect(() => {
    axios.get(`${ApiUrl}/${beerId}`)
    .then(response => {
      setBeer(response.data)
    }).catch(err => console.log(err))
  },[beerId])


  return (
    <div className="beer">
      <div class="homeimage">
        <Header />
        <h1>Beer Details</h1>
      </div>
      <div class="detailed-beer">
        { beer && <>
          <div className="headings-beer">
            <img src={ beer.image_url } alt="Beer Detail" />
          </div>
          <div className="info">
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
    </div>
  )
}

export default BeerDetailsPage