import React,{useRef,useEffect} from 'react';
import './aboutView.css'
import {useStateData} from '../../utils/state';
import {SectionContainer} from '../homeView';

//INIT VIEW ABOUT
const AboutView = () =>{
    //GET DATA TO THE TEXT
    const getDataLeg = useStateData();

    const divAbout = useRef(null);

    useEffect(() => {
        getDataLeg('').offsetTopAbout = divAbout.current.offsetTop;
    },[]);

    return(
        <div ref={divAbout}>  
            <SectionContainer id={'aboutView'} title={getDataLeg('lg.menu.about.title')} style={{display:'flex'}} backgroundColor={'DEF2F1'} classBody={'about-body'}>
                <AboutContent />
            </SectionContainer>
        </div>
    );
}

//CONTENT OF THE VIEW
const AboutContent = () =>{
    //GET DATA OF THE JSON
    const getDataLeg = useStateData();
    // SUMMARY OF THE VIEW
    const TitleSummaryContainer = (props) => {
        return(
            <div className={'title-summary-container'}>
                {props.children}
            </div>
        );
    };
    const textSummary = getDataLeg('lg.menu.about.summary');

    return(
        <>
            <div className={'title-about-container'}>
                <span>{getDataLeg('lg.menu.about.titleView')}</span>
            </div>
            <TitleSummaryContainer >
                <span>{textSummary}</span>
            </TitleSummaryContainer>
        </>
    );
}

export default AboutView;  