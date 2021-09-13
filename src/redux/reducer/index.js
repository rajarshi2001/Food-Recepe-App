import {combineReducers} from 'redux'
import { recepe } from './recepe'

export const reducer  = combineReducers({
    recepe: recepe,
})