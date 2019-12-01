import React,{useEffect,useState} from 'react';
import './introView.css';
//import {useDataLanguage} from '../../utils/useDataLanguage';
import {StateProvider,useStateValue} from '../../utils/state';
import dl from '../../../assets/dataContent/dataLanguages.json'

const mainImg = require('../../../assets/img/mushroom.png');
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
        <section className={'section-container back-color'}>
            <ComplementView>
                <HeaderIntro />   
            </ComplementView>
            <div className='intro-view'>
                <MenuList />
            </div>
            <ComplementView>
                <FooterIntro />
            </ComplementView>
        </section>
    );
}

const FooterIntro = () =>{
    const FooterIntro = (props) => {
        return(
            <div className={'footer-intro'}>
                <div className={'footer-container'} style={props.style}>
                    <span className='title-intro'>{props.text}</span>
                </div>
            </div>
        );
    }
    return(
        <>
            <FooterIntro style={{}} text={'CAPTAINIMC.COM'}/>
            <FooterIntro style={{left: '85%'}} text={'2020'}/>
        </>
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
            <span onClick={indLang?switchLanguage:()=>{}} style={!indLang?{color:'#4d3761'}:{}}>
                {props.nameLang.toUpperCase()}  
            </span>
        );
    };

    const HeaderIntro = (props) => {
        return(
            <div className={props.class1}>
                <div className={props.class2}>
                    {props.children}
                </div>
            </div>  
        );
    }

    return(
        <>
            <HeaderIntro class1={'header-intro'} class2={'title-container'}>
                <span className='title-intro'>{dataText.lg.header.degree}</span>
            </HeaderIntro>
            <HeaderIntro class1={'header-intro-lg'} class2={'container-intro-lg'}>
                {dataText.lgKeys.map((item) => <LanguageItem key={item} nameLang={item}/>)}
            </HeaderIntro>
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
                <img src={mainImg}/>
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