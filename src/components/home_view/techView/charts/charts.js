import React,{useRef,useEffect} from 'react';
import './charts.css';

export const CircleChart = (props) =>{
    const thisItem = props.item;
    const textRange = thisItem.type === "NAT"?(parseFloat(thisItem.range)/10):thisItem.range;
    const text = thisItem.text;
    const refChart = useRef(null);

    useEffect(() => {
        let thisChart = refChart;
        setTimeout(()=>{
            thisChart.current.style.animation = 'progress 1s ease-out forwards';
            thisChart.current.style.strokeDasharray = thisItem.range +', 100';
        },200);
        return(() => {
            thisChart.current.style.animation = ''; 
        });
    });
    return(
        <div className={'single-chart'}>
            <svg viewBox='0 0 36 36' className='circular-chart'>
            <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#17252A" />
                <stop offset="100%" stopColor="#3AAFA9" />
                </linearGradient>
            </defs>
                <path className='circle-bg'
                    d='M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831'
                />
                <path ref={refChart} className='circle' 
                    d='M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831'
                    strokeDasharray='0, 100'
                    stroke='url(#gradient)'
                />
                <text x='18' y='18' className='chart-value'>{textRange}</text>
                <text x='18' y='25' className='chart-type'>{text}</text>
            </svg>
        </div>
    );
};