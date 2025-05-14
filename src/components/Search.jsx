import React from 'react'

 const Search = ({searchTerm,setSearchTerm}) => {
  return (
    <div className='search'>
        <div>
            <img src='search.svg' alt='Search' />

            <input type="text " 
            placeholder='Seach Through thousan Movies' 
            value={searchTerm}
            onChange={(event)=>setSearchTerm(event.target.value)} />
        </div>
    </div>
  )
}

export default Search