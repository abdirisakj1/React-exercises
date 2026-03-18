import { useReducer } from "react"

const CounterWithUseReducer = () => {

    const initialValue = {counterA:0,
        counterB:0}

        const reducer = (state,action) => {
            
            switch (action.type) {
                case  "incremnet_A":
                    return {...state, counterA: state.counterA + 1}
                case  "decreament_A":
                    return {...state, counterA: state.counterA - 1}

                case  "incremnet_B":
                    return {...state, counterB: state.counterB + 1}
                case  "decreament_B":
                    return {...state, counterB: state.counterB - 1}
                    
                case "resetBoth":
                    return initialValue;
            
                default:
                  return  state;
            }
        }

    const [state,dispatch] = useReducer(reducer,initialValue)

    return(
        <>
        <h1>Double Counter</h1>
        <h2>Counter A: {state.counterA}</h2>
        <button disabled={state.counterA === 0} onClick={() => dispatch({type:"decreament_A"})}>-A</button>
        <button  onClick={() => dispatch({type:"incremnet_A"})}>+A</button>
        <h2>Counter B: {state.counterB}</h2>
        <button disabled={state.counterB === 0} onClick={() => dispatch({type:"decreament_B"})}>-B</button>
        <button  onClick={() => dispatch({type:"incremnet_B"})}>+B</button> <br /> <br />
        <button  onClick={() => dispatch({type:"resetBoth"})}>Reset Both</button>

        </>
    )
}

export default CounterWithUseReducer