import React,{useState,useEffect,useRef} from 'react';
import './workView.css';
import {SectionContainer} from '../homeView';
import {useStateData} from '../../utils/state';
import {IoIosArrowBack,IoIosArrowForward} from 'react-icons/io';
import {IconContext} from 'react-icons';

const beraviImg = require('../../../assets/img/sites/Beravi.jpg');
const cthcImg = require('../../../assets/img/sites/captain.jpg');
const leafireImg = require('../../../assets/img/sites/leafire.jpg');
const listDataSites = {
    beravi:{
        img:beraviImg,
        url:'https://beravi.herokuapp.com/'
    },
    leafire:{
        img:leafireImg,
        url:'https://leafire.herokuapp.com/'
    },
    cthc:{
        img:cthcImg,
        url:'https://beravi.herokuapp.com/'
    },
    otro:{
        img:leafireImg,
        url:'https://leafire.herokuapp.com/'
    },
};

//INIT WORK VIEW
const WorkView = () =>{
    //GET DATA JSON
    const getDataLeg = useStateData();
    //NUM OF CARDS TO DISPLAY
    const numListDisplay = 3;
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
        <SectionContainer id={'workView'} title={getDataLeg('lg.menu.work.title')} style={{display:'flex'}} classHeader={'header-work-section'} classBody={'body-work-section'}>
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
    //CONTAINER LIST SITES REF
    const listSitesRef = useRef(null);
    //CARD OF EACH SITE
    const CardSite = props => {
        const thisItem = props.item;
        const heightDina = ((100/numListDisplay)-2)+'%';

        const clickFunction = () => {
            onHandlerClick(thisItem);
        };

        return(
            <div className={'card-site'} style={{height:heightDina}} onClick={clickFunction}>
                <div style={{height:'auto', cursor:'pointer'}}>
                    <div>
                        <span className={'title-card'}>{thisItem.name}</span>
                    </div>
                    <div style={{display:'flex'}}>
                        <div style={{display:'grid',width:'63%',alignItems:'center'}}>
                            <span className='summary-card'>{thisItem.desc}</span>
                        </div>
                        <div className={'card-container'}>
                            <img src={thisItem.img} alt={thisItem.name} className={'img-card'}></img>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    //NAVIGATION BUTOON TO LIST SITES
    const NavigationButton = props =>{
        const navDirection = props.direction === "prev"?<IoIosArrowBack />:<IoIosArrowForward />;
        const thisStyle = props.style;
        const clickNavigate = () =>{
            navigatePagination(props.direction);
        };
        return(
            <div className={'navigation-list-button'} onClick={clickNavigate} style={thisStyle}>
                <span>
                    <IconContext.Provider value={{size:'4em'}}>
                        {navDirection}
                    </IconContext.Provider>
                </span>
            </div>
        );
    };
    //FUNCTION TO NAV IN THE PAGINATION OF LIST SITES
    const navigatePagination = position =>{
        //GET NEXT OR BACK
        let newNumPag = position === "next"?numList+1:numList-1;
        //IF NEW NUM IS > OF LENGTH LIST PAGINATION, RETURN THE FIRST. IF NEW NUM IS LESS THAN 0, SO SET THE LAST OF LIST PAGINATION
        newNumPag = newNumPag >= listPagination.length?0:newNumPag < 0?listPagination.length - 1:newNumPag;
        listSitesRef.current.style.opacity = '0';
        setNumList(newNumPag);
    };
    
    useEffect(() => {
        let thisRefListSite = listSitesRef;
        setTimeout(() =>{
            thisRefListSite.current.style.animation = 'navigation-sites 250ms linear';
            thisRefListSite.current.style.opacity = '1';
        },250);
        return(() => {
            thisRefListSite.current.style.animation = '';
        });
    },[numList]);

    return(
        <div className={'carou-work'}>
            <div className={'list-site-section'}>
                {listPagination.length > 1 && <NavigationButton direction={'prev'}/>}
                {listPagination.length > 1 && <NavigationButton direction={'next'} style={{right:'0'}}/>}
                <div className={'list-site-section-container'} ref={listSitesRef}>
                    {listDisplay.map(item => <CardSite item={item} key={item.name.toUpperCase()}/>)}
                </div>
            </div>
        </div>
    );
};

//CONTENT OF ALL THE VIEW
const WorkContent = props =>{
    //GET DATA JSON
    const getDataLeg = useStateData();
    //SITE TO DISPLAY IN BIG VIEW
    const actualWorkDisp = props.actualWorkDisp;

    //THIS SHOW DE ACTUAL IMG AND INFO ABOUT SELECTED SITE
    const BigViewSite = () =>{
        //Work that display in the view
        const actualSite = actualWorkDisp;
        //CONTAINER OF EACH ITEM OF BIG VIEW
        const ContainerInView = props =>{
            const objClass = props.class;
            return(
                <div className={objClass}>
                    {props.children}
                </div>
            );
        };
        //FUNCTION TO OPEN NEW WINDOW WITH THE SITE
        const goSite = () =>{
            window.open(actualSite.url, '_blank');
        };

        return(
            <div className={'big-view-site'}>
                <ContainerInView class={'img-big-work'}>
                    <img src={actualSite.img} alt={actualSite.name} className="img-display"></img>
                </ContainerInView>
                <ContainerInView  class={'cntr-big-view-title'}>
                    <div style={{width:'100%',height:'100%',display:'flex'}}>
                        <div className={'big-view-title'}>        
                                <span>{actualSite.name}</span>
                        </div>
                    </div>
                </ContainerInView>
                <ContainerInView class={'container-btn-go'}>
                    <div className={'big-view-desc-container'}>
                        <span className={'big-view-desc'}>{actualSite.desc}</span>
                        <button className='btn-explore' onClick={goSite}>{getDataLeg('lg.menu.work.go')}</button>
                    </div>
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

//GET ORDER LIST OF ALL SITES THAT WE ADD IN JSON OF DATA LANGUAGES
const getListPagination = (listOriginal,numInd) => {
    let listAuxTemp = [];
    let indx = 1;
    let listResponse = [];
    
    Object.keys(listOriginal).map((item) => {
        if(indx > numInd){
            listResponse.push(listAuxTemp);
            listAuxTemp = [];
            indx = 1;
        }
        listOriginal[item].img = listDataSites[item.toLowerCase()].img;
        listOriginal[item].url = listDataSites[item.toLowerCase()].url;
        listAuxTemp.push(listOriginal[item]);
        indx++;
    });

    listResponse.push(listAuxTemp);
    return listResponse;
};