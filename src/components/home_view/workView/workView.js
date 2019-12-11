import React from 'react';
import './workView.css';
import {SectionContainer} from '../homeView';
import {useStateData} from '../../utils/state';

//INIT WORK VIEW
const WorkView = () =>{
    //GET DATA JSON
    const getDataLeg = useStateData();
    return(
        <SectionContainer id={'workView'} title={getDataLeg('lg.menu.work.title')} style={{display:'flex'}} classHeader={''}>
            <WorkContent />
        </SectionContainer>
    );
};

//CONTENT OF ALL THE VIEW
const WorkContent = () =>{
    const getDataLeg = useStateData();
    const listJsonSites = getDataLeg('lg.menu.work.sites');
    return(
        <>
            <BigViewSite />
            <ListSitesSection listJsonSites={listJsonSites}/>
        </>
    );
};

const ListSitesSection = props => {
    const listJsonSites = props.listJsonSites;
    return(
        <div className={'list-site-section'}>
            {listJsonSites.map(item => item.name)}
        </div>
    );
};

//THIS SHOW DE ACTUAL IMG AND INFO ABOUT SELECTED SITE
const BigViewSite = () =>{
    const ContainerInView = props =>{
        return(
            <div style={{width:'100%',height:props.height}}>
                {props.children}
            </div>
        );
    };

    return(
        <div className={'big-view-site'}>
            <ContainerInView height={'15%'}>
                <span style={{float:"left"}}>NAME SITE</span>
                <span style={{float:"right"}}>GO</span>
            </ContainerInView>
            <ContainerInView height={'65%'}>
                <span style={{float:"left"}}>NAME SITE</span>
            </ContainerInView>
            <ContainerInView height={'20%'}>
                <span style={{float:"left"}}>NAME SITE</span>
            </ContainerInView>
        </div>
    );
}



export default WorkView;