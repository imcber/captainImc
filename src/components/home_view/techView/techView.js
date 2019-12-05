import React,{useState} from 'react';
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

    const [valuesChart,setValuesChart] = useState({exp:'0',use:'0',skills:'0',speed:'0'})

    //FIRST HANDMADE CONTAINER
    const ElementsContainer = props =>{
        return(
            <div className={'elements-t-container ' + props.class}>
                {props.children}
            </div>
        );
    }
    //CHARTS PART
    const Charts = () => {
        return(
            <ElementsContainer class={'tech-charts'}>
                <div></div>
                <CircleChart />
            </ElementsContainer>
        );
    };
    //LIST TECHS PART
    const TechList = () =>{
        //LIST OF TECHS
        const list = [
            {name:'JavaScript',icon:javaScriptTech,exp:'3',use:'8',skills:'6',speed:'6'},
            {name:'ReactJS',icon:reactTech,exp:'1',use:'8',skills:'4',speed:'4'},
            {name:'Angular',icon:angularTech,exp:'1',use:'5',skills:'4',speed:'4'},
            {name:'HTML',icon:htmlTech,exp:'3',use:'8',skills:'6',speed:'5'},
            {name:'CSS',icon:cssTech,exp:'3',use:'7',skills:'6',speed:'5'},
            {name:'Python',icon:pythonTech,exp:'2',use:'4',skills:'4',speed:'4'},
            {name:'Java',icon:javaTech,exp:'3',use:'6',skills:'5',speed:'5'},
            {name:'C#',icon:csharpTech,exp:'2',use:'3',skills:'4',speed:'5'}
        ];

        //EACH ITEM OF LIST
        const ItemList = props => {
            let thisItem = props.itemList;
            return(
                <div className={'tech-item'}>
                    <img src={thisItem.icon}></img>
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
            <Charts />
        </>
    );
}

export default TechView;