import React,{useState,useEffect} from 'react';
import './techView.css';
import {SectionContainer} from '../homeView';
import {useStateData} from '../../utils/state';
import {CircleChart} from './charts/charts';
import {FaHome,FaFacebookF,FaTwitter,FaInstagram} from 'react-icons/fa';

const javaScriptTech = require("../../../assets/img/tech/javascript.png");
const reactTech = require("../../../assets/img/tech/react.png");
const angularTech = require("../../../assets/img/tech/angular.png");
const htmlTech = require("../../../assets/img/tech/html.png");
const cssTech = require("../../../assets/img/tech/css.png");
const pythonTech = require("../../../assets/img/tech/python.png");
const javaTech = require("../../../assets/img/tech/java.png");
const csharpTech = require("../../../assets/img/tech/csharp.png");
const unityTech = require("../../../assets/img/tech/unity.png");

//INIT VIEW ABOUT
const TechView = () =>{
    //GET DATA JSON
    const getDataLeg = useStateData();
    return(
        <SectionContainer id={'techView'} title={getDataLeg('lg.menu.tech.title')} style={{display:'flex'}} classHeader={'header-tech-section'}>
            <TechContent />
        </SectionContainer>
    );
}

    //FIRST HANDMADE CONTAINER
const ElementsContainer = props =>{
    return(
        <div className={'elements-t-container ' + props.class}>
            {props.children}
        </div>
        );
    }

//CHARTS PART
const Charts = (props) => {
    const getDataLeg = useStateData();

    const chartsList = [
        {name:getDataLeg('lg.menu.tech.charts.exp'),range:props.valuesChart.exp,key:'exp',text:getDataLeg('lg.menu.tech.charts.years'),type:'NAT'},
        {name:getDataLeg('lg.menu.tech.charts.use'),range:props.valuesChart.use,key:'use',text:'%',type:'N'}
    ];

    return(
        <div style={{float:"right",width:'55%'}}>
            <ElementsContainer class={'tech-charts'}>
                {chartsList.map((item) => <CircleChart key={item.key} item={item}/>)}
            </ElementsContainer>  
        </div>
    );
};

//LIST TECHS PART
const TechList = (props) =>{
    //LIST OF TECHS
    const list = [
        {name:'JavaScript',icon:javaScriptTech,exp:'30',use:'80'},
        {name:'ReactJS',icon:reactTech,exp:'10',use:'80'},
        {name:'Angular',icon:angularTech,exp:'10',use:'50'},
        {name:'HTML',icon:htmlTech,exp:'30',use:'80'},
        {name:'CSS',icon:cssTech,exp:'30',use:'70'},
        {name:'Python',icon:pythonTech,exp:'20',use:'40'},
        {name:'Java',icon:javaTech,exp:'30',use:'60'},
        {name:'C#',icon:csharpTech,exp:'20',use:'30'}
    ];

    //EVENT TO CHANGE THE VALUES OF THE CHART
    const handlerOnClick = props.handlerOnClick;
    const actualSelect = props.actualSelect;

    //EACH ITEM OF LIST
    const ItemList = props => {
        let thisItem = props.itemList;
        const styleSelect = thisItem.name === actualSelect?{height:'6em'}:{};
        const thisHandlerClick = () =>{
            handlerOnClick(thisItem);
        }
        return(
            <div className={'tech-item'}>
                <img src={thisItem.icon} onClick={thisHandlerClick} style={styleSelect}></img>
            </div>
        );
    }

    return(
        <div style={{float:"left",width:'45%'}}>
            <ElementsContainer class={'tech-container'}>
                {list.map((item) => <ItemList key={item.name} itemList={item}/>)}
            </ElementsContainer>
        </div>
    );
};

//FUNCTION PART
const TechContent = () => {

    //chart values
    const [valuesChart,setValuesChart] = useState({exp:'0',use:'0'});
    const [actualSelect,setActualSelect] = useState('');

    const handlerOnClickChart = (thisItem) =>{
        setValuesChart({exp:thisItem.exp,use:thisItem.use});
        setActualSelect(thisItem.name);
    };

    return(
        <>
            <TechList handlerOnClick={handlerOnClickChart} actualSelect={actualSelect}/>
            <Charts valuesChart={valuesChart}/>
        </>
    );
}

export default TechView;