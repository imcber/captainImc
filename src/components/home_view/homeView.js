import React,{useState,useEffect} from 'react';
import IntroView from './introView/introView';
import AboutView from './aboutView/aboutView';
import TechView from './techView/techView';
import WorkView from './workView/workView';
import ContactView from './contactView/contactView';
import './homeView.css';
import dl from '../../assets/dataContent/dataLanguages.json'
import {StateProvider} from '../utils/state';
import {GiSpaceShuttle} from 'react-icons/gi';
import { IconContext } from "react-icons";

var initialState = { 
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
    //SHOW THE LOADER PAGE
    const [loading,setLoading] = useState(true);

    const offLoader = () =>{
        setLoading(true);
    }
    initialState.offLoader = offLoader;
    useEffect(()=>{
        setTimeout(() => {
            setLoading(false);
        },1000);
      return(() =>{
      });  
    },[loading]);

    const LoaderSection = () =>{
        return(
            <div className={'loader-page'}>
                <span>LOADING!</span>
            </div>
        );
    }

    const ContainerPage = () =>{
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
            <TopButton />
            <StateProvider initialState={initialState} reducer={reducer}>
                {loading?<LoaderSection/>:<ContainerPage/>}
            </StateProvider>
        </>
    );
}


const TopButton = () =>{
    const handlerClick = () =>{
        document.documentElement.scrollTop = 0;
    }
    return(
        <div className={'nav-bar-fixed'}>
            <IconContext.Provider value={{color:'#3AAFA9',size:'3em',className:'back-top-icon'}}>
                <span>
                    <GiSpaceShuttle onClick={handlerClick}/>
                </span>
            </IconContext.Provider>
        </div>
    );
};

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