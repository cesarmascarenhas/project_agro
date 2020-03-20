import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';


export default function AreaChart({data, color}) {
    return (
        <LineChart width={360} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }} >
            <Line type="monotone" dataKey="value" stroke="#8884d8" isAnimationActive={false} />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="label" />
            <YAxis dataKey="value"/>
        </LineChart>
    )
}
