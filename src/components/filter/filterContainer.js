import { connect } from "react-redux"
import { setSearch, setContinent, getSearch,getContinent } from "../../redux/searchPhraseRedux"
import Filter from "./filter"


const mapStateToProps = (state) => ({
    search: getSearch(state),    
    continent: getContinent(state),    
})

const mapDispatchToProps = dispatch =>({
    setSearch: (value) => dispatch(setSearch(value)),
    setContinent: (value) => dispatch(setContinent(value)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Filter)
