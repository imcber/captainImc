import React,{useEffect,useState,useContext} from 'react';
import './introView.css';
import LanguageContext from '../homeView';
import {useDataLanguage} from '../../my_hooks/useDataLanguage';

//const mainImg = require('../../../assets/img/NWA869G.png');

//this the intro view, contains the principal menu and paralllax img.
function IntroView(props){
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
    const {dataText} = useDataLanguage('esp');
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
    const {dataText} = useDataLanguage('esp');
    const listItemMenu = [
        {title:dataText.menu.about,section:'about',preText:'I'},
        {title:dataText.menu.tech,section:'tech',preText:'II'},
        {title:dataText.menu.work,section:'work',preText:'III'},
        {title:dataText.menu.contact,section:'contact',preText:'IV'}
    ];

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

function MenuItem(props){
    return(
        <div>
            <a className={'menu-item'}>{props.item.title}</a>
        </div>
    );
}

export default IntroView;