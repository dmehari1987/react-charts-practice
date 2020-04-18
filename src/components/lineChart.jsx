import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = () => {
    const data = {
        labels: [2015, 2016, 2017, 2018, 2019, 2020],
        datasets: [
            {
                label: "Sales for last SIX years(in Thousandes)",
                data: [200, 500, 250, 270, 350, 400]
            }
        ]
    }
    return ( 
        <Line data={data} />
     );
}
 
export default LineChart;