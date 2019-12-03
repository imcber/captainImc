import React from 'react';
import './aboutView.css'
import {useStateData} from '../../utils/state';
import {SectionContainer} from '../homeView';

//INIT VIEW ABOUT
const AboutView = () =>{
    //GET DATA TO THE TEXT
    const getDataLeg = useStateData();
    return(
        <SectionContainer title={getDataLeg('lg.menu.about.title')}>
            <AboutContent />
        </SectionContainer>
    );
}

//CONTENT OF THE VIEW
const AboutContent = () =>{
    //GET DATA OF THE JSON
    const getDataLeg = useStateData();

    // SUMMARY OF TH VIEW
    const TitleSummaryContainer = (props) => {
        return(
            <div className={'title-summary-container'}>
                {props.children}
            </div>
        );
    };

    return(
        <>
            <div className={'title-about-container'}>
                <span>{getDataLeg('lg.menu.about.titleView')}</span>
            </div>
            <TitleSummaryContainer >
                <span>{getDataLeg('lg.menu.about.summary-me')}<br/><br/>{getDataLeg('lg.menu.about.summary-work')}</span>
            </TitleSummaryContainer>
            <TitleSummaryContainer >
                <span>{getDataLeg('lg.menu.about.summary-second')}<br/><br/>{getDataLeg('lg.menu.about.summary-myjob')}</span>
            </TitleSummaryContainer>
        </>
    );
}

export default AboutView;  