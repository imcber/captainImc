import React,{useState} from 'react';
import './workView.css';
import {SectionContainer} from '../homeView';
import {useStateData} from '../../utils/state';

//INIT WORK VIEW
const WorkView = () =>{
    //GET DATA JSON
    const getDataLeg = useStateData();
    //GET LIST OF MY WORK
    const listJsonSites = getDataLeg('lg.menu.work.sites');
    //OBJECT OF ACTUAL ACTUAL SITE TO DISPLAY
    const [actualWorkDisp,setActualWorkDisp] = useState(listJsonSites[0]);
    
    return(
        <SectionContainer id={'workView'} title={getDataLeg('lg.menu.work.title')} style={{display:'flex'}} classHeader={''}>
            <WorkContent actualWorkDisp={actualWorkDisp}/>
            <ListSitesSection listJsonSites={listJsonSites}/>
        </SectionContainer>
    );
};

//SECTION OF WORK LIST
const ListSitesSection = props => {
    //LIST OF ALL SITES
    const listJsonSites = props.listJsonSites;
    let listPagination = [];
    let listAuxTemp = [];
    listJsonSites.map((item,indx) => {
        if(indx < props.lengthDisplay){
            listAuxTemp.push(item);
        }else{
            listPagination.push(listAuxTemp);
            listAuxTemp = [];
            
        }
    });

    //CARD OF EACH SITE
    const CardSite = props => {
        const thisItem = props.item;
        const heightDina = (100/3)+'%';
        return(
            <div className={'card-site'} style={{height:heightDina}}>
                <span>{thisItem.name}</span>
            </div>
        );
    };

    return(
        <div className={'list-site-section'}>
            {listJsonSites.map(item => <CardSite item={item}/>)}
        </div>
    );
};

//CONTENT OF ALL THE VIEW
const WorkContent = props =>{
    const actualWorkDisp = props.actualWorkDisp;

    //THIS SHOW DE ACTUAL IMG AND INFO ABOUT SELECTED SITE
    const BigViewSite = () =>{
        //Work that display in the view
        const actualSite = actualWorkDisp;
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
                    <span style={{float:"left"}}>{actualSite.name}</span>
                    <span style={{float:"right"}}>GO</span>
                </ContainerInView>
                <ContainerInView height={'65%'}>
                    <span style={{float:"left"}}>NAME SITE</span>
                </ContainerInView>
                <ContainerInView height={'20%'}>
                    <span style={{float:"left"}}>{actualSite.desc}</span>
                </ContainerInView>
            </div>
        );
    }

    return(
        <>
            <BigViewSite actualSite={actualWorkDisp}/>
        </>
    );
};


export default WorkView;