import { numberActionCreator } from "../redux/actions/number_action"
import { store } from "../redux/store"

export const Button =({label})=>{
    const opr =() =>{
        const type = label === '+'?'PLUS':'MINUS'
        const action = numberActionCreator(type , 5)
        store.dispatch(action);
    }
    return (<button className="btn btn-primary " onClick={opr}>
        {label}
    </button> )
}