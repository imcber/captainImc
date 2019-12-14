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

    const handlerClick = item =>{
        setActualWorkDisp(item)
    };
    
    return(
        <SectionContainer id={'workView'} title={getDataLeg('lg.menu.work.title')} style={{display:'flex'}} classHeader={'header-work-section'}>
            <WorkContent actualWorkDisp={actualWorkDisp}/>
            <ListSitesSection listJsonSites={listJsonSites} numList={3} handlerClick={handlerClick}/>
        </SectionContainer>
    );
};
export default WorkView;
//SECTION OF WORK LIST
const ListSitesSection = props => {
    //LIST OF ALL SITES
    const listJsonSites = props.listJsonSites;
    const numListDisplay = props.numList;
    let listPagination = getListPagination(listJsonSites,numListDisplay);
    const [listDisplay,setListPagination] = useState(listPagination[0]);
    const onHandlerClick = props.handlerClick;

    //CARD OF EACH SITE
    const CardSite = props => {
        const thisItem = props.item;
        const heightDina = (100/numListDisplay)+'%';

        const clickFunction = () => {
            onHandlerClick(thisItem);
        };

        return(
            <div className={'card-site'} style={{height:heightDina}} onClick={clickFunction}>
                <span>{thisItem.name}</span>
            </div>
        );
    };

    return(
        <div style={{height:'100%',width:'35%'}}>     
            <div className={'list-site-section'}>
                {listDisplay.map(item => <CardSite item={item} key={item.name.toUpperCase()}/>)}
            </div>
            <div className={'navigation-list-sites'}>

            </div>
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

const getListPagination = (listOriginal,numInd) => {
    let listAuxTemp = [];
    let indx = 1;
    let listResponse = [];
    
    listOriginal.map((item) => {
        if(indx > numInd){
            listResponse.push(listAuxTemp);
            listAuxTemp = new Array();
            indx =0;
        }
        
        listAuxTemp.push(item);
        indx++;
    });

    if(listResponse.length < 1){
        listResponse.push(listAuxTemp);
    }
    return listResponse;
};