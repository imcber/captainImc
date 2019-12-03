import React from 'react';
import './techView.css';
import {SectionContainer} from '../homeView';
import {useStateData} from '../../utils/state';

const TechView = () =>{
    const getDataLeg = useStateData();
    return(
        <SectionContainer title={getDataLeg('lg.menu.tech.title')}>
            <h1>TECH VIEW</h1>
        </SectionContainer>
    );
}

export default TechView;