import React,{useEffect,useState} from 'react';
import './introView.css';

//this the intro view, contains the principal menu and paralllax img.
function IntroView(props){
    return(
        <section className={'section-container back-black'}>
            <div className='intro-view'>
                <MenuList />
            </div>
        </section>
    );
}

function MenuList(props){
    const listItemMenu = [
        {title:'About',section:'about',preText:'I'},
        {title:'Tech',section:'about',preText:'II'},
        {title:'Work',section:'about',preText:'III'},
        {title:'Contanct',section:'about',preText:'IV'}
    ];

    return(
        <div className={'menu-container'}>
            {listItemMenu.map((item) => <MenuItem key={item.section} item={item}/>)}
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