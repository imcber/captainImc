import React,{useEffect,useState} from 'react';
import './introView.css';

//this the intro view, contains the principal menu and paralllax img.
function IntroView(props){
    return(
        <section className={'section-container'}>
            <div className={'intro-container'}>
                <MenuList />
            </div>
        </section>
    );
}

function MenuList(props){
    const listItemMenu = [
        {title:'About',section:'about'},
        {title:'Tech',section:'about'},
        {title:'Work',section:'about'},
        {title:'Contanct',section:'about'}
    ];

    return(
        <div>
            {listItemMenu.map((item) => <MenuItem key={item.section} item={item}/>)}
        </div>
    );
}

function MenuItem(props){
    return(
        <>
            <a className={'menu-item'}>{props.item.title}</a>
        </>
    );
}

export default IntroView;