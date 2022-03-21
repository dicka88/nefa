import React from 'react';
import { ResponsiveContainer, Area, ComposedChart } from 'recharts';

export default function CoinAreaChart({ isUpTrend }) {
  const data = [
    { uv: 10 },
    { uv: 14 },
    { uv: 19 },
    { uv: 10 },
    { uv: 7 },
    { uv: 12 },
    { uv: 15 },
    { uv: 13 },
  ];

  return (
    <ResponsiveContainer
      height={50}
      width={150}
    >
      <ComposedChart
        data={data}
      >
        <defs>
          <linearGradient id="colorUptrend" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#5FDF92" stopOpacity={1} />
            <stop offset="95%" stopColor="#5FDF92" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorDowntrend" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#FFBDBD" stopOpacity={1} />
            <stop offset="95%" stopColor="#FFBDBD" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area
          type="natural"
          dataKey="uv"
          stroke={isUpTrend ? '#28C165' : '#F4574D'}
          strokeWidth="2"
          fill={`url(#${isUpTrend ? 'colorUptrend' : 'colorDowntrend'})`}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
