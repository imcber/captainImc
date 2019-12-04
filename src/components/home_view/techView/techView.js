import React from 'react';
import './techView.css';
import {SectionContainer} from '../homeView';
import {useStateData} from '../../utils/state';

const TechView = () =>{
    const getDataLeg = useStateData();
    return(
        <SectionContainer id={'techView'} title={getDataLeg('lg.menu.tech.title')}>
            <TechContent />
        </SectionContainer>
    );
}

const TechContent = () => {
    const TechList = () =>{
        const list = [
            {name:'JavaScript',icon:''},
            {name:'ReactJS',icon:''},
            {name:'Angular',icon:''}
        ];
        return(
            <div>
                {list.map((item) => item.name)}
            </div>
        );
    };
    return(
        <div className={"rest-container-body"}>
            <TechList />
        </div>
    );
}

export default TechView;