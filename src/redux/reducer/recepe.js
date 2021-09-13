import { ActionTypes } from "../types/ActionTypes"

const initialState = {
    dishes: [],
    dish: {},
    ingredients: []
}


export const recepe = (state=initialState, action) =>{
    switch(action.type){
        case ActionTypes.ALL_DISH:
            return {...state, dishes: action.payload}
        case ActionTypes.GET_DISH:
            return {...state, dish: action.payload}
        case ActionTypes.GET_INGREDIENTS:
            return {...state, ingredients: action.payload}
        case ActionTypes.SEARCH_ALLITEMS:
            return {...state, dishes: action.payload.items.filter((ele)=>{
                return ele.name === action.payload.food
            })}
        case ActionTypes.GET_INGREDIENT:
            return {...state, ingredients: [...state.ingredients, action.payload]}
        case ActionTypes.ADD_DISH:
            return {...state, dishes: [...state.dishes, action.payload]}
        default:
            return state
    }
}