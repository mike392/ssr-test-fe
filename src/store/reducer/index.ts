import {combineReducers} from "redux"
import Counter from "./counterSlice"


// @ts-ignore
const main = () =>
    combineReducers({
        Counter
    })

export default main;