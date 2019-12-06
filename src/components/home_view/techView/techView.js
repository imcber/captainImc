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
        <SectionContainer id={'techView'} title={getDataLeg('lg.menu.tech.title')} style={{display:'flex'}}>
            <TechContent />
        </SectionContainer>
    );
}

//FUNCTION PART
const TechContent = () => {

    //chart values
    const [valuesChart,setValuesChart] = useState({exp:'0',use:'0'});
    //Get data JSON
    const getDataLeg = useStateData();

    let chartsList = [
        {name:getDataLeg('lg.menu.tech.charts.exp'),range:0,key:'exp',type:getDataLeg('lg.menu.tech.charts.years')},
        {name:getDataLeg('lg.menu.tech.charts.use'),range:0,key:'use',type:'%'}
    ];

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
        return(
            <ElementsContainer class={'tech-charts'}>
                {chartsList.map((item) => <CircleChart key={item.key} item={item}/>) }
            </ElementsContainer>
        );
    };
    //LIST TECHS PART
    const TechList = () =>{
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

        //EACH ITEM OF LIST
        const ItemList = props => {
            let thisItem = props.itemList;
            const  handlerOnClick = (thisItem) =>{
                //setValuesChart({exp:thisItem.exp,use:thisItem.use})
            };
            return(
                <div className={'tech-item'}>
                    <img src={thisItem.icon} onClick={handlerOnClick(thisItem)}></img>
                </div>
            );
        }

        return(
            <ElementsContainer class={'tech-container'}>
                {list.map((item) => <ItemList key={item.name} itemList={item}/>)}
            </ElementsContainer>
        );
    };

    return(
        <>
            <TechList />
            <Charts/>
        </>
    );
}

export default TechView;