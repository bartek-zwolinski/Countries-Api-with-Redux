
export const getSearch = ({filters}) => filters.searchPhrase
export const getContinent = ({filters}) => filters.continent

export const getData1 = ({variable}, filters) => {
    if(filters.searchPhrase === ''){
        return variable.data
    }  else {
        variable.data.filter((county) => {
                if(county.name.common.includes(filters.searchPhrase)){
                  return county
                }
    })}

}

const reducerName = 'variable'
const createActionName = (name) => `app/${reducerName}/${name}`

export const SET_SEARCH = createActionName("SET_SEARCH")
export const setSearch = payload => ({payload, type: SET_SEARCH})

export const SET_CONTINENT = createActionName("SET_CONTINENT")
export const setContinent = payload => ({payload, type: SET_CONTINENT})

export default function reducer(statePart=[], action={}){
    switch (action.type) {
        case SET_SEARCH:
            return {...statePart, searchPhrase: action.payload}
        case SET_CONTINENT:
            return {...statePart, continent: action.payload}
        default:
            return statePart
    }
}