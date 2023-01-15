import React from 'react'
import {Link, useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'
import './country.css'

const Country = ( {getCountry}) => {

    const { common } = useParams();
    const [country, setCountry] = useState(null)

    
    useEffect(()=>{
      setCountry(getCountry(common))
    },[common, getCountry])


  return (
    <div>
      <h1>See more info about Country you have clicked!</h1>
        <section className="country">
        <Link to="/" className="btn btn-light">
             Back Home
        </Link>
            <article key={country && country.name.common}>
              <div className="country-inner">
                <div className="flag">
                  <img src={country && country.flags.png} alt={ country && country.name.common} />
                </div>

                <div className="country-details">
                  <div>
                    <h2>{ country && country.name.common}</h2>
                    <h5>
                      Official Name: <span>{ country && country.name.official}</span>
                    </h5>
                    <h5>
                      Population: <span>{ country && country.population.toLocaleString()}</span>
                    </h5>
                    <h5>
                      Region: <span>{ country && country.region}</span>
                    </h5>
                    <h5>
                      Sub Region: <span>{ country && country.subregion}</span>
                    </h5>
                    <h5>
                      Capital: <span>{ country && country.capital}</span>{" "}
                    </h5>
                  </div>

                  <div>
                    <h5>
                      Timezones: <span>{ country && country.timezones}</span>
                    </h5>
                  </div>
                </div>
              </div>
            </article>
        </section>    
    </div>
  )
}

export default Country
