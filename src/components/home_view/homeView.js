import React,{useState,useEffect} from 'react';
import IntroView from './introView/introView';
import AboutView from './aboutView/aboutView';
import TechView from './techView/techView';
import WorkView from './workView/workView';
import ContactView from './contactView/contactView';
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

const HomeView = () => {
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        },1000);
      return(() =>{
          setLoading(true);
      });  
    },loading);

    const PageContent = () => {
        return(
            <>
                <IntroView />
                <AboutView />
                <TechView />
                <WorkView />
                <ContactView />
            </>
        );
    };

    return(
        <>
            <StateProvider initialState={initialState} reducer={reducer}>
                {loading ? <LoaderSection/>:<PageContent/>}
            </StateProvider>
        </>
    );
}

const LoaderSection = () =>{
    return(
        <div className={'loader-page'}>
            <span>
                LOADING!
            </span>
        </div>
    );
}

export const SectionContainer = props =>{
    const classHeader = 'title-container-body ' + (props.classHeader?props.classHeader:'');
    const backgroundColor = props.backgroundColor?'#'+props.backgroundColor:'#17252A';
    const classBody = 'rest-container-body ' + (props.classBody?props.classBody:'');
    return(
        <section id={props.id} className={'section-container'} style={{background:backgroundColor}}>
            <div className={classHeader}>
                <span>{props.title}</span>
            </div>
            <div className={classBody} style={props.style}>
                {props.children}
            </div>
        </section>
    );
};

export default HomeView;