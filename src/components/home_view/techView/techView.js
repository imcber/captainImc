import React from 'react';
import './techView.css';
import {SectionContainer} from '../homeView';
import {useStateData} from '../../utils/state';
import {FaHome,FaFacebookF,FaTwitter,FaInstagram} from 'react-icons/fa';


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
            <div className={'elements-t-container'} style={{width:props.width}}>
                {props.children}
            </div>
        );
    }
    //CHARTS PART
    const Charts = () => {
        return(
            <ElementsContainer width={'60%'}></ElementsContainer>
        );
    };
    //LIST TECHS PART
    const TechList = () =>{
        //LIST OF TECHS
        const list = [
            {name:'JavaScript',icon:<FaFacebookF/>},
            {name:'ReactJS',icon:''},
            {name:'Angular',icon:''}
        ];

        const ItemList = props => {
            let thisItem = props.itemList;
            return(
                <h1>{thisItem.icon}</h1>
            );
        }

        return(
            <ElementsContainer width={'40%'}>
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