import React , {createContext , useReducer} from 'react';

export const Store = createContext();

const initialState = 0;

const reducer = (state,action)=>{
    switch(action.type){
        case 'increment':
            return state+1;
        
        case 'decrement':
            return state-1;
        default:
        return state
    }

}

export const Provider =  (props)=>{
    /////////////////      Reducer  Hook    /////////////////////
       const [state, dispatch] = useReducer(reducer, initialState);
      return  <Store.Provider value={{state , dispatch}}>{props.children}</Store.Provider>
}

