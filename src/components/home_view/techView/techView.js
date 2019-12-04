import React from 'react';
import './techView.css';
import {SectionContainer} from '../homeView';
import {useStateData} from '../../utils/state';
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
        <SectionContainer id={'techView'} title={getDataLeg('lg.menu.tech.title')}>
            <TechContent />
        </SectionContainer>
    );
}

//FUNCTION PART
const TechContent = () => {
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
            <ElementsContainer class={'tech-charts'}></ElementsContainer>
        );
    };
    //LIST TECHS PART
    const TechList = () =>{
        //LIST OF TECHS
        const list = [
            {name:'JavaScript',icon:javaScriptTech},
            {name:'ReactJS',icon:reactTech},
            {name:'Angular',icon:angularTech},
            {name:'HTML',icon:htmlTech},
            {name:'CSS',icon:cssTech},
            {name:'Python',icon:pythonTech},
            {name:'Java',icon:javaTech},
            {name:'C#',icon:csharpTech},
            {name:'Unity',icon:unityTech}
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