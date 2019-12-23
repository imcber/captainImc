import React from 'react';
import './contactView.css';
import {SectionContainer} from '../homeView';
import {useStateData} from '../../utils/state';
import {FaHome,FaFacebookF,FaTwitter,FaInstagram,FaGithub,FaDribbble,FaLinkedin} from 'react-icons/fa';
import { IconContext } from "react-icons";

const socialList = [
    {icon:<FaFacebookF/>,href:''},
    {icon:<FaTwitter/>,href:''},
    {icon:<FaInstagram/>,href:''},
    {icon:<FaGithub/>,href:''},
    {icon:<FaDribbble/>,href:''},
    {icon:<FaLinkedin/>,href:''},
];
//INIT COMPONENT
const ContactView = () =>{
    //GET DATA JSON
    const getDataLeg = useStateData();
    return(
        <SectionContainer id={'contactView'} title={getDataLeg('lg.menu.contact.title')}
         style={{display:'flex'}} classHeader={'header-contact-section'} classBody={'body-contact-section'}>
            <ContactContent/>
        </SectionContainer>
    );
}
export default ContactView;

const ContactContent = () =>{
    const SocialItem = props =>{
        const thisItem = props.item;
        return(
            <li>
                <IconContext.Provider value={{color:'#3AAFA9',size:'3em',className:'social-item'}}>
                    {thisItem.icon}
                </IconContext.Provider>
            </li>
        )
    }
    return(
        <div className={'body-container-contact'}>
            <div className={'question-section'}>
                <span>¿Tienes preguntas? ó ¿Quieres contactarme?</span>
            </div>
            <div>
                <ul className={'list-social'}>
                    {socialList.map(item=><SocialItem item={item}/>)}
                </ul>
            </div>
            <div>
                ilustracion
            </div>
        </div>
    );
}
