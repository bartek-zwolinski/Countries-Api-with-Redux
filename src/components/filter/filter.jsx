import React from 'react'
import '../../../src/index.css'

const Filter = ({setContinent, setSearch, search, continent}) => {
  return (
    <section className='filter'>
        <form className='form-control'>
            <input   type="search"
          name="search"
          id="search"
          autoComplete="off"
          value={search}
          placeholder="Search Country"
          onChange={(e) => setSearch(e.target.value)}
            ></input>
        </form>
        <div className='region-filter'>
            <select name="select" id="select" value={continent}  onChange={e=> setContinent(e.target.value)}>
                <option value='All'>ALL</option>
                <option value='Africa'>Africa</option>
                <option value='America'>America</option>
                <option value='Asia'>Asia</option>
                <option value='Europe'>Europe</option>
                <option value='Oceania'>Oceania</option>
            </select>
        </div>
    </section>
  )
}

export default Filter
