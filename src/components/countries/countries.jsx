import React from 'react'
import { useEffect} from 'react'
import Axios from 'axios'
import '../../../src/index.css'
import {Link} from 'react-router-dom'
import Filter from '../filter/filterContainer';


const Countries = ({data, setData, continent}) => {

    let url = 'https://restcountries.com/v3.1/all'
   
    if(continent && continent !== "All"){
      url = `https://restcountries.com/v3.1/region/${continent}`
    } else {
      url = 'https://restcountries.com/v3.1/all'
    }

    useEffect(() => {
      Axios.get(url)
      .then((rest) =>{
        setData(rest.data)
      })
    },[url, setData])


  return (
    <div>
      <Filter/>
        <section className='grid'>    
            {data.map((country) => {
                const {population, region, capital} = country
                    const {png} = country.flags
                        const {official, common} = country.name
                    return <article key={common}>
                        <div> 
                              <Link classsName='link' to={`/countries/${common}`}>
                              <img src ={png} alt={official}/> 
                              </Link>  
                            <div className='details'>
                              <h3>{common}</h3>
                              <h4>Population: <span>{population}</span></h4>
                              <h4>Region: <span>{region}</span></h4>
                              <h4>Capital: <span>{capital}</span></h4> 
                              </div>                                        
                        </div>
                            </article>
                        })}
        </section>   
    </div>
  )
}

export default Countries
