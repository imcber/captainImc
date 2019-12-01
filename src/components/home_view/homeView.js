import React from 'react';
import IntroView from './introView/introView';
import AboutView from './aboutView/aboutView';
import './homeView.css';
import dl from '../../assets/dataContent/dataLanguages.json'
import {StateProvider} from '../utils/state';

const initialState = { 
    lg : dl['es'],/*LENGUAGE*/
    lgKeys : Object.keys(dl),
    lgActual : 'es'
}

//THIS SAVE THE STATE
const reducer = (state,action) => {
    switch (action.type){
        case 'changeLanguage':
            return{
                ...state,
                lg: dl[action.newLanguage],
                lgActual: action.newLanguage
            };
        default:
            return state;
    }
};

function HomeView(props){
    return(
        <StateProvider initialState={initialState} reducer={reducer}>
            <IntroView />
            <AboutView />
        </StateProvider>
    );
}

export default HomeView;