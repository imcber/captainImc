import React,{useRef,useEffect} from 'react';
import './charts.css';

export const CircleChart = (props) =>{
    const thisItem = props.item;
    const textRange = thisItem.type === "NAT"?(parseFloat(thisItem.range)/10):thisItem.range;
    const text = textRange  + ' ' + thisItem.text;
    let styleAnim = {}; 
    const refChart = useRef(null);

    useEffect(() => {
        const {currentChart} = refChart;
        console.log(currentChart);
        //styleAnim = {animation:'progress 1s ease-out forwards'};
    });
    return(
        <div className={'single-chart'}>
            <svg viewBox='0 0 36 36' className='circular-chart orange'>
                <path className='circle-bg'
                    d='M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831'
                />
                <path className='circle' 
                    d='M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831'
                    strokeDasharray={thisItem.range +', 100'}
                />
                <text x='18' y='20.35' className='percentage'>{text}</text>
            </svg>
        </div>
    );
};