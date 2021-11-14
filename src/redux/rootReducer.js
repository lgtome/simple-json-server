import {combineReducers} from '@reduxjs/toolkit'
import templateSlice from './template/templateSlice'


export const reducer = combineReducers({
    template: templateSlice
})