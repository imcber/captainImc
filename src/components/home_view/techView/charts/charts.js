import React, { useRef, useEffect } from 'react';
//import './charts.css';

//EACH CIRCLE TO DISPLAY
export const CircleChart = (props) => {
    //ACTUAL ITEM
    const thisItem = props.item;
    //TEXT RANGE TO DISPLAY
    const textRange = thisItem.type === 'NAT' ? parseFloat(thisItem.range) / 10 : thisItem.range;
    //NAME OF CHART
    const text = thisItem.text;
    //REF OF CHART
    const refChart = useRef(null);
    //COLOR OF THE STROKE
    const listColorsStroke = [
        { offset: '0', color: '2AF598' },
        { offset: '100', color: '08AEEA' },
    ];

    useEffect(() => {
        let thisChart = refChart;
        if (thisChart) {
            setTimeout(() => {
                //SET ANIMATION
                thisChart.current.style.animation = 'progress 1s ease-out forwards';
                //SET RANGE 0 - 100
                thisChart.current.style.strokeDasharray = thisItem.range + ', 100';
            }, 200);
        }
        return () => {
            if (thisChart) thisChart.current.style.animation = '';
        };
    });
    return (
        <div className={'single-chart'}>
            <svg viewBox='0 0 36 46' className='circular-chart'>
                <StrokeGradient
                    listColors={listColorsStroke}
                    posLineGrad={{ x1: '0%', y1: '100%', x2: '0%', y2: '0%' }}
                    id={'gradientIn'}
                />
                <PathSvg
                    class={'circle-bg'}
                    d={
                        'M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831'
                    }
                />
                <PathSvg
                    class={'circle'}
                    d={
                        'M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831'
                    }
                    strokeId={'url(#gradientIn)'}
                    strokeDasharray={'0,100'}
                    refDom={refChart}
                />
                <text x='18' y='18' className='chart-value'>
                    {textRange}
                </text>
                <text x='18' y='25' className='chart-type'>
                    {text}
                </text>
                <text x='18' y='40' className='chart-descr'>
                    {thisItem.name}
                </text>
            </svg>
        </div>
    );
};

const PathSvg = (props) => {
    //ID OF THE STROKE TO DISPLAY
    const idStroke = props.strokeId ? props.strokeId : '';
    //REF OF DOM
    const refDom = props.refDom ? props.refDom : null;
    //RANGE TO DISPLAY 0 - 100
    const strokeDasharray = props.strokeDasharray ? props.strokeDasharray : '';
    return (
        <path
            className={props.class}
            d={props.d}
            stroke={idStroke}
            strokeDasharray={strokeDasharray}
            ref={refDom}
        />
    );
};

const StrokeGradient = (props) => {
    const posLineGrad = props.posLineGrad;
    const listColors = props.listColors;
    return (
        <defs>
            <linearGradient
                id={props.id}
                x1={posLineGrad.x1}
                y1={posLineGrad.y1}
                x2={posLineGrad.x2}
                y2={posLineGrad.y2}
            >
                {listColors.map((item) => (
                    <stop
                        offset={item.offset + '%'}
                        stopColor={'#' + item.color}
                        key={item.color}
                    />
                ))}
            </linearGradient>
        </defs>
    );
};
