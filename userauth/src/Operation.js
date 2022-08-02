import React , {useContext} from "react";
import { Store } from "./Store";
import './Operation.css'


const Operation = () => {
    ////////////////////////////////////////////////////////
    const {state , dispatch} =  useContext(Store);

    const addFunc = ()=>{
        dispatch({type: 'increment'})
    }
    const minusFunc = ()=>{
        dispatch({type: 'decrement'})
    }

  return (

    <>
          <h1 className='heading'>Welcome</h1>
      <div className='main_div'>
      <button onClick={addFunc} className='plus_button '>
        {" "}
        <i className="fa-solid fa-plus"></i>
      </button>
      <span>{state}</span>
      <button onClick={minusFunc} className='minus_button'>
        {" "}
        <i className="fa-solid fa-minus"></i>
      </button>
      </div>
    </>
  );
};

export default Operation;
