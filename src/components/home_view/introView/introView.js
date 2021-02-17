import React from 'react';
//import './introView.css';
//import {useDataLanguage} from '../../utils/useDataLanguage';
import { useStateValue, useStateData } from '../../utils/state';

//IMG INSIDE INTRO VIEW
const mainImg = '/images/flame-camera-access.png';

//INIT VIEW ABOUT
const IntroView = () => {
    //object context
    const [state, setState] = useStateValue();
    const offLoader = state.offLoader;
    console.log('state.lgActual', state.lgActual);

    //funtion click switch language
    const switchLanguage = (nameLang) => {
        if (state.lgActual !== nameLang) {
            setState({
                type: 'changeLanguage',
                newLanguage: nameLang,
            });
            offLoader();
        }
    };

    return (
        <section className={'section-container back-color'}>
            <div className='header-intro mx-6 pt-2'>
                <span className='title-intro' style={{ fontSize: '100%' }}>
                    {state.lg.header.degree}
                </span>
                <div className='mr-36'>
                    {state.lgKeys.map((nameLang) => (
                        <span
                            onClick={() => switchLanguage(nameLang)}
                            style={state.lgActual !== nameLang ? {} : { color: '#DEF2F1' }}
                            className='mr-6 cursor-pointer'
                        >
                            {nameLang.toUpperCase()}
                        </span>
                    ))}
                </div>
            </div>
            <div className='intro-view'>
                <MenuList />
            </div>
            <div className={'complement-intro mt-auto'}>
                <div className={'flex justify-between'}>
                    <span className='title-intro'>{'CAPTAINIMC.DEV'}</span>
                    <span className='title-intro'>{'2021'}</span>
                </div>
            </div>
        </section>
    );
};

//FOOTER FROM THE INTRO
const FooterIntro = () => {
    const FooterIntro = (props) => {
        return (
            <div className={''}>
                <div className={''} style={props.style}>
                    <span className='title-intro'>{props.text}</span>
                </div>
            </div>
        );
    };
    return (
        <>
            <FooterIntro text={'CAPTAINIMC.DEV'} />
            <FooterIntro style={{ right: '0' }} text={'2021'} />
        </>
    );
};

//Contain the items of the menu
function MenuList(props) {
    const getDataText = useStateData();
    let listMenuStr = ['about', 'tech', 'work', 'contact'];
    const listItemMenu = listMenuStr.map((item) => {
        return { title: getDataText('lg.menu.' + item).title, section: item };
    });

    const MenuItem = (props) => {
        const goSection = () => {
            const thisSection = '#' + props.item.section + 'View';
            document
                .querySelector(thisSection)
                .scrollIntoView({ behavior: 'smooth', block: 'start' });
        };

        return (
            <div>
                <a className={'menu-item'} onClick={goSection}>
                    {props.item.title}
                </a>
            </div>
        );
    };

    return (
        <>
            <div className={'menu-container'}>
                {listItemMenu.map((item) => (
                    <MenuItem key={item.section} item={item} />
                ))}
            </div>
            <div className='main-img-container'>
                <img src={mainImg} alt={'intro-img'} />
            </div>
        </>
    );
}

export default IntroView;
