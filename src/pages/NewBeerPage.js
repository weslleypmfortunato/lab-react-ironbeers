import './NewBeerPage.css'
import { useState } from 'react';
import axios from 'axios'
import Header from "../components/Header";
import { useNavigate } from 'react-router-dom'

const ApiUrl = 'https://ih-beers-api2.herokuapp.com/beers/new'

const NewBeerPage = () => {
  const [name, setName] = useState('')
  const [tagline, setTagline] = useState('')
  const [description, setDescription] = useState('')
  const [first_brewed, setFirst_Brewed] = useState('')
  const [brewers_tips, setBrewers_Tips] = useState('')
  const [attenuation_level, setAttenuation_Level] = useState(0)
  const [contributed_by, setContributed_By] = useState('')

  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    const newBeer = { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by }

    axios.post(ApiUrl, newBeer)
      .then(response => {
        setName('')
        setTagline('')
        setDescription('')
        setFirst_Brewed('')
        setBrewers_Tips('')
        setAttenuation_Level(0)
        setContributed_By('')

        navigate('/beers')

      }).catch(err => console.log(err))
  }

  return ( 
    <div>
      <Header />

      <form className='form' onSubmit={ handleSubmit }>
        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          name="name"
          value={ name }
          onChange={ e => setName(e.target.value) }    
        />

        <label htmlFor="tagline">Tagline</label>
        <input 
          type="text" 
          name='tagline'
          value={ tagline }
          onChange={ e => setTagline(e.target.value) }
        />

        <label htmlFor="description">Description</label>
        <input className='description'
          type="text" 
          name='description'
          value={ description }
          onChange={ e => setDescription(e.target.value) }
        />

        <label htmlFor="first_brewed">First Brewed</label>
        <input 
          type="text" 
          name='first_brewed'
          value={ first_brewed }
          onChange={ e => setFirst_Brewed(e.target.value) }
        />

        <label htmlFor="brewers_tips">Brewers Tips</label>
        <input 
          type="text" 
          name='brewers_tips'
          value={ brewers_tips }
          onChange={ e => setBrewers_Tips(e.target.value) }
        />

        <label htmlFor="attenuation_level">Attenuation Level</label>
        <input 
          type="number" 
          name='attenuation_level'
          value={ attenuation_level }
          onChange={ e => setAttenuation_Level(e.target.value) }
        />

        <label htmlFor="contributed_by">Contributed By</label>
        <input 
          type="text" 
          name='contributed_by'
          value={ contributed_by }
          onChange={ e => setContributed_By(e.target.value) }
        />

        <button type='submit' className='add-new-btn'>ADD NEW</button>        
      </form>
    </div>
   );
}
 
export default NewBeerPage;