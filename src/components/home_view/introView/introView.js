import React,{useEffect,useState,useContext} from 'react';
import './introView.css';
//import {useDataLanguage} from '../../utils/useDataLanguage';
import {StateProvider,useStateValue} from '../../utils/state';
import dl from '../../../assets/dataContent/dataLanguages.json'

//const mainImg = require('../../../assets/img/NWA869G.png');

const initialState = {
    lg : dl['es']/*LENGUAGE*/
}
const reducer = (state,action) => {
    switch (action.type){
        case 'changeLanguage':
            return{
                ...state,
                lg: action.newLanguage
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
    //const {dataText} = useDataLanguage('esp');
    return(
        <>
            <div className={'header-intro'}>
                <span>Captain Imc</span>
                <span>FULL STACK DEVELOPER & UX DESIGN</span>
            </div>
            <div className={'header-intro-lg'}>
                
            </div>
        </>
    );
}

//Contain the items of the menu
function MenuList(props){
   // const {dataText} = useDataLanguage('esp');
   const [dataText,handlerLanguange] = useStateValue();
   let listMenuStr = ['about','tech','work','contact'];
   const listItemMenu = listMenuStr.map(item => {
        return {title:dataText.lg.menu[item],section:item};
   });
    /*const listItemMenu = [
        {title:dataText.lg.menu.about,section:'about',preText:'I'},
        {title:dataText.menu.tech,section:'tech',preText:'II'},
        {title:dataText.menu.work,section:'work',preText:'III'},
        {title:dataText.menu.contact,section:'contact',preText:'IV'}
    ];*/

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

//each item of menu
function MenuItem(props){
    return(
        <div>
            <a className={'menu-item'}>{props.item.title}</a>
        </div>
    );
}

export default IntroView;