

export const compute_reducer = (state={result:0} , action)=>{
if(action.type === 'PLUS'){
    let temp = state.result;
    // temp++;
    temp = temp + action.payload;
    return {...state , result : temp}
}
else if(action.type === 'MINUS'){
    let temp = state.result;
    temp--;
    return {...state ,result:temp}
}
return state
}