import {createStore} from 'redux'
import { compute_reducer } from './reducers/compute_reducer'

export const store = createStore(compute_reducer)
store.subscribe(state=>{
    console.log('state updated...', state);
})