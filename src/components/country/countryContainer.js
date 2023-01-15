import { connect } from "react-redux"
import { setCountryByName, getCountryByName} from '../../redux/getCountries'
import Country from "./country"


const mapStateToProps = (state) => ({
    getCountry: (name) => getCountryByName(state, name), 
    country: state.variable.data
})

const mapDispatchToProps = dispatch =>({
    setCountryByName: (value) => dispatch(setCountryByName(value)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Country)