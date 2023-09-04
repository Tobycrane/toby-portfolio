import {useState} from "react";




function Counter (){
    const [counter, setCounter] = useState(0);
    const [openTab, setOpenTab] = useState(true);


    const upward = () =>{
        // setCounter(counter +1)
        setCounter(prev =>prev +1)
    }
    const downward =() =>{
        // setCounter(counter -1)
        setCounter(prev =>prev -1)
    }
    const resetCounter =() =>{
        
    }
    const tabs =() =>{
        // setopenTab(!openTab)
        setOpenTab(prev => !prev)
    }
    return(
        <div>
        <div style ={{float: 'right'}}>
        <button onClick={tabs}>X</button>
            
        </div>
        {openTab && <div>
            
            <div className="d-flex">
                <h3>{ counter }</h3>
            </div>
            
                <button className="btn btn-primary" onClick={upward}>plus</button>
                <button className="btn btn-dark" onClick={downward}>minus</button>
                <button className="btn btn-danger" onClick={resetCounter} >reset to 0</button>
                </div>} 
        </div>

    )
}


export default Counter;