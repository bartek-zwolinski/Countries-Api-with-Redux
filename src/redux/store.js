import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import getCountries from './getCountries'
import searchPhraseRedux from'./searchPhraseRedux'

const initialState = {
    variable: {
            data: [],
    },
    filters: {
        searchPhrase: '',
        continent: ''
    }

}


const reducers = {
    variable: getCountries, 
    filters: searchPhraseRedux,
}

const storeReducer = combineReducers(reducers)

const store = createStore(
    storeReducer,
    initialState,
    compose(applyMiddleware(), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) // przed deployem usunac
)
export default store