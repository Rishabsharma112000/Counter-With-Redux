import { Button } from "../components/Button"
import { Message } from "../components/Message"

export const CounterApp =()=>{
    return (<div className="container">
        <Message/>
        <br/>
        <Button label='+'/>
        <Button label='-'/>
        
    </div>)
}