import React,{useState} from 'react';
import './workView.css';
import {SectionContainer} from '../homeView';
import {useStateData} from '../../utils/state';

const beraviImg = require('../../../assets/img/sites/Beravi.jpg');
const leafireImg = require('../../../assets/img/sites/Beravi.jpg');
const cthcImg = require('../../../assets/img/sites/Beravi.jpg');
const listImgSites = {
    beravi:beraviImg,
    leafire:leafireImg,
    cthc:cthcImg
};

//INIT WORK VIEW
const WorkView = () =>{
    //GET DATA JSON
    const getDataLeg = useStateData();
    //NUM OF CARDS TO DISPLAY
    const numListDisplay = 2;
    //GET LIST OF MY WORK
    const listJsonSites = getDataLeg('lg.menu.work.sites');
    //GET LIST OF LIST TO DISPLAY
    const listPagination = getListPagination(listJsonSites,numListDisplay);
    //OBJECT OF ACTUAL ACTUAL SITE TO DISPLAY
    const [actualWorkDisp,setActualWorkDisp] = useState(listPagination[0][0]);

    const handlerClick = item =>{
        setActualWorkDisp(item);
    };
    
    return(
        <SectionContainer id={'workView'} title={getDataLeg('lg.menu.work.title')} style={{display:'flex'}} classHeader={'header-work-section'}>
            <WorkContent actualWorkDisp={actualWorkDisp}/>
            <ListSitesSection listPagination={listPagination} numList={numListDisplay} handlerClick={handlerClick}/>
        </SectionContainer>
    );
};
export default WorkView;

//SECTION OF WORK LIST
const ListSitesSection = props => {
    //NUMBER OF IMGS TO DISPLAY
    const numListDisplay = props.numList;
    //GET LIST OF LIST TO DISPLAY
    let listPagination = props.listPagination;
    //HOOK OF NUMBER
    const [numList,setNumList] = useState(0);
    //ACTUAL LIST TO DISPLAY
    const listDisplay = listPagination[numList];
    //EVENT TO CHANGE SITE
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
                <img src={thisItem.img} alt={thisItem.name} className={'img-card'}></img>
            </div>
        );
    };

    //NAVIGATION BUTOON TO LIST SITES
    const NavigationButton = props =>{
        const navDirection = props.direction === "prev"?'<':'>';
        const clickNavigate = () =>{
            navigatePagination(props.direction);
        };
        return(
            <div className={'navigation-list-button'} onClick={clickNavigate}>
                <span>{navDirection}</span>
            </div>
        );
    };
    //FUNCTION TO NAV IN THE PAGINATION OF LIST SITES
    const navigatePagination = position =>{
        //GET NEXT OR BACK
        let newNumPag = position === "next"?numList+1:numList-1;
        //IF NEW NUM IS > OF LENGTH LIST PAGINATION, RETURN THE FIRST. IF NEW NUM IS LESS THAN 0, SO SET THE LAST OF LIST PAGINATION
        newNumPag = newNumPag >= listPagination.length?0:newNumPag < 0?listPagination.length - 1:newNumPag;
        setNumList(newNumPag);
    };

    return(
        <div style={{width:'35%'}}>
            <div className={'list-site-section'}>
                {listPagination.length > 1 && <NavigationButton direction={'prev'}/>}
                <div style={{width:'80%'}}>
                    {listDisplay.map(item => <CardSite item={item} key={item.name.toUpperCase()}/>)}
                </div>
                {listPagination.length > 1 && <NavigationButton direction={'next'}/>}
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
                    <img src={actualSite.img} alt={actualSite.name} className="img-display"></img>
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
    
    Object.keys(listOriginal).map((item) => {
        if(indx > numInd){
            listResponse.push(listAuxTemp);
            listAuxTemp = new Array();
            indx = 1;
        }
        listOriginal[item].img = listImgSites[item.toLowerCase()];
        listAuxTemp.push(listOriginal[item]);
        indx++;
    });

    listResponse.push(listAuxTemp);
    return listResponse;
};