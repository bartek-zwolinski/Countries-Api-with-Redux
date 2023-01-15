
export const getData = ({variable, filters}) => {
    let  countries = variable.data
    if(filters.searchPhrase !== ''){
        countries = countries.filter((county) => {
              return county.name.common.includes(filters.searchPhrase)
          } 
    )
    }
    return countries
} 

export const getCountryByName = ({variable}, name) => variable.data.find(e=>e.name.common === name)

const reducerName = 'variable'
const createActionName = (name) => `app/${reducerName}/${name}`

export const SET_DATA = createActionName("SET_DATA")
export const setData = payload => ({payload, type: SET_DATA})
export const SET_COUNTRY_BT_NAME = createActionName("SET_COUNTRY_BT_NAME")
export const setCountryByName = payload => ({payload, type: SET_COUNTRY_BT_NAME})

export default function reducer(statePart=[], action={}){
    switch(action.type) {
        case SET_DATA:
            return {...statePart, data: action.payload}
            case SET_COUNTRY_BT_NAME:
                return {...statePart, data: action.payload}
            default:
                return statePart
    }
}