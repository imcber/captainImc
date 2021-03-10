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

    //list of the menu
    const getDataText = useStateData();
    const listMenuStr = Object.keys(getDataText('lg.menu'));
    const listItemMenu = listMenuStr.map((item) => {
        const { title, id } = getDataText('lg.menu.' + item);
        return { title, section: item, id };
    });

    //Go to specific section
    const goSection = (item) => {
        const thisSection = '#' + item.section + 'View';
        document.querySelector(thisSection).scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

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
            <div className='intro-view mt-5'>
                <div className={'menu-container'}>
                    {listItemMenu.map((item) => (
                        <div key={item.id}>
                            <a className={'menu-item'} onClick={() => goSection(item)}>
                                {item.title}
                            </a>
                        </div>
                    ))}
                </div>
                {/* {<div className='main-img-container'>
                    <img src={mainImg} alt={'intro-img'} />
                </div>} */}
            </div>
            <div className={'complement-intro mt-auto'}>
                <div className={'flex justify-between mx-2'}>
                    <span className='title-intro'>{'CAPTAINIMC.DEV'}</span>
                    <span className='title-intro'>{'2021'}</span>
                </div>
            </div>
        </section>
    );
};

export default IntroView;
