import React from 'react';
import IntroView from './introView/introView';
import AboutView from './aboutView/aboutView';
import TechView from './techView/techView';
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
            <TechView />
        </StateProvider>
    );
}

export const SectionContainer = props =>{
    return(
        <section className={'section-container'} style={{background:'#DEF2F1'}}>
            <div className={'title-container-body'}>
                <span>{props.title}</span>
            </div>
            <div className={'rest-container-body'} style={{display:'flex'}}>
                {props.children}
            </div>
        </section>
    );
};

export default HomeView;