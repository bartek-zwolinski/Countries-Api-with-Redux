import Countries from './components/countries/countriesContainer';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/header/header';
import Country from './components/country/countryContainer';

function App() {
  return (

      <Router>
          <Routes>
        <Route exact path='/' element={<><Header/><Countries/></>}></Route>
        <Route 
        path='/countries/:common' element={<Country/>}/> 
        </Routes>
      </Router>
  );
}

export default App;
