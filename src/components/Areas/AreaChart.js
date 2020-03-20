import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';


export default function AreaChart({ data, color = '#fff', reverse = false }) {
    return (
        <div style={{ backgroundColor: color, padding: "10px 0", borderRadius: 6, overflow: 'hidden' }}>
            <LineChart width={360} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }} >
                <Line type="monotone" dataKey="value" stroke={reverse ? "#fff" : '#424242'} isAnimationActive={false} />
                <CartesianGrid stroke={reverse ? "#fff" : '#424242'} strokeDasharray="3 3" />
                <XAxis dataKey="label" tick={{ fill: reverse ? "#fff" : "#424242" }} stroke={reverse ? "#fff" : '#424242'} />
                <YAxis dataKey="value" tick={{ fill: reverse ? "#fff" : "#424242" }} stroke={reverse ? "#fff" : '#424242'} />
            </LineChart>
        </div>
    )
}
