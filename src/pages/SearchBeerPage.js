import './SearchBeerPage.css'
import { useState } from "react"

const SearchBeerPage = (props) => {
  const { setQuery } = props
  const [search, setSearch] = useState('')

  const handleInput = e => {
    setQuery(e.target.value)
    setSearch(e.target.value)
  }

  return ( 
    <div className='search-page'>
      <label htmlFor="searchBeer">Search</label>
      <input 
        type="text"
        value={search}
        onChange={handleInput} 
        placeholder='Type here...'
        />
    </div>
   );
}
 
export default SearchBeerPage;