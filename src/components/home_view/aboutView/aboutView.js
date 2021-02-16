import React, { useRef, useEffect } from 'react';
//import './aboutView.css'
import { useStateData } from '../../utils/state';
import { SectionContainer } from '../homeView';

const sum_img = '/images/open-doodles-zombieing.png'
//const docCv = require('../../../../public/CVSpa.docx');

//INIT VIEW ABOUT
const AboutView = () => {
    //GET DATA TO THE TEXT
    const getDataLeg = useStateData();

    const divAbout = useRef(null);

    useEffect(() => {
        getDataLeg('').offsetTopAbout = divAbout.current.offsetTop;
    }, []);

    return (
        <div ref={divAbout}>
            <SectionContainer
                id={'aboutView'}
                title={getDataLeg('lg.menu.about.title')}
                style={{ display: 'flex' }}
                backgroundColor={'DEF2F1'}
                classBody={'about-body'}
            >
                <AboutContent />
            </SectionContainer>
        </div>
    );
};

//CONTENT OF THE VIEW
const AboutContent = () => {
    //GET DATA OF THE JSON
    const getDataLeg = useStateData();
    // SUMMARY OF THE VIEW
    const TitleSummaryContainer = (props) => {
        return (
            <div className={'col-summ-1'}>
                <div className={'title-summary-container'}>{props.children}</div>
                <a target={'_blank'} className={'download-sum'}>
                    {getDataLeg('lg.menu.about.download')}
                </a>
            </div>
        );
    };
    const textSummary = getDataLeg('lg.menu.about.summary');

    return (
        <>
            <div className={'title-about-container'}>
                <div className={'title-container-about'}>
                    <span className={'text-title-about'}>
                        {getDataLeg('lg.menu.about.titleView')}
                    </span>
                </div>
                <div className={'img-summary'}>
                    <img style={{ height: '80%', margin: '10% 0 0 0' }} src={sum_img}></img>
                </div>
            </div>
            <TitleSummaryContainer>
                <span>{textSummary}</span>
            </TitleSummaryContainer>
        </>
    );
};

export default AboutView;
