import React,{createContext,useContext,useReducer} from 'react';
 
export const StateContext = createContext();

export const StateProvider = ({reducer,initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);

export const useStateData = () => {
    let objState = useContext(StateContext)[0];
    const func = (loc) =>{
        let response = objState;
        let locArray = loc.split('.');
        locArray.forEach(item => {
            if(item){
                response = response[item];
            }
        });
        return response !== null?response:'';
    };
    return func;
};