import { ActionTypes } from "../types/ActionTypes"



export const alldish = (dishes) =>{
    return{
        type: ActionTypes.ALL_DISH,
        payload: dishes
    }
}
export const getdish = (dish) =>{
    return{
        type: ActionTypes.GET_DISH,
        payload: dish
    }
}
export const getingredients = (ing) =>{
    return{
        type: ActionTypes.GET_INGREDIENTS,
        payload: ing
    }
}

export const searchallitems = (allitems) =>{
    return{
        type: ActionTypes.SEARCH_ALLITEMS,
        payload: allitems
    }
}
export const getingredient = (item) =>{
    return{
        type: ActionTypes.GET_INGREDIENT,
        payload: item
    }
}
export const addish = (allitem) =>{
    return{
        type: ActionTypes.ADD_DISH,
        payload: allitem
    }
}