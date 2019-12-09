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
    const classHeader = 'title-container-body ' + (props.classHeader?props.classHeader:'');
    return(
        <section id={props.id} className={'section-container'} style={{background:'#DEF2F1'}}>
            <div className={classHeader}>
                <span>{props.title}</span>
            </div>
            <div className={'rest-container-body'} style={props.style}>
                {props.children}
            </div>
        </section>
    );
};

export default HomeView;