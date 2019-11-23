import React,{useEffect,useState} from 'react';
import './introView.css';

function IntroView(props){
    return(
        <section className={'section-container'}>
            <div className={'intro-container'}>

            </div>
        </section>
    );
}

function MenuList(props){
    const listItemMenu = [{}];
}

function MenuItem(props){
    return(
        <>
            <span className={'menu-item'}>{props.item.title}</span>
        </>
    );
}

export default IntroView;