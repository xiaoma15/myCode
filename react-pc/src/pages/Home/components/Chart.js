import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';

const Chart = ({ title }) => {

    let option = {
        title: {
            text: title,
        },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar'
            }
        ]
    };

    const myRef = useRef(null);

    useEffect(() => {
        // var chartDom = document.getElementById('main');
        var myChart = echarts.init(myRef.current);
        option && myChart.setOption(option);
    }, [])
    return (
        <div id="main" ref={myRef} style={{ width: "600px", height: "400px" }}></div>
    )
}

export default Chart