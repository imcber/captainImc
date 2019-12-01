import React,{useEffect,useState} from 'react';
import IntroView from './introView/introView';
import AboutView from './aboutView/aboutView';
import './homeView.css';

function HomeView(props){
    return(
        <>
            <IntroView />
            <AboutView />
        </>
    );
}

export default HomeView;