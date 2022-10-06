import {useSelector} from  'react-redux'

export const Message=()=>{
 const output=   useSelector(state=>state.result);
    return(<h1>Message is {output}</h1>)
}





// import {connect} from 'react-redux'
// import React from 'react'

// export class Message extends React.Component{
//     render(){
//         return(<h1>Counter is {this.props.output}</h1>)
//     }
// }

// const mapStateprops = state =>{
//     return {
//         output:  state.result
//     }
// }

// export default connect(mapStateprops)(Message)