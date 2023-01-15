import { connect } from "react-redux"
import { getData, setData} from '../../redux/getCountries'
import { getSearch, getContinent } from "../../redux/searchPhraseRedux"
import Countries from "./countries"


const mapStateToProps = (state) => ({
    data: getData(state),
    search: getSearch(state),    
    continent: getContinent(state), 
})

const mapDispatchToProps = dispatch =>({
    setData: (value) => dispatch(setData(value)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Countries)
