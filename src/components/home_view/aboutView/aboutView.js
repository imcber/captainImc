import React from 'react';
import './aboutView.css'
import {useStateData} from '../../utils/state';

//INIT VIEW ABOUT
const AboutView = () =>{
    //GET DATA TO THE TEXT
    const getDataLeg = useStateData();
    return(
        <section className={'section-container'} style={{background:'#DEF2F1'}}>
            <div className={'title-container-body'}>
                <span>{getDataLeg('lg.menu.about.title')}</span>
            </div>
            <div className={'rest-container-body'} style={{display:'flex'}}>
                <AboutContent />
            </div>
        </section>
    );
}

const AboutContent = () =>{
    const getDataLeg = useStateData();
    return(
        <>
            <div className={'title-about-container'}>
                <span>{getDataLeg('lg.menu.about.titleView')}</span>
            </div>
            <div className={'title-summary-container'}>
                <span>{getDataLeg('lg.menu.about.summary')}</span>
            </div>
        </>
    );
}

export default AboutView;  