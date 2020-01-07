import React from 'react';
import './contactView.css';
import {SectionContainer} from '../homeView';
import {useStateData} from '../../utils/state';
import {FaHome,FaFacebookF,FaTwitter,FaInstagram,FaGithub,FaDribbble,FaLinkedin} from 'react-icons/fa';
import { IconContext } from "react-icons";

const socialList = [
    {icon:<FaFacebookF/>,href:'https://www.facebook.com/imcber1',name:'facebook'},
    {icon:<FaTwitter/>,href:'https://twitter.com/CaptainImcber',name:'twitter'},
    {icon:<FaInstagram/>,href:'https://www.instagram.com/imcber1',name:'instagram'},
    {icon:<FaGithub/>,href:'https://github.com/imcber',name:'github'},
    {icon:<FaDribbble/>,href:'https://dribbble.com/IMCDEV',name:'dribbble'},
    {icon:<FaLinkedin/>,href:'www.linkedin.com/in/imcber',name:'linkedin'},
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
    //GET DATA JSON
    const getDataLeg = useStateData();
    //EACH ITEM OF SOCIAL ICON
    const SocialItem = props =>{
        const thisItem = props.item;
        const handlerClick = () =>{
            window.open(thisItem.href,'_blank');
        }
        return(
            <li onClick={handlerClick}>
                <IconContext.Provider value={{color:'#3AAFA9',size:'3em',className:'social-item'}}>
                    {thisItem.icon}
                </IconContext.Provider>
            </li>
        )
    }
    return(
        <div className={'body-container-contact'}>
            <div className={'question-section'}>
                <span>{getDataLeg('lg.menu.contact.quest')}</span>
            </div>
            <div>
                <ul className={'list-social'}>
                    {socialList.map(item=><SocialItem item={item} key={item.name}/>)}
                </ul>
            </div>
            <div>
                ilustracion
            </div>
        </div>
    );
}