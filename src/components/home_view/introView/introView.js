import React from 'react';
import './introView.css';
//import {useDataLanguage} from '../../utils/useDataLanguage';
import {useStateValue,useStateData} from '../../utils/state';


//IMG INSIDE INTRO VIEW
const mainImg = require('../../../assets/img/flame-camera-access.png');

//INIT VIEW ABOUT
const IntroView = () => {
    //this the intro view, contains the principal menu and paralllax img.
    const IntroViewReturn=(props) => {
        return(
            <section className={'section-container back-color'}>
                <ComplementView>
                    <HeaderIntro />   
                </ComplementView>
                <div className='intro-view'>
                    <MenuList />
                </div>
                <ComplementView>
                    <FooterIntro />
                </ComplementView>
            </section>
        );
    }

    //The complement about info
    const ComplementView=(props)=>{
        return(
            <div className={'complement-intro'}>
                {props.children}
            </div>
        );
    }

    return(
        <IntroViewReturn />
    );
};

//FOOTER FROM THE INTRO
const FooterIntro = () =>{
    const FooterIntro = (props) => {
        return(
            <div className={'footer-intro'}>
                <div className={'footer-container'} style={props.style}>
                    <span className='title-intro'>{props.text}</span>
                </div>
            </div>
        );
    }
    return(
        <>
            <FooterIntro style={{}} text={'CAPTAINIMC.COM'}/>
            <FooterIntro style={{left: '85%'}} text={'2020'}/>
        </>
    );
}

function HeaderIntro(props){
    //object context
    const [dataText,handlerlanguage] = useStateValue();
    //item to switch language
    const LanguageItem = (props) =>{
        const indLang = dataText.lgActual !== props.nameLang;
        const offLoader = dataText.offLoader;
        //funtion click switch language
        const switchLanguage = () =>{
            handlerlanguage({
                    type : 'changeLanguage',
                    newLanguage : props.nameLang
            });
            offLoader();
        };
        return(
            <span onClick={indLang?switchLanguage:()=>{}} style={!indLang?{color:'#DEF2F1'}:{}}>
                {props.nameLang.toUpperCase()}  
            </span>
        );
    };

    const HeaderIntro = (props) => {
        return(
            <div className={props.class1}>
                <div className={props.class2}>
                    {props.children}
                </div>
            </div>  
        );
    }

    return(
        <>
            <HeaderIntro class1={'header-intro'} class2={'title-container'}>
                <span className='title-intro' style={{fontSize:'100%'}}>{dataText.lg.header.degree}</span>
            </HeaderIntro>
            <HeaderIntro class1={'header-intro-lg'} class2={'container-intro-lg'}>
                {dataText.lgKeys.map((item) => <LanguageItem key={item} nameLang={item}/>)}
            </HeaderIntro>
        </>
    );
}

//Contain the items of the menu
function MenuList(props){
   const getDataText = useStateData();
   let listMenuStr = ['about','tech','work','contact'];
   const listItemMenu = listMenuStr.map(item => {
        return {title:getDataText('lg.menu.'+item).title,section:item};
   });

   const MenuItem = props =>{
        return(
            <div>
                <a href={'#'+props.item.section + 'View'} className={'menu-item'}>{props.item.title}</a>
            </div>
        );
    }

    return(
        <>
            <div className={'menu-container'}>
                {listItemMenu.map((item) => <MenuItem key={item.section} item={item}/>)}
            </div>
            <div className='main-img-container'>
                <img src={mainImg} alt={'intro-img'}/>
            </div>
        </>
    );
}

export default IntroView;