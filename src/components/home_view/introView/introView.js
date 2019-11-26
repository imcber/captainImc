import React,{useEffect,useState} from 'react';
import './introView.css';

//const mainImg = require('../../../assets/img/NWA869G.png');

//this the intro view, contains the principal menu and paralllax img.
function IntroView(props){
    return(
        <section className={'section-container back-black'}>
            <ComplementView></ComplementView>
            <div className='intro-view'>
                <MenuList />
            </div>
            <ComplementView></ComplementView>
        </section>
    );
}

//Contain the items of the menu
function MenuList(props){
    const listItemMenu = [
        {title:'About',section:'about',preText:'I'},
        {title:'Tech',section:'about',preText:'II'},
        {title:'Work',section:'about',preText:'III'},
        {title:'Contanct',section:'about',preText:'IV'}
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