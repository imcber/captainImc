import React from 'react';
import './aboutView.css'
import {useStateData} from '../../utils/state';

const AboutView = () =>{
    const getDataLeg = useStateData();
    return(
        <section className={'section-container'} style={{background:'#DEF2F1'}}>
            <div className={'title-container'}>
                <span>{getDataLeg('lg.header.degree')}</span>
            </div>
        </section>
    );
}

export default AboutView;  