import React,{useState,useEffect} from 'react';
import IntroView from './introView/introView';
import AboutView from './aboutView/aboutView';
import TechView from './techView/techView';
import WorkView from './workView/workView';
import ContactView from './contactView/contactView';
import './homeView.css';
import dl from '../../assets/dataContent/dataLanguages.json'
import {StateProvider} from '../utils/state';
import {FaLongArrowAltUp} from 'react-icons/fa';
import { IconContext } from "react-icons";
import { useScroll } from "../utils/useScroll";
import {useStateData} from '../utils/state';

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
    initialState.offsetTopAbout = 0;
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
                <TopButton />
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
                {loading?<LoaderSection/>:<ContainerPage/>}
            </StateProvider>
        </>
    );
}


const TopButton = () =>{
    const getDataLeg = useStateData();
    const [visibleBackTop,setVisibleBackTop] = useState(false);
    const offBtnBackTop = () =>{
        const offSetAbout = getDataLeg('').offsetTopAbout;
        const offComp = offSetAbout * .2;
        if(scrollY < offSetAbout - offComp){
            setVisibleBackTop(false);
        }else{
            setVisibleBackTop(true);
        }
    }
    //HOOK OF SCROLL
    const { scrollY } = useScroll(/*offBtnBackTop*/);
    
    useEffect(() => {
        offBtnBackTop();
    });

    //HANDLER CLICK TOP BUTTON
    const handlerClick = event =>{
       // document.documentElement.scrollTop = 0;
       document.querySelector('.header-intro').scrollIntoView({behavior: 'smooth',block:'start'});
    }

    const Buttontop = () =>{
        return(
            <div className={'nav-bar-fixed'}>
                <div className={'back-top-container'} >
                    <IconContext.Provider value={{color:'#3AAFA9',size:'3em',className:'back-top-icon'}}>
                        <FaLongArrowAltUp onClick={handlerClick}/>
                    </IconContext.Provider>
                </div>
            </div> 
        );
    }
    return(
        <>
            {visibleBackTop?<Buttontop/>:<></>}
        </>
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