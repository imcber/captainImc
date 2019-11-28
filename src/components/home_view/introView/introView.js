import React,{useEffect,useState} from 'react';
import './introView.css';
//import {useDataLanguage} from '../../utils/useDataLanguage';
import {StateProvider,useStateValue} from '../../utils/state';
import dl from '../../../assets/dataContent/dataLanguages.json'

//const mainImg = require('../../../assets/img/NWA869G.png');
const initialState = {
    lg : dl['es'],/*LENGUAGE*/
    lgKeys : Object.keys(dl),
    lgActual : 'es'
}
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

const IntroView = () => {
    return(
        <StateProvider initialState={initialState} reducer={reducer}>
            <IntroViewReturn />
        </StateProvider>
    );
};

//this the intro view, contains the principal menu and paralllax img.
function IntroViewReturn(props){
    return(
        <section className={'section-container back-black'}>
            <ComplementView>
                <HeaderIntro />   
            </ComplementView>
            <div className='intro-view'>
                <MenuList />
            </div>
            <ComplementView></ComplementView>
        </section>
    );
}

function HeaderIntro(props){
    //object context
    const [dataText,handlerlanguage] = useStateValue();
    //item to switch language
    const LanguageItem = (props) =>{
        const indLang = dataText.lgActual !== props.nameLang;
        //funtion click switch language
        const switchLanguage = () =>{
            handlerlanguage({
                    type : 'changeLanguage',
                    newLanguage : props.nameLang
            });
        };
        return(
            <span onClick={indLang?switchLanguage:()=>{}} style={!indLang?{color:'#ffffff'}:{}}>
                {props.nameLang.toUpperCase()}  
            </span>
        );
    };
    return(
        <>
            <div className={'header-intro'}>
                <div className={'degree-container'}>
                    <span className={'degree-intro'}>{dataText.lg.header.degree}</span></div>
                </div>
            <div className={'header-intro-lg'}>
                <div className={'container-intro-lg'}>
                    {dataText.lgKeys.map((item) => <LanguageItem key={item} nameLang={item}/>)}
                </div>
            </div>
        </>
    );
}

//Contain the items of the menu
function MenuList(props){
   const [dataText] = useStateValue();
   let listMenuStr = ['about','tech','work','contact'];
   const listItemMenu = listMenuStr.map(item => {
        return {title:dataText.lg.menu[item],section:item};
   });

   const MenuItem = props =>{
        return(
            <div>
                <a className={'menu-item'}>{props.item.title}</a>
            </div>
        );
    }

    return(
        <>
            <div className={'menu-container'}>
                {listItemMenu.map((item) => <MenuItem key={item.section} item={item}/>)}
            </div>
            <div className='main-img-container'>
                <img src={''}/>
            </div>
        </>
    );
}

//The complement about info
function ComplementView(props){
    return(
        <div className={'complement-intro'}>
            {props.children}
        </div>
    );
}


export default IntroView;